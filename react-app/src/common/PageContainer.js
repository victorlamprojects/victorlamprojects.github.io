import styled from "styled-components";

export default styled.div`
	position: relative;
	height: 100%;
	background-color: inherit;
	z-index: 3;
	&.container {
	  opacity: 0;
	  transition: 1s all ease;
	}
	&.container.active {
		opacity: 1;
	}
`
