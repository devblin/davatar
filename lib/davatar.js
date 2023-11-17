' use strict'; //enables strict mode

const {
  getTextColor,
  getBackgroundColor,
  generateInitials,
} = require("./helpers/mainFunctions"); //import required helper functions
const {
  checkImageSize,
  checkImageText,
} = require("./helpers/validationFunctions"); //import required helper functions
const { createCanvas } = require("canvas"); //import canvas library

/**
 * @class
 * @classdesc Davatar class used to generate data urls
 */
class Davatar {
  /**
   * generates data url
   * @param {object} data - an object containing the data required to generate a data url
   */
  generate({
    size = 64, //size of the image
    text, //text to be displayed on the image
    textColor = getTextColor(), //color of the text
    backgroundColor = getBackgroundColor(), //background color of the image
    fontFamily = "Arial", //font family of the text
    fontWeight = 100, //font weight of the text
  } = {}) {
    //assign default values to the parameters
    const checkSize = checkImageSize(size); //check if size is valid
    const checkText = checkImageText(text); //check if text is valid
    if (checkSize && checkText) { //only generate image if the size and text are valid
      const HEIGHT_FIX = 4.6875; //constant to adjust the height of the text
      const finalText = generateInitials(text); //extracts the initials from the text
      const canvas = createCanvas(size, size); //creates a canvas element
      const ctx = canvas.getContext("2d"); //gets the context of the canvas

      ctx.fillStyle = backgroundColor; //sets the background color
      ctx.fillRect(0, 0, size, size); //draws a filled rectangle on the canvas

      const measureText = ctx.measureText(finalText); //gets the dimensions of the text
      const emHeightAscent = measureText.emHeightAscent === undefined; //checks if emHeightAscent is valid

      const textX = size / 2; //x coordinate of the text
      const textY = emHeightAscent //y coordinate of the text
        ? size / 2 + (size * HEIGHT_FIX) / 100 //if emHeightAscent is invalid, use this formula
        : size / 2 + 1; //if emHeightAscent is valid, use this value

      ctx.font = `${fontWeight} ${size / 2}px ${fontFamily}`; //sets the font
      ctx.textAlign = "center"; //sets the text alignment
      ctx.textBaseline = "middle"; //sets the text baseline
      ctx.fillStyle = textColor; //sets the text color
      ctx.fillText(finalText, textX, textY); //draws the text on the canvas
      ctx.imageSmoothingQuality = "high"; //sets the image smoothing quality

      const dataUrl = canvas.toDataURL(); //converts the canvas to a data url
      return dataUrl; //returns the data url
    }
  }
}

exports.davatar = new Davatar(); //exports an instance of the Davatar class