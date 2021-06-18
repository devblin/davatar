const { davatar } = require("../lib/davatar");
const { checkDataUrl } = require("../lib/helpers/testFunctions");

test("10 Random image data url generation", () => {
	for (let i = 1; i < 50; i++) {
		let testUrl = davatar.generate({
			size: i * 10,
			text: "deepanshu dhruw",
		});
		let testResult = checkDataUrl(testUrl);
		expect(testResult).toBeTruthy();
	}
});

test("64px image data url generation", () => {
	let testUrl = davatar.generate64({ text: "deepanshu dhruw" });
	let testResult = checkDataUrl(testUrl);
	expect(testResult).toBeTruthy();
});

test("128px image data url generation", () => {
	let testUrl = davatar.generate128({ text: "deepanshu dhruw" });
	let testResult = checkDataUrl(testUrl);
	expect(testResult).toBeTruthy();
});
