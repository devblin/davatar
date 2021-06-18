const { davatar } = require("../lib/davatar");
const {
	NO_SIZE,
	NO_TEXT,
	NO_SIZE_TEXT,
	TEXT_LENGTH,
	ZERO_SIZE,
} = require("../lib/helpers/errorConstants");

test(NO_SIZE_TEXT, () => {
	expect(davatar.generate({})).toBe(NO_SIZE_TEXT);
});

test(NO_SIZE, () => {
	expect(davatar.generate({ text: "DD" })).toBe(NO_SIZE);
});

test(NO_TEXT, () => {
	expect(davatar.generate({ size: 64 })).toBe(NO_TEXT);
});

test(TEXT_LENGTH, () => {
	expect(davatar.generate({ size: 64, text: "2" })).toBe(TEXT_LENGTH);
});

test(ZERO_SIZE, () => {
	expect(davatar.generate({ size: 0, text: "22" })).toBe(NO_SIZE);
});
