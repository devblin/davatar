const { davatar } = require("../lib/davatar");
const {
	NO_TEXT,
	TEXT_LENGTH,
	SIZE_LESS_OR_ZERO,
	MORE_THAN_MAX,
	SIZE_NAN,
	TEXT_NOT_STRING,
} = require("../lib/helpers/errorConstants");
const consoleCheck = jest.spyOn(console, "log");

test(SIZE_NAN, () => {
	davatar.generate({ text: "dd", size: "22" });
	expect(consoleCheck).toHaveBeenCalledWith("Davatar: " + SIZE_NAN);
});

test(MORE_THAN_MAX, () => {
	davatar.generate({ text: "dd", size: 600 });
	expect(consoleCheck).toHaveBeenCalledWith("Davatar: " + MORE_THAN_MAX);
});

test(SIZE_LESS_OR_ZERO, () => {
	davatar.generate({ text: "dd", size: 0 });
	expect(consoleCheck).toHaveBeenCalledWith("Davatar: " + SIZE_LESS_OR_ZERO);
	davatar.generate({ text: "dd", size: -10 });
	expect(consoleCheck).toHaveBeenCalledWith("Davatar: " + SIZE_LESS_OR_ZERO);
});

test(NO_TEXT, () => {
	davatar.generate();
	expect(consoleCheck).toHaveBeenCalledWith("Davatar: " + NO_TEXT);
});

test(TEXT_LENGTH, () => {
	davatar.generate({ text: "d" });
	expect(consoleCheck).toHaveBeenCalledWith("Davatar: " + TEXT_LENGTH);
});

test(TEXT_NOT_STRING, () => {
	davatar.generate({ text: 2 });
	expect(consoleCheck).toHaveBeenCalledWith("Davatar: " + TEXT_NOT_STRING);
});

test(SIZE_NAN, () => {
	davatar.generate({ size: "" });
	expect(consoleCheck).toHaveBeenCalledWith("Davatar: " + SIZE_NAN);
	expect(consoleCheck).toHaveBeenCalledWith("Davatar: " + NO_TEXT);
});
