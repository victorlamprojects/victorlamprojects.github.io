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
	.content .item-random {
		opacity: 0;
		-ms-transform: rotate(0deg) scale(0.1);
		-webkit-transform: rotate(0deg) scale(0.1);
		transform: rotate(0deg) scale(0.1);
		transition: all 2s ease-in-out;
	}
	.content.active {
		transform: translateY(0);
		opacity: 1;
	}
	.content.active .item-random {
		opacity: 1;
		-ms-transform: rotate(0deg) scale(1);
		-webkit-transform: rotate(0deg) scale(1);
		transform: rotate(0deg) scale(1);
	}
`
