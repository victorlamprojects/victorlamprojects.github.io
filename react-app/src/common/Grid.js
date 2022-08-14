import styled from "styled-components";
import { getBreakPoints } from "../utils/common";

export const Grid = styled.div(()=>{
	return {
		width: "100%",
		padding: "0.25rem 0.5rem",
		margin: "0.75rem 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		flexWrap: "wrap"
	}
});

export const Cell = styled.div(({s, m, l}) => {
	const mq = getBreakPoints();
	let style = {
		margin: "0.25rem 0",
		flexBasis: "0%"
	};

	if(s !== undefined && s <= 12 && s >= 0){
		const width = Math.round((s / 12) * 10000) / 100;
		style.flexBasis = `${width}%`;
	}
	if(m !== undefined && m <= 12 && m >= 0){
		const width = Math.round((m / 12) * 10000) / 100;
		style[mq.m] = {
			flexBasis: `${width}%`
		}
	}
	if(l !== undefined && l <= 12 && l >= 0){
		const width = Math.round((l / 12) * 10000) / 100;
		style[mq.l] = {
			flexBasis: `${width}%`
		}
	}

	return style;
});
