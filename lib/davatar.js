"use strict";
const { getTextColor, getBackgroundColor } = require("./helpers/getColors");
const { generateInitials } = require("./helpers/textModify");
const { createCanvas } = require("canvas");

class Davatar {
	generate(
		size,
		text,
		textColor = getTextColor(),
		backgroundColor = getBackgroundColor()
	) {
		if (!size && !text) {
			console.error("Davatar: give size and text");
		} else if (!size) {
			console.error("Davatar: give size");
		} else if (!text) {
			console.error("Davatar: give text");
		} else if (text.trim().length < 2) {
			console.error(
				"Davatar: text should contain more than 2 non-space characters"
			);
		} else {
			text = generateInitials(text);

			// console.log({ textColor, backgroundColor });

			const canvas = createCanvas(size, size);
			const ctx = canvas.getContext("2d");
			ctx.fillStyle = backgroundColor;
			ctx.fillRect(0, 0, size, size);
			// const measureText = ctx.measureText(text);
			// console.log({
			// 	textWidth: measureText.width,
			// 	textHeightAscent: measureText.emHeightAscent,
			// 	textHeightDescent: measureText.emHeightDescent,
			// });
			ctx.font = "64px Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = textColor;
			ctx.fillText(text, size / 2, size / 2);
			ctx.imageSmoothingQuality = "low";
			const dataUrl = canvas.toDataURL();
			console.log(dataUrl);
			// console.log({
			// 	textWidth: measureText.width,
			// 	textHeightAscent: measureText.emHeightAscent,
			// 	textHeightDescent: measureText.emHeightDescent,
			// });
			return dataUrl;
		}
	}

	generate64(
		text,
		textColor = getTextColor(),
		backgroundColor = getBackgroundColor()
	) {
		this.generate(64, text, textColor, backgroundColor);
	}

	generate128(
		text,
		textColor = getTextColor(),
		backgroundColor = getBackgroundColor()
	) {
		this.generate(128, text, textColor, backgroundColor);
	}
}

function createDavatarInstance() {
	return new Davatar();
}

const davatar = createDavatarInstance();
// console.log(davatar.generate128("d d", "blue", "pink"));

module.exports = davatar;
