/**
 * Logs a passed message to the console
 * @param {String} message Message to be logged
 * @returns {String} Logs message to the console
 */
function logger(message) {
    console.log(`Davatar: ${message}`);
    return;
}

module.exports = { logger };
