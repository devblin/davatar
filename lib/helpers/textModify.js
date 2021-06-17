function generateInitials(text) {
	let newText = text;
	if (newText.length == 2) return newText.toUpperCase();

	newText = newText.split(" ");
	newText = newText[0][0] + newText[1][0];
	return newText.toUpperCase();
}

module.exports = {
	generateInitials,
};
