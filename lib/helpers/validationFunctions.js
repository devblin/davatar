const { logger } = require("./customLogger");
const {
  NO_TEXT,
  TEXT_LENGTH,
  SIZE_LESS_OR_ZERO,
  MORE_THAN_MAX,
  SIZE_NAN,
  TEXT_NOT_STRING,
} = require("./errorConstants");

/**
 * Ensures that the Image is valid and its size is less than 512 MB
 * @param {Number} size Size of the Image
 * @returns {Boolean | null}
 */
function checkImageSize(size) {
  const isNumber = Number.isInteger(size);
  if (!isNumber) logger(SIZE_NAN);
  else {
    if (size <= 0) logger(SIZE_LESS_OR_ZERO);
    else if (size > 512) logger(MORE_THAN_MAX);
    else return true;
  }
}

/**
 * Ensures that the image text exists and has at least 2 characters.
 * @param {String} text Image Text
 * @returns {Boolean | null}
 */
function checkImageText(text) {
  const isString = typeof text === "string";
  if (!text) logger(NO_TEXT);
  else {
    if (!isString) logger(TEXT_NOT_STRING);
    else if (text.trim().length < 2) logger(TEXT_LENGTH);
    else return true;
  }
}

/**
 * Ensures that the file is a PNG Image with a predecided base64 RegEx pattern
 * @param {String} testUrl
 * @returns {Boolean}
 */
function checkDataUrl(testUrl) {
  let testResult = false;
  if (!testUrl) return false;
  let base64regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  let splitUrl = testUrl.split(",");
  let base64Test = base64regex.test(splitUrl[1]);
  testResult =
    splitUrl[0] === "data:image/png;base64" && base64Test ? true : false;

  return testResult;
}

module.exports = { checkDataUrl, checkImageSize, checkImageText };
