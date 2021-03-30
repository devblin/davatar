function getTextColor(text) {
	return Math.random(text);
}

function getBackgroundColor(text) {
	return Math.random(text);
}

module.exports = {
	getBackgroundColor,
	getTextColor,
};
