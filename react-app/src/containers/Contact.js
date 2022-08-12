import styled from "styled-components";
import PageContainer from "../common/PageContainer";

const Test =  styled.div`
	height: 50%;
	width: 50%;
	background-color: red;
`

const Contact = () => {
	return (
		<PageContainer className="container" id="contact">
			<Test>
				Contact
			</Test>
		</PageContainer>
	);
}

export default Contact;
