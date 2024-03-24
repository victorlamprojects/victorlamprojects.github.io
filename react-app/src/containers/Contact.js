import styled from "styled-components";
import PageContainer from "../common/PageContainer";
import { Grid, Cell } from "../common/Grid";

const Content = styled.div`
	display: flex;
	margin: 0 1.5rem;
	height: 100%;
`

const Main = styled(Grid)`
	align-content: center;
	justify-content: center;
`

const Text = styled(Cell)`
	display: block;
	font-size: 3rem;
	width: 100%;
	margin: 1.75rem 0;
	text-align: center;
`

const Image = styled.a`
	display: inline-block;
	width: 3rem;
	height: 3rem;
	margin: 1.25rem;
	&: hover {
		transform: scale(1.2);
	}
	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const Contact = () => {
	return (
		<PageContainer className="container" id="contact" style={{height: "60%"}}>
			<Content className="content">
				<Main>
					<Text s={12}>Connect With Me</Text>
					<Image target="_blank" href="https://www.instagram.com/lwtvictor/">
						 <img src={ process.env.PUBLIC_URL + "/img/instagram.png"} />
					</Image>
					<Image target="_blank" href="https://www.facebook.com/victor.lam.3154">
						 <img src={ process.env.PUBLIC_URL + "/img/facebook.png"} />
					</Image>
					<Image target="_blank" href="https://hk.linkedin.com/in/victor-lam-2b5192173">
						 <img src={ process.env.PUBLIC_URL + "/img/linkedin.png"} />
					</Image>
					<Image target="_blank" href="mailto:lamwingtok@gmail.com">
						 <img src={ process.env.PUBLIC_URL + "/img/email.png"} />
					</Image>
				</Main>
			</Content>
		</PageContainer>
	);
}

export default Contact;
