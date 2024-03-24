import { useEffect } from "react";
import styled from "styled-components";
import Link from "../common/Link";

const NavBarContainer = styled.div`
	position: absolute;
	z-index: 2;
`

const Logo = styled.span`
	display: inline-block;
	font-weight: 800;
	font-family: 'Roboto', sans-serif;
	color: #22D1EE;
	width: 8rem;
	text-align: center;
`

const urls = ["home", "about", "experience", "contact"];
const NavBar = () => {
	useEffect(()=>{
		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start"});
	}, []);

	return (
		<NavBarContainer>
			<Logo className="no-select">VICTOR</Logo>
			{
				urls.map(url =>
					<Link
						id={`link-${url}`}
						className="no-select"
						key={url}
						onClick={()=>{
							let comp =	document.getElementById(url);
							if(comp){
								comp.scrollIntoView({ behavior: "smooth", block: "start"});
							}
						}}
					>{url.toUpperCase()}</Link>
				)
			}
		</NavBarContainer>
	);
}

export default NavBar;
