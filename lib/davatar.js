"use strict";

// The Davatar class is used to generate a digital avatar based on the given parameters. It uses helper functions from the "helpers" and "validationFunctions" modules to validate and manipulate the input data. It also uses the "canvas" module to create the avatar image.

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

class Davatar {
  /**
   * Generates a digital avatar based on the given parameters.
   *
   * @param {object} options - An optional parameter object containing the following properties:
   * @param {number} size - The size of the avatar image in pixels. Defaults to 64.
   * @param {string} text - The text to be displayed on the avatar. Defaults to an empty string.
   * @param {string} textColor - The color of the text on the avatar. Defaults to a randomly generated color.
   * @param {string} backgroundColor - The background color of the avatar. Defaults to a randomly generated color.
   * @param {string} fontFamily - The font family to be used for the text on the avatar. Defaults to "Arial".
   * @param {number} fontWeight - The font weight to be used for the text on the avatar. Defaults to 100.
   *
   * @returns {string} - The URL of the generated avatar image in base64 format.
   */
  generate({
    size = 64,
    text,
    textColor = getTextColor(),
    backgroundColor = getBackgroundColor(),
    fontFamily = "Arial",
    fontWeight = 100,
  } = {}) {
    // Validate the input data using helper functions from the "validationFunctions" module.
    const checkSize = checkImageSize(size);
    const checkText = checkImageText(text);
    
    // If the input data is valid, proceed with generating the avatar image.
    if (checkSize && checkText) {
      const HEIGHT_FIX = 4.6875;
      // Manipulate the input data using helper functions from the "mainFunctions" module.
      const finalText = generateInitials(text);
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext("2d");

      // Set the background color of the avatar image.
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, size, size);

      // Calculate the position of the text on the avatar image.
      const measureText = ctx.measureText(finalText);
      const emHeightAscent = measureText.emHeightAscent === undefined;

      const textX = size / 2;
      const textY = emHeightAscent
        ? size / 2 + (size * HEIGHT_FIX) / 100
        : size / 2 + 1;

      // Add the text to the avatar image.
      ctx.font = `${fontWeight} ${size / 2}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = textColor;
      ctx.fillText(finalText, textX, textY);
      ctx.imageSmoothingQuality = "high";

      // Convert the avatar image to a base64 data URL and return it.
      const dataUrl = canvas.toDataURL();
      return dataUrl;
    }
  }
}

exports.davatar = new Davatar();