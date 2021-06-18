"use strict";

const { getTextColor, getBackgroundColor } = require("./helpers/getColors");
const { generateInitials } = require("./helpers/textModify");
const { logger } = require("./helpers/customLogger");
const {
	NO_SIZE,
	NO_TEXT,
	NO_SIZE_TEXT,
	TEXT_LENGTH,
	ZERO_SIZE,
} = require("./helpers/errorConstants");
const { createCanvas } = require("canvas");

class Davatar {
	generate({
		size,
		text,
		textColor = getTextColor(),
		backgroundColor = getBackgroundColor(),
	}) {
		if (!text && !size) {
			logger(NO_SIZE_TEXT);
			return NO_SIZE_TEXT;
		} else if (!size) {
			logger(NO_SIZE);
			return NO_SIZE;
		} else if (!text) {
			logger(NO_TEXT);
			return NO_TEXT;
		} else if (text.trim().length < 2) {
			logger(TEXT_LENGTH);
			return TEXT_LENGTH;
		} else {
			const HEIGHT_FIX = 4.6875;
			const finalText = generateInitials(text);
			const canvas = createCanvas(size, size);
			const ctx = canvas.getContext("2d");

			ctx.fillStyle = backgroundColor;
			ctx.fillRect(0, 0, size, size);

			const measureText = ctx.measureText(finalText);

			const textX = size / 2;
			const textY =
				measureText.emHeightAscent === undefined
					? size / 2 + (size * HEIGHT_FIX) / 100
					: size / 2;

			ctx.font = `${size / 2}px Arial`;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = textColor;
			ctx.fillText(finalText, textX, textY);
			ctx.imageSmoothingQuality = "high";

			const dataUrl = canvas.toDataURL();
			return dataUrl;
		}
	}

	generate64({
		text,
		textColor = getTextColor(),
		backgroundColor = getBackgroundColor(),
	}) {
		return this.generate({ size: 64, text, textColor, backgroundColor });
	}

	generate128({
		text,
		textColor = getTextColor(),
		backgroundColor = getBackgroundColor(),
	}) {
		return this.generate({ size: 128, text, textColor, backgroundColor });
	}
}

function createDavatarInstance() {
	return new Davatar();
}

const davatar = createDavatarInstance();

logger(davatar.generate64({ text: "dd" }));

module.exports = { davatar };
