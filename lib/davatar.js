"use strict";

const {
	getTextColor,
	getBackgroundColor,
	generateInitials,
} = require("./helpers/mainFunctions");
const {
	checkImageSize,
	checkImageText,
} = require("./helpers/validationFunctions");
const { createCanvas } = require("canvas");

class Davatar {
	generate({
		size = 64,
		text,
		textColor = getTextColor(),
		backgroundColor = getBackgroundColor(),
		fontFamily = "Arial",
		fontWeight = 100,
	} = {}) {
		const checkSize = checkImageSize(size);
		const checkText = checkImageText(text);
		if (checkSize && checkText) {
			const HEIGHT_FIX = 4.6875;
			const finalText = generateInitials(text);
			const canvas = createCanvas(size, size);
			const ctx = canvas.getContext("2d");

			ctx.fillStyle = backgroundColor;
			ctx.fillRect(0, 0, size, size);

			const measureText = ctx.measureText(finalText);
			const emHeightAscent = measureText.emHeightAscent === undefined;

			const textX = size / 2;
			const textY = emHeightAscent
				? size / 2 + (size * HEIGHT_FIX) / 100
				: size / 2 + 1;

			ctx.font = `${fontWeight} ${size / 2}px ${fontFamily}`;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = textColor;
			ctx.fillText(finalText, textX, textY);
			ctx.imageSmoothingQuality = "high";

			const dataUrl = canvas.toDataURL();
			return dataUrl;
		}
	}
}

exports.davatar = new Davatar();
