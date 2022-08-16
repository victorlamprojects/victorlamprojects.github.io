import { getRandomValue } from "./common";


const isCollide = (rectA, rectB, margin=0) => {
	if(rectA.x + rectA.width + margin < rectB.x){
		return false;
	}
	if(rectA.y + rectA.height + margin < rectB.y){
		return false;
	}
	if(rectB.x + rectB.width + margin < rectA.x){
		return false;
	}
	if(rectB.y + rectB.height + margin < rectA.y){
		return false;
	}
	return true;
}

const isAnyCollide = (existing, newRect) => {
	return existing.some(rect => isCollide(rect, newRect));
}

const getPossibleLocations = (existing, newRect, maxWidth, maxHeight) => {
	const possibleLocations = [];
	// Can optimize here
	for(let i=0; i<maxWidth; i++){
		for(let j=0; j<maxHeight; j++){
			let rect = {
				x: i,
				y: j,
				width: newRect.width,
				height: newRect.height
			}
			if(existing.length === 0 || !isAnyCollide(existing, rect)){
				possibleLocations.push(rect);
			}
		}
	}
	return possibleLocations;
}

export const getRandomNonOverlappingLocation = (existing, loc, maxWidth, maxHeight)=>{
	const possibleLocations = getPossibleLocations(existing, loc, maxWidth, maxHeight);
	const size = possibleLocations.length;
	return size > 0 ? possibleLocations[getRandomValue(size)-1] : {x: Math.random() * maxWidth, y: Math.random() * maxHeight};
}
