"use strict";

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
   * Generates a personalized avatar image.
   * @param {object} options - Optional parameters to customize the avatar.
   * @param {number} options.size - The size of the avatar (default: 64).
   * @param {string} options.text - The text used to generate the initials for the avatar.
   * @param {string} options.textColor - The color of the initials (default: randomly generated).
   * @param {string} options.backgroundColor - The background color of the avatar (default: randomly generated).
   * @param {string} options.fontFamily - The font family used for the initials (default: "Arial").
   * @param {number} options.fontWeight - The font weight used for the initials (default: 100).
   * @returns {string} The data URL of the generated avatar.
   */
  generate({
    size = 64,
    text,
    textColor = getTextColor(),
    backgroundColor = getBackgroundColor(),
    fontFamily = "Arial",
    fontWeight = 100,
  } = {}) {
    // Check if the given size and text are valid for the avatar
    const checkSize = checkImageSize(size);
    const checkText = checkImageText(text);
    if (checkSize && checkText) {
      // Calculate some values based on the size of the avatar
      const HEIGHT_FIX = 4.6875;
      const finalText = generateInitials(text);
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext("2d");

      // Set the background color of the avatar
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, size, size);

      // Calculate the position of the initials based on the size of the avatar
      const measureText = ctx.measureText(finalText);
      const emHeightAscent = measureText.emHeightAscent === undefined;
      const textX = size / 2;
      const textY = emHeightAscent
        ? size / 2 + (size * HEIGHT_FIX) / 100
        : size / 2 + 1;

      // Set the font and alignment for the initials
      ctx.font = `${fontWeight} ${size / 2}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Set the color and text for the initials
      ctx.fillStyle = textColor;
      ctx.fillText(finalText, textX, textY);
      ctx.imageSmoothingQuality = "high";

      // Convert the canvas to a data URL and return it
      const dataUrl = canvas.toDataURL();
      return dataUrl;
    }
  }
}

// Export a new instance of the Davatar class
exports.davatar = new Davatar();