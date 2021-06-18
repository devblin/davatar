function logger(message) {
	if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "prod")
		console.log(`%cDavatar: ${message}`, "color: red");
}

module.exports = { logger };
