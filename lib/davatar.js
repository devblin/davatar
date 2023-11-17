/**
 * Class to generate a customizable image with initials.
 * @class Davatar
 */
"use strict";

/**
 * Importing helper functions from mainFunctions file.
 */
const {
  getTextColor,
  getBackgroundColor,
  generateInitials,
} = require("./helpers/mainFunctions");

/**
 * Importing validation functions from validationFunctions file.
 */
const {
  checkImageSize,
  checkImageText,
} = require("./helpers/validationFunctions");

/**
 * Importing createCanvas function from canvas library.
 */
const { createCanvas } = require("canvas");

class Davatar {
  /**
   * Function to generate an image with initials.
   * @method generate
   * @param {object} options - Object containing customizable options for the image.
   * @param {number} options.size - Size of the image in pixels.
   * @param {string} options.text - Text to generate the initials from.
   * @param {string} options.textColor - Color of the initials.
   * @param {string} options.backgroundColor - Color of the background.
   * @param {string} options.fontFamily - Font family to be used for the initials.
   * @param {number} options.fontWeight - Font weight to be used for the initials.
   * @returns {string} - Data URL string of the generated image.
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
     * Checking if the provided size and text are valid.
     */
    const checkSize = checkImageSize(size);
    const checkText = checkImageText(text);

    /**
     * Creating the image if both the size and text are valid.
     */
    if (checkSize && checkText) {
      /**
       * Calculating the height fix for the text position.
       */
      const HEIGHT_FIX = 4.6875;
      /**
       * Generating the initials from the provided text.
       */
      const finalText = generateInitials(text);
      /**
       * Creating a canvas with the provided size.
       */
      const canvas = createCanvas(size, size);
      /**
       * Getting the 2D context of the canvas.
       */
      const ctx = canvas.getContext("2d");

      /**
       * Setting the background color of the canvas.
       */
      ctx.fillStyle = backgroundColor;
      /**
       * Drawing a rectangle with the background color to fill the canvas.
       */
      ctx.fillRect(0, 0, size, size);

      /**
       * Measuring the width of the text.
       */
      const measureText = ctx.measureText(finalText);
      /**
       * Checking if emHeightAscent is supported by the browser.
       */
      const emHeightAscent = measureText.emHeightAscent === undefined;

      /**
       * Calculating the horizontal position of the text.
       */
      const textX = size / 2;
      /**
       * Calculating the vertical position of the text.
       */
      const textY = emHeightAscent
        ? size / 2 + (size * HEIGHT_FIX) / 100
        : size / 2 + 1;

      /**
       * Setting the font for the initials.
       */
      ctx.font = `${fontWeight} ${size / 2}px ${fontFamily}`;
      /**
       * Setting the alignment for the text.
       */
      ctx.textAlign = "center";
      /**
       * Setting the baseline for the text.
       */
      ctx.textBaseline = "middle";
      /**
       * Setting the color for the text.
       */
      ctx.fillStyle = textColor;
      /**
       * Drawing the text on the canvas.
       */
      ctx.fillText(finalText, textX, textY);
      /**
       * Setting the image smoothing quality to high for better image quality.
       */
      ctx.imageSmoothingQuality = "high";

      /**
       * Generating a data URL string from the canvas.
       */
      const dataUrl = canvas.toDataURL();
      /**
       * Returning the data URL string.
       */
      return dataUrl;
    }
  }
}

/**
 * Exporting an instance of the Davatar class.
 */
exports.davatar = new Davatar();