import styled from "styled-components";

const SquareBoxContainer = styled.div(() => {
	return {
		width: "100%",
		position: "relative",
		paddingBottom: "100%"
	}
});


const SquareBoxContent = styled.div(() => {
	return {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%"
	};
});

const SquareBox = ({children, ...rest})=>{
	return (<SquareBoxContainer {...rest} >
		<SquareBoxContent>
			{children}
		</SquareBoxContent>
	</SquareBoxContainer>);
};

export default SquareBox;
