function generateInitials(text) {
	let newText = text;
	if (newText.length == 2) return newText.toUpperCase();

	newText = newText.split(" ");
	if (newText.length > 1) newText = newText[0][0] + newText[1][0];
	else newText = newText[0].substr(0, 2);

	return newText.toUpperCase();
}

module.exports = {
	generateInitials,
};
