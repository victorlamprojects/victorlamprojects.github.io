import { useEffect } from "react";
import styled from "styled-components";
import Link from "../common/Link";

const NavBarContainer = styled.div`
	position: absolute;
`

const Logo = styled.span`
	font-weight: 800;
	font-family: 'Roboto';
	color: #22D1EE;
	margin: 0 1rem;
`

const urls = ["home", "about", "work", "contact"];
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
