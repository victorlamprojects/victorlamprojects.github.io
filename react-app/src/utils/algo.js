import { cloneDeep } from "lodash";
import { getRandomValue } from "./common";


const isCollide = (rectA, rectB) => {
	if(rectA.x + rectA.width < rectB.x){
		return false;
	}
	if(rectA.y + rectA.height < rectB.y){
		return false;
	}
	if(rectB.x + rectB.width < rectA.x){
		return false;
	}
	if(rectB.y + rectB.height < rectA.y){
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

export const shuffle = arr => {
	arr = cloneDeep(arr);
	const newArr = [];
	while (arr.length > 0) {
		const loc = getRandomValue(arr.length)-1;
		newArr.push(arr.splice(loc, 1)[0]);
	}
	return newArr;
};
