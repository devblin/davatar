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
			const measureText = ctx.measureText("DD");
			console.log({
				textWidth: measureText.width,
				textHeightAscent: measureText.emHeightAscent,
				textHeightDescent: measureText.emHeightDescent,
			});
			ctx.font = "30px Arial";
			ctx.fillText("DD", 32, 32);
			ctx.imageSmoothingQuality;
			const dataUrl = canvas.toDataURL();
			console.log(dataUrl);
			console.log({
				textWidth: measureText.width,
				textHeightAscent: measureText.emHeightAscent,
				textHeightDescent: measureText.emHeightDescent,
			});
			return dataUrl;
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
console.log(davatar.generate128(3));

module.exports = davatar;
