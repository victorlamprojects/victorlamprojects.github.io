export const getBreakPoints = ()=>{
	return {
		m: "@media only screen and (min-width: 768px)",
		l: "@media only screen and (min-width: 1200px)"
	}
}

export const getTextWidth = (element, word, fontSize) => {
	const el = document.createElement(element);
    document.body.appendChild(el);

	el.style.display = "inline-block";
	el.style.fontSize = fontSize;
    el.textContent = word;

    const result = {
        width: el.clientWidth,
        height: el.clientHeight
    };

    document.body.removeChild(el);

    return result;
}

export const getPxFromRem = r =>  r * parseFloat(getComputedStyle(document.documentElement).fontSize);
export const getRandomValue = max => Math.floor(Math.random() * (max + 1));
