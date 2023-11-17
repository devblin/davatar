*/


// use strict
"use strict";

// import helper functions
const {
  getTextColor,
  getBackgroundColor,
  generateInitials,
} = require("./helpers/mainFunctions");
const {
  checkImageSize,
  checkImageText,
} = require("./helpers/validationFunctions");
const { createCanvas } = require("canvas");

// Davatar class
class Davatar {
  /**
   * Generates a Davatar image.
   * @param {object} options - An object containing options for generating the Davatar.
   * @param {number} options.size - The size of the generated Davatar image, in pixels. Default is 64.
   * @param {string} options.text - The text to be used for generating the Davatar.
   * @param {string} options.textColor - The color of the text in the generated Davatar. Default is randomly generated.
   * @param {string} options.backgroundColor - The background color of the generated Davatar. Default is randomly generated.
   * @param {string} options.fontFamily - The font family to be used for the text in the generated Davatar. Default is "Arial".
   * @param {number} options.fontWeight - The font weight to be used for the text in the generated Davatar. Default is 100.
   * @returns {string} - The generated Davatar image, in data URL format.
   */
  generate({
    size = 64,
    text,
    textColor = getTextColor(),
    backgroundColor = getBackgroundColor(),
    fontFamily = "Arial",
    fontWeight = 100,
  } = {}) {
    // check image size and text
    const checkSize = checkImageSize(size);
    const checkText = checkImageText(text);

    // if both size and text are valid
    if (checkSize && checkText) {
      // define height fix constant
      const HEIGHT_FIX = 4.6875;

      // generate initials from text
      const finalText = generateInitials(text);

      // create canvas
      const canvas = createCanvas(size, size);
      // get context of canvas
      const ctx = canvas.getContext("2d");

      // set background color
      ctx.fillStyle = backgroundColor;
      // fill canvas with background color
      ctx.fillRect(0, 0, size, size);

      // get text measurements
      const measureText = ctx.measureText(finalText);
      // check if emHeightAscent is undefined
      const emHeightAscent = measureText.emHeightAscent === undefined;

      // calculate text coordinates
      const textX = size / 2;
      const textY = emHeightAscent
        ? size / 2 + (size * HEIGHT_FIX) / 100
        : size / 2 + 1;

      // set font
      ctx.font = `${fontWeight} ${size / 2}px ${fontFamily}`;
      // set text alignment and baseline
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      // set text color
      ctx.fillStyle = textColor;
      // fill text in canvas
      ctx.fillText(finalText, textX, textY);
      // set image smoothing quality
      ctx.imageSmoothingQuality = "high";

      // convert canvas to data URL and return it
      const dataUrl = canvas.toDataURL();
      return dataUrl;
    }
  }
}

// export Davatar instance
exports.davatar = new Davatar();