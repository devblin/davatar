"use strict";
const { getTextColor, getBackgroundColor } = require("./helpers/getColors");
const { createCanvas } = require("canvas");

class Davatar {
	generate = (
		size,
		text,
		textColor = getTextColor(size),
		backgroundColor = getBackgroundColor(size)
	) => {
		if (!size && !text) {
			console.log("give size and text");
		} else if (!size) {
			console.log("give size");
		} else if (!text) {
			console.log("give text");
		} else {
			const canvas = createCanvas(size, size);
			const ctx = canvas.getContext("2d");
			console.log(ctx);
			console.log(size, text, textColor, backgroundColor);
		}
	};

	generate64 = (
		text,
		textColor = getTextColor(text),
		backgroundColor = getBackgroundColor(text)
	) => {
		this.generate(64, text, textColor, backgroundColor);
	};

	generate128 = (
		text,
		textColor = getTextColor(text),
		backgroundColor = getBackgroundColor(text)
	) => {
		this.generate(128, text, textColor, backgroundColor);
	};
}

function createDavatarInstance() {
	return new Davatar();
}

const davatar = createDavatarInstance();
davatar.generate64(3);
davatar.generate128(3);

module.exports = davatar;
