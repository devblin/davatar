"use strict";

function getTextColor(text) {
	return Math.random(text);
}

function getBackgroundColor(text) {
	return Math.random(text);
}

class Davatar {
	constructor(
		size,
		text,
		textColor = getTextColor(size),
		backgroundColor = getBackgroundColor(size)
	) {
		this.size = size;
		this.text = text;
		this.textColor = textColor;
		this.backgroundColor = backgroundColor;
	}

	generate = () => {
		console.log(this.size, this.text, this.textColor, this.backgroundColor);
	};
}

const davatar = new Davatar(64, "d");
davatar.generate();

export default Davatar;
