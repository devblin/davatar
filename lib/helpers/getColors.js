function commonColor() {
	return Math.floor(Math.random() * 255);
}

let r = commonColor();
let g = commonColor();
let b = commonColor();

function getTextColor() {
	return `rgb(${r}, ${g}, ${b})`;
}

function getBackgroundColor() {
	return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
}

module.exports = {
	getBackgroundColor,
	getTextColor,
};
