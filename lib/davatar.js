/**
 * Using strict mode
 */
"use strict";

/**
 * A set of functions used to create an avatar
 * @namespace helpers
 */

/**
 * A set of functions used to validate the input of the avatar
 * @namespace helpers/validationFunctions
 */

/**
 * A set of functions used to generate the main content of the avatar
 * @namespace helpers/mainFunctions
 */

/**
 * The main Davatar class
 * @class
 * @memberof helpers
 */
class Davatar {
/**
 * Method used to generate an avatar
 * @method
 * @memberof helpers
 * @param {object} [options={}] - Options of the generated avatar
 * @param {number} [size=64] - Size of the avatar
 * @param {string} text - Text used to generate the avatar
 * @param {string} [textColor=getTextColor()] - Color of the text in the avatar
 * @param {string} [backgroundColor=getBackgroundColor()] - Color of the background of the avatar
 * @param {string} [fontFamily=Arial] - Font family of the text used
 * @param {number} [fontWeight=100] - Font weight of the text used
 * @returns {string} A string representing a data url of the generated avatar
 */
  generate({
    size = 64,
    text,
    textColor = getTextColor(),
    backgroundColor = getBackgroundColor(),
    fontFamily = "Arial",
    fontWeight = 100,
  } = {}) {
/**
 * Checks the size of the avatar
 * @constant
 * @memberof helpers
 * @param {number} [size=64] - Size of the avatar
 * @returns {boolean} True if the size is valid, false otherwise
 */
    const checkSize = checkImageSize(size);
/**
 * Checks the text of the avatar
 * @constant
 * @memberof helpers
 * @param {string} text - Text used to generate the avatar
 * @returns {boolean} True if the text is valid, false otherwise
 */
    const checkText = checkImageText(text);
    if (checkSize && checkText) {
/**
 * The height fix for the text
 * @constant
 * @memberof helpers
 * @type {number}
 */
      const HEIGHT_FIX = 4.6875;
/**
 * The final text used for the avatar
 * @constant
 * @memberof helpers
 * @type {string}
 */
      const finalText = generateInitials(text);
/**
 * Creates a canvas
 * @constant
 * @memberof helpers
 * @type {Canvas}
 */
      const canvas = createCanvas(size, size);
/**
 * The context of the canvas
 * @constant
 * @memberof helpers
 * @type {CanvasRenderingContext2D}
 */
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, size, size);

      const measureText = ctx.measureText(finalText);
/**
 * The emHeightAscent of the text
 * @constant
 * @memberof helpers
 * @type {boolean}
 */
      const emHeightAscent = measureText.emHeightAscent === undefined;

      const textX = size / 2;
      const textY = emHeightAscent
        ? size / 2 + (size * HEIGHT_FIX) / 100
        : size / 2 + 1;

      ctx.font = `${fontWeight} ${size / 2}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = textColor;
      ctx.fillText(finalText, textX, textY);
      ctx.imageSmoothingQuality = "high";

      const dataUrl = canvas.toDataURL();
      return dataUrl;
    }
  }
}

exports.davatar = new Davatar();