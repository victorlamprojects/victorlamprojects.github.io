import { useRef } from "react";
import styled from "styled-components";
import GlobalStyle from "./theme/globalStyles";
import NavBar from "./containers/NavBar";
import Home from "./containers/Home";
import About from "./containers/About";
import Experience from "./containers/Experience";
import Contact from "./containers/Contact";
import Content from "./common/Content";

const Banner = styled.div`
	position: fixed;
	z-index: 1;
	background-color: #22D1EE;
	&.home {
		top: -25%;
		left: 50%;
		width: 1500px;
		height: 750px;
		transform: rotate(-30deg);
		transition: 1.5s all ease;
	}
	&.sub-section {
		top: 0%;
		height: 3rem;
		transform: rotate(0);
		transition: .75s all ease;
	}
`

const App = () => {
	const bannerRef = useRef(null);
	const onScroll = () => {
		const scrollPos = (window.scrollY + window.innerHeight) / 2;
		const banner = bannerRef.current;

		const containers = document.querySelectorAll(".container");
		for (var i = 0; i < containers.length; i++) {
			const elementTop = containers[i].getBoundingClientRect().top;
			const elementBottom = containers[i].getBoundingClientRect().bottom;

			if (scrollPos >= elementTop/2 ) {
				containers[i].querySelector(".content").classList.add("active");
			} else {
				containers[i].querySelector(".content").classList.remove("active");
			}
			if(banner){
				if(scrollPos/2 > elementTop && scrollPos < elementBottom){
					if(i === 0){
						banner.classList.add("home");
						banner.classList.remove("sub-section");
						banner.setAttribute("style",`left:50%;width:1500px`);
					}
					else{
						const element = document.getElementById(`link-${containers[i].id}`);
						const style = window.getComputedStyle(element);
						const marginLeft = parseInt(style.getPropertyValue('margin-left'));
						const marginRight = parseInt(style.getPropertyValue('margin-right'));
						const width = element.offsetWidth + marginLeft + marginRight;
						banner.classList.add("sub-section");
						banner.classList.remove("home");
						banner.setAttribute("style",`left:${element.getBoundingClientRect().left - marginLeft}px;width:${width}px`);
					}
				}

			}
		}

	}

	return (
		<div className="App">
			<GlobalStyle />
			<NavBar />
			<Banner ref={bannerRef} className="home"/>
			<Content onScroll={onScroll}>
				<Home />
				<About />
				<Experience />
				<Contact />
			</Content>
		</div>
	);
}

export default App;
