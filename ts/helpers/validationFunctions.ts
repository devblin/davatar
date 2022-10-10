import { logger } from "./customLogger";
import { MORE_THAN_MAX, NO_TEXT, SIZE_LESS_OR_ZERO, SIZE_NAN, TEXT_LENGTH, TEXT_NOT_STRING } from "./errorConstants";

export function checkImageSize(size: number): boolean {
	if (size <= 0) {
		logger(SIZE_LESS_OR_ZERO);
		return false;
	}

	if (size > 512) {
		logger(MORE_THAN_MAX);
		return false;
	}

	if (isNaN(size)) {
		logger(SIZE_NAN);
		return false;
	}

	return true;

	//const isNumber = Number.isInteger(size);
	//if (!isNumber) logger(SIZE_NAN);
	//else {
	//	if (size <= 0) logger(SIZE_LESS_OR_ZERO);
	//	else if (size > 512) logger(MORE_THAN_MAX);
	//	else return true;
	//}
}

export function checkImageText(text: string): boolean {
	if (text == null || text == undefined) {
		logger(NO_TEXT);
		return false;
	}

	if (text.length < 2) {
		logger(TEXT_LENGTH);
		return false;
	}

	if (typeof text != "string") {
		logger(TEXT_NOT_STRING);
		return false;
	}

	return true;

	//const isString = typeof text === "string";
	//if (!text) logger(NO_TEXT);
	//else {
	//	if (!isString) logger(TEXT_NOT_STRING);
	//	else if (text.trim().length < 2) logger(TEXT_LENGTH);
	//	else return true;
	//}
}

export function checkDataUrl(testUrl: string): boolean {
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