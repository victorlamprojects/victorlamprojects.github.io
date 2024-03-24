import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import PageContainer from "../common/PageContainer";
import Link from "../common/Link";
import SquareBox from "../common/SquareBox";
import { Grid, Cell } from "../common/Grid";
import { getTextWidth } from "../utils/common";
import { shuffle, getRandomNonOverlappingLocation } from "../utils/algo";

const Content = styled.div`
	display: flex;
	margin: 0 1.5rem;
`

const Main = styled(Grid)`
	align-items: center;
`

const Description = styled.div`
	padding: 1rem 2rem;
	margin: 0 1rem;
	border: 2px solid #fff;
	line-height: 2rem;
`

const Profile = styled(Grid)`
	justify-content: center;
`

const ContactMeButton = styled(Link)`
	color: #3d5af1;
	font-style: italic;
`

const Image = styled.img`
	display: block;
	width: 280px;
	margin: 2rem auto;
	border-radius: 50%;
`

const SkillsContainer = styled(Cell)`
	text-align: center;
`

const Skills = styled.div`
	width: 36rem;
	max-width: 75%;
	margin: 0 auto;
	margin-top: 3rem;
	border-radius: 50%;
`

const RandomArea = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`

const RandomItem = styled.div`
	position: absolute;
	cursor: pointer;
	-ms-transform: rotate(0deg) scale(1);
	-webkit-transform: rotate(0deg) scale(1);
	transform: rotate(0deg) scale(1);
	transition: all 2s ease-in-out;
`
const Tooltip = styled.div`
	position: absolute;
	padding: 0.375rem;
	font-size: 1.25rem;
	width: auto;
	background-color: #3d5af1;
	z-index: 10000;
	border: 3px solid #E2F3F5;
`

const SKILLSET = [
	{
		skill: "React.js",
		level: 5
	}, {
		skill: "Node.js",
		level: 5
	}, {
		skill: "Java",
		level: 5
	}, {
		skill: "Spring Framework",
		level: 4
	}, {
		skill: "SQL Database",
		level: 4
	}, {
		skill: "MongoDB",
		level: 3
	}, {
		skill: "DynamoDB",
		level: 2
	}, {
		skill: "AWS",
		level: 3
	}, {
		skill: "Scrum",
		level: 4
	}, {
		skill: "Cloud",
		level: 3
	}, {
		skill: "Microservice",
		level: 3
	}, {
		skill: "Git",
		level: 5
	}, {
		skill: "JavaScript",
		level: 5
	}, {
		skill: "HTML",
		level: 5
	}, {
		skill: "CSS",
		level: 4
	}, {
		skill: "Python",
		level: 3
	}, {
		skill: "NLP",
		level: 3
	}, {
		skill: "GraphQL",
		level: 2
	}, {
		skill: "RESTful APIs",
		level: 4
	}, {
		skill: "Linux",
		level: 3
	}, {
		skill: "Scala",
		level: 3
	}];

const About = () => {
	const randomAreaRef = useRef(null);
	const [renderedSkills, setRenderedSkills] = useState([]);
	const [tooltip, setTooltip] = useState(null);

    useEffect( () => {
        if(randomAreaRef.current){
			const maxWidth = randomAreaRef.current.offsetHeight;
			const maxHeight = randomAreaRef.current.offsetWidth;
			const bufferX = 5;
			const bufferY = 10;

			const randomLocations = [];
			const skills = shuffle(SKILLSET);
			for(let i=0;i<skills.length;i++){
				let loc = {};
				let normalizedLevel = skills[i].level / 5;
				// Use exponential function to enlarge the scale
				loc.fontSize = `${Math.exp(normalizedLevel)-0.5}rem`;
				loc.level = skills[i].level;
				const dimension = getTextWidth(randomAreaRef.current, RandomItem.target, skills[i].skill, loc.fontSize);
				loc.width = dimension.width + bufferX;
				loc.height = dimension.height + bufferY;
				loc.word = skills[i].skill;

				let randomLoc = getRandomNonOverlappingLocation(randomLocations, loc, maxWidth, maxHeight);
				loc.x = randomLoc.x;
				loc.y = randomLoc.y;
				randomLocations.push(loc);
			}
			setRenderedSkills(randomLocations);
        }

    }, [randomAreaRef]);
	return (
		<PageContainer className="container" id="about" style={{height: "auto"}}>
			<Content className="content">
				<Main>
					<Cell s={12} m={12} l={6}>
						<Profile>
							<Cell s={12}>
								<Image src={process.env.PUBLIC_URL + "/img/profile.jpg"} />
							</Cell>
							<Cell s={12}>
								<Description>
									<p>
										I am a full-stack developer from Hong Kong.
									</p>
									<p>
										As a technolgoy enthusiast,
										I strive to solve real-world problem by applying different technology stacks.
									</p>
									<p>
										I have strong interests in web development and cloud technology. For frontend development, I mainly use React.js. Regarding backend development, I use node.js and Java.
									</p>
									<ContactMeButton href="#contact">Let's Have a Chat!</ContactMeButton>
								</Description>
							</Cell>
						</Profile>
					</Cell>
					<SkillsContainer s={12} m={12} l={6}>
						<h3>Skills and Knowledge</h3>
						<Skills>
							<SquareBox>
								<RandomArea ref={randomAreaRef}>
									{
										randomAreaRef.current && renderedSkills.map((skill, i) => {
											const offsetX = -24;
											const offsetY = 0;
											const maxWidth = randomAreaRef.current.offsetHeight || 0;
											const maxHeight = randomAreaRef.current.offsetWidth || 0;
											const randomColor = `hsl(${i / renderedSkills.length * 360}, 100%,75%)`
											return <RandomItem
													className="item-random"
													key={`skill-${skill.word}`}
													style={{
														color: randomColor,
														top: skill.y + offsetY,
														left: skill.x + offsetX,
														fontSize: skill.fontSize
													}}
													onMouseEnter={()=>setTooltip({
														skill: skill.word,
														level: skill.level,
														x: Math.min(skill.x + offsetX + skill.width, maxWidth + offsetX - skill.width),
														y: Math.min(skill.y + offsetY + skill.height, maxHeight + offsetY - skill.height)
													})}
													onMouseOut={()=>setTooltip(null)}
												>{skill.word}</RandomItem>
										})
									}
									{ tooltip && <Tooltip style={{top: tooltip.y, left: tooltip.x}}>Level:{[...Array(tooltip.level || 0)].map(()=>"⭐")}</Tooltip> }
								</RandomArea>
							</SquareBox>
						</Skills>
					</SkillsContainer>
				</Main>
			</Content>
		</PageContainer>
	);
}

export default About;
