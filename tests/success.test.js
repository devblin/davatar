const { davatar } = require("../lib/davatar");
const {
	checkDataUrl,
	checkImageSize,
	checkImageText,
} = require("../lib/helpers/validationFunctions");

test("Default image data url generation", () => {
	let testUrl = davatar.generate({ text: "deepanshu dhruw" });
	expect(checkDataUrl(testUrl)).toBeTruthy();
});

test("10 Random image data url generation", () => {
	for (let i = 1; i < 20; i++) {
		let testUrl = davatar.generate({
			size: i * 10,
			text: "deepanshu dhruw",
		});
		let testResult = checkDataUrl(testUrl);
		expect(testResult).toBeTruthy();

		testUrl = davatar.generate({
			size: i * 10,
			text: "dd",
		});
		testResult = checkDataUrl(testUrl);
		expect(testResult).toBeTruthy();

		testUrl = davatar.generate({
			size: i * 10,
			text: "ded",
		});
		testResult = checkDataUrl(testUrl);
		expect(testResult).toBeTruthy();

		testUrl = davatar.generate({
			size: i * 10,
		});
		testResult = checkDataUrl(testUrl);
		expect(testResult).not.toBeTruthy();
	}
});

test("Check size: ", () => {
	for (let i = 1; i <= 512; i++) expect(checkImageSize(i)).toBeTruthy();
});

test("Check text: ", () => {
	expect(checkImageText("d d")).toBeTruthy();
	expect(checkImageText("deepanshu dhruw")).toBeTruthy();
	expect(checkImageText("devblin")).toBeTruthy();
	expect(checkImageText("d d d")).toBeTruthy();
});
