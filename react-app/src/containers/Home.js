import styled from "styled-components";
import PageContainer from "../common/PageContainer";

const Name = styled.div`
	position: absolute;
	line-height: 5rem;
	font-size: 5rem;
	right: 1rem;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
`
const Home = () => {
	return (
		<PageContainer className="container" style={{backgroundColor: "transparent"}} id="home">
			<Name className="content active">
				Hi, I'm Victor Lam<br/>
				I'm a full-stack web developer
			</Name>
		</PageContainer>
	);
}

export default Home;
