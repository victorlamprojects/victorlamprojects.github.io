import styled from "styled-components";
import PageContainer from "../common/PageContainer";

const Test =  styled.div`
	height: 50%;
	width: 50%;
	background-color: red;
`

const Work = () => {
	return (
		<PageContainer className="container" id="work">
			<Test>
				Work
			</Test>
		</PageContainer>
	);
}

export default Work;
