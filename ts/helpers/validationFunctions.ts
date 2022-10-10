import { logger } from "./customLogger";
import { ERRORS } from "./errorConstants";

export function checkImageSize(size: number): boolean {
	if (size <= 0) {
		logger(ERRORS.SIZE_LESS_OR_ZERO);
		return false;
	}

	if (size > 512) {
		logger(ERRORS.MORE_THAN_MAX);
		return false;
	}

	if (isNaN(size)) {
		logger(ERRORS.SIZE_NAN);
		return false;
	}

	return true;
}

export function checkImageText(text: string): boolean {
	if (text == null || text == undefined) {
		logger(ERRORS.NO_TEXT);
		return false;
	}

	if (text.length < 2) {
		logger(ERRORS.TEXT_LENGTH);
		return false;
	}

	if (typeof text != "string") {
		logger(ERRORS.TEXT_NOT_STRING);
		return false;
	}

	return true;
}

export function checkDataUrl(urlToTest: string): boolean {
	if (!urlToTest)
		return false;

	const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	const urlParts = urlToTest.split(",");

	return urlParts[0] === "data:image/png;base64" && base64regex.test(urlParts[1]);
}