import styled from "styled-components";
import PageContainer from "../common/PageContainer";

const Test =  styled.div`
	height: 50%;
	width: 50%;
	background-color: red;
`

const About = () => {
	return (
		<PageContainer className="container" id="about">
			<Test>
				About
			</Test>
		</PageContainer>
	);
}

export default About;
