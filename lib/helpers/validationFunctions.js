const validateColor = require("validate-color").default;

const { logger } = require("./customLogger");
const {
	NO_TEXT,
	TEXT_LENGTH,
	SIZE_LESS_OR_ZERO,
	MORE_THAN_MAX,
	SIZE_NAN,
	TEXT_NOT_STRING,
	INVALID_COLOR,
} = require("./errorConstants");

function checkImageSize(size) {
	const isNumber = Number.isInteger(size);
	if (!isNumber) logger(SIZE_NAN);
	else {
		if (size <= 0) logger(SIZE_LESS_OR_ZERO);
		else if (size > 512) logger(MORE_THAN_MAX);
		else return true;
	}
}

function checkImageText(text) {
	const isString = typeof text === "string";
	if (!text) logger(NO_TEXT);
	else {
		if (!isString) logger(TEXT_NOT_STRING);
		else if (text.trim().length < 2) logger(TEXT_LENGTH);
		else return true;
	}
}

function checkDataUrl(testUrl) {
	let testResult = false;
	if (!testUrl) return false;
	let base64regex =
		/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	let splitUrl = testUrl.split(",");
	let base64Test = base64regex.test(splitUrl[1]);
	testResult =
		splitUrl[0] === "data:image/png;base64" && base64Test ? true : false;

	return testResult;
}

function checkColor(color) {
	const result = validateColor(color);

	if (!result) logger(INVALID_COLOR);
	
	return result;
}

module.exports = { checkDataUrl, checkImageSize, checkImageText, checkColor };
