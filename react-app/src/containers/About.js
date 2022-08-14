import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import PageContainer from "../common/PageContainer";
import Backdrop from "../common/Backdrop";
import Link from "../common/Link";
import SquareBox from "../common/SquareBox";
import { Grid, Cell } from "../common/Grid";

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
	font-size: 1rem;
`

const skills = ["React.js", "Node.js", "Java", "Spring Framework",
	"SQL Database", "MongoDB", "DynamoDB", "AWS", "Scrum", "Cloud",
	"Microservice", "Git", "JavaScript", "HTML", "CSS", "Python", "NLP",
	"GraphQL", "REST APIs", "Linux"];

const About = () => {
	const randomAreaRef = useRef(null);
	const [randomWidth, setRandomWidth] = useState(0);
	const [randomHeight, setRandomHeight] = useState(0);

    useEffect( () => {
        if(randomAreaRef.current){
            setRandomHeight(randomAreaRef.current.offsetHeight);
            setRandomWidth(randomAreaRef.current.offsetWidth);
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
											skills.map(skill => {
												const maxWidth = randomWidth - 150;
												const maxHeight = randomHeight - 20;

												const getRandomValue = max => Math.floor(Math.random() * (max + 1));
												const randomColor = `hsl(${getRandomValue(365)}, ${getRandomValue(100)}%,${getRandomValue(100)}%)`
												const posX = Math.random() * maxWidth;
												const posY = Math.random() * maxHeight;
												return <RandomItem key={`skill-${skill}`} style={{color: randomColor, top: posX, left: posY}}>{skill}</RandomItem>
											})
										}
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
