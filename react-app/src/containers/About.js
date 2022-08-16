import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import PageContainer from "../common/PageContainer";
import Backdrop from "../common/Backdrop";
import Link from "../common/Link";
import SquareBox from "../common/SquareBox";
import { Grid, Cell } from "../common/Grid";
import { getRandomValue, getTextWidth } from "../utils/common";
import { getRandomNonOverlappingLocation } from "../utils/algo";

const Content = styled.div`
	display: flex;
	margin: 0 1.5rem;
	height: 100%;
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

const skills = [
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
		level: 4
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
	}];

const About = () => {
	const randomAreaRef = useRef(null);
	const [renderedSkills, setRenderedSkills] = useState([]);
	const [tooltip, setTooltip] = useState(null);

    useEffect( () => {
        if(randomAreaRef.current){
			const maxWidth = randomAreaRef.current.offsetHeight;
			const maxHeight = randomAreaRef.current.offsetWidth;

			const randomLocations = [];
			for(let i=0;i<skills.length;i++){
				let loc = {};
				let normalizedLevel = skills[i].level / 5;
				// Use exponential function to enlarge the scale
				loc.fontSize = `${Math.exp(normalizedLevel)-0.5}rem`;
				loc.level = skills[i].level;
				const dimension = getTextWidth(RandomItem.target, skills[i].skill, loc.fontSize);
				loc.width = dimension.width;
				loc.height = dimension.height;
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
		<PageContainer className="container" id="about">
			<Backdrop>
				<Content className="content">
					<Main>
						<Cell s={12} m={6}>
							<Profile>
								<Cell s={12}>
									<Image src="/img/profile.jpg"/>
								</Cell>
								<Cell s={12}>
									<Description>
										<p>
											I am a full-stack developer from Hong Kong.
										</p>
										<p>
											As a technolgoy enthiusiast,
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
						<SkillsContainer s={12} m={6}>
							<h3>Skills and Knowledge</h3>
							<Skills>
								<SquareBox>
									<RandomArea ref={randomAreaRef}>
										{
											renderedSkills.map((skill, i) => {
												const offsetX = -10;
												const offsetY = 0;
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
														onMouseOver={()=>setTooltip({
															skill: skill.word,
															level: skill.level,
															x: skill.x + offsetX + skill.width,
															y: skill.y + offsetY + skill.height
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
			</Backdrop>
		</PageContainer>
	);
}

export default About;
