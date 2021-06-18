function logger(message) {
	if (process.env.NODE_ENV != "test") console.log(`Davatar: ${message}`);
}

module.exports = { logger };
