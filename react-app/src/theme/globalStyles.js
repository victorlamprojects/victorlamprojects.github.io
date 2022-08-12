import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	.App {
		margin: 0;
		position: relative;
		font-family: 'Inter';
		background-color: #0E153A;
		width: 100vw;
		min-height: 100vh;
		color: #E2F3F5;
		font-size: 1.5rem;
		letter-spacing: 0.125rem;
		line-height: 1.5rem;
		overflow: hidden;
	}
	.no-select {
	  -webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		 -khtml-user-select: none; /* Konqueror HTML */
		   -moz-user-select: none; /* Old versions of Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
				user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
	}
	::-webkit-scrollbar {
		width: 10px;
	}
`

export default GlobalStyle;
