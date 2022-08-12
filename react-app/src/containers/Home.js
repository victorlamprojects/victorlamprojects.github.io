import styled from "styled-components";
import PageContainer from "../common/PageContainer";

const Name = styled.div`
	position: absolute;
	line-height: 12.5rem;
	font-size: 12.5rem;
	left: 25%;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
`
const Home = () => {
	return (
		<PageContainer className="container active" style={{backgroundColor: "transparent"}} id="home">
			<Name>
				Victor Lam
			</Name>
		</PageContainer>
	);
}

export default Home;
