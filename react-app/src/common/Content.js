import styled from "styled-components";

export default styled.div`
	height: calc(100vh - 3rem);
	width: 100vw;
	margin-top: 3rem;
	background-color: inherit;
	overflow: auto;
	.no-select {
	  -webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		 -khtml-user-select: none; /* Konqueror HTML */
		   -moz-user-select: none; /* Old versions of Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
				user-select: none; /* Non-prefixed version, currently
									  supported by Chrome, Edge, Opera and Firefox */
	}
`
