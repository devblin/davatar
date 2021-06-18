function checkDataUrl(testUrl) {
	let testResult = false;
	let base64regex =
		/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	let splitUrl = testUrl.split(",");
	let base64Test = base64regex.test(splitUrl[1]);

	if (splitUrl[0] === "data:image/png;base64" && base64Test)
		testResult = true;

	return testResult;
}

module.exports = { checkDataUrl };
