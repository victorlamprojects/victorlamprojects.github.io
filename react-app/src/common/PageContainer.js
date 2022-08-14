import styled from "styled-components";

export default styled.div`
	position: relative;
	height: 100%;
	width: calc(100% - 4rem);
	margin: 0 2rem;
	background-color: inherit;
	z-index: 3;
	.content {
		opacity: 0;
		transform: translateY(100vh);
		transition: 1.2s all ease;
	}
	.content.active {
		transform: translateY(0);
		opacity: 1;
	}
`
