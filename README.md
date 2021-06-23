# Davatar

[![codecov](https://codecov.io/gh/devblin/davatar/branch/main/graph/badge.svg?token=CT23E24A6Z)](https://codecov.io/gh/devblin/davatar)
[![npm version](https://badge.fury.io/js/davatar.svg)](https://badge.fury.io/js/davatar)
![npm](https://img.shields.io/npm/dt/davatar)

🤡 An npm package to generate avatar data-url on both client & server side, using text.

[![https://nodei.co/npm/davatar.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/davatar.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/davatar)

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Tests](#tests)
- [License](#license)

## Installation

```
npm install davatar
```

## Usage

Import module as given below:
```js
/*
Generated imageDataUrl can be used in <img> tag 
Or can be viewed directly through browser.
*/
const { davatar } = require("davatar");
const imageDataUrl50 = davatar.generate({size:50, text:"deepanshu dhruw", textColor:"blue", backgroundColor:"orange"});
```
*Generated Image-Data-URL:*
```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACQElEQVRoge2YTUgUUQCAv9ltN3W32HVkw9LNFqJTkLhtEWQeDFqDfpAg6lDgoTwEGdExpD0FkYcO1sHoUgTRL6RBHvo5FIulYFCXFhstaWu1H1uXXdfp1CI4xAgz02t53/Hx+HgfM/Nm3ij6dXTKANe/XoBVyBDRkCGiIUNEQ4aIhgwRDRkiGjJENJaZmdQz0EV+zrto3OMuEPRN09gwzMb6UdyuoiMeIxQzB6sVHT+Zyfn/Okf1ZzjeeplT8YtU+6ds9RixpJADW27RtO5VaTybr0L7GubJ2xbGvjQAEFY1bp9sJxoZss1jhKlb6w9tm/o52nxt0biuKzx4vYfOq71omTC7zj8imYgRCaVs9SzEkoddUXT2Nt0nmYhRG5gkM6NyrO+Kox5Ld6266gkuHTkBwOCbVoZSUcc8lm+/+zffZXXwEwAPR3Y75rE8xKXMs33DcwCS72OOeWx5IYZrNADSP0KOeWwJqfDkAJjNVzrmsSXk8/dVANQGJh3z2BKSSkdML8Aqj+Uh37IBnr1rBjD9VrbCY3lI72An+TkvbleRfdF7jnksDRkea+TcnbMAHNp2g7CqOeaxJGRed3HzxUF2JJ6SK1SwJviRC4dPO+pZ0kdj/0hbaScBKBQ9TEzV8Xh0Z+nBrFfHGTgTJ7QybbtnIZadR3zLf9HR0kd3ezdB37StHiNMXZGueI/hya7SO8vamg+EVY2t619S5c064jHC1BX5Hyibnw8yRDRkiGjIENGQIaIhQ0RDhohG2YT8BpZRJq7xHedTAAAAAElFTkSuQmCC
```
*Open the generated Image-Data-URL in the browser; you'll see the following image:*

![](https://i.imgur.com/b3vPzJE.png)

***In React.js***
```js
import React from "react";
const { davatar } = require("davatar");

function App() {
	const imageDataUrl = davatar.generate({
		size: 50,
		text: "deepanshu dhruw",
		textColor: "red",
		backgroundColor: "cyan",
	});
	return <img src={imageDataUrl} alt="image"></img>;
}

export default App;
```
*Run the react-app and you will see below image:*

![](https://i.imgur.com/KeyjZ9J.png)


### Parameters:

| Parameter                      | Type    | Values                                                                      | Default                      |
| ------------------------------ | ------- | --------------------------------------------------------------------------- | ---------------------------- |
| **size**  (Optional)           | Integer | 1 - 512                                                                     | 64                           |
| **text**  (Required)           | String  | More than 2 characters                                                      |                              |
| **textColor**  (Optional)      | String  | [Color Format](https://developer.mozilla.org/en-US/docs/Web/CSS/color)      | Random RGB Value              |
| **backgroundColor** (Optional) | String  | [Color Format](https://developer.mozilla.org/en-US/docs/Web/CSS/color)      | Random RGB Value  |
| **fontFamily** (Optional)      | String  | [Font Family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) | "Arial"                      |
| **fontWeight** (Optional)      | Integer | 100 - 900                                                                   | 100                          |


## Examples

- [Example-1](#example-1)
- [Example-2](#example-2)
- [Example-3](#example-3)

#### **EXAMPLE-1**
Generating 64×64 (px) dimension image, with custom parameters:
```js
const { davatar } = require("davatar");
const imageProperty = {
    size: 64,
    text: "John Doe",
    textColor: "red",
    backgroundColor: "green",
    fontFamily: "monospace",
    fontWeight: 600
}
const imageDataUrl = davatar.generate(imageProperty);
```
![](https://i.imgur.com/b0mHn5J.png)


---
#### **EXAMPLE-2**
Generating default dimension image, with default parameters:
```js
const { davatar } = require("davatar");
const imageProperty = { text: "John Doe" }
const imageDataUrl = davatar.generate(imageProperty);
```
Random `textColor` & `backgroundColor`:

![](https://i.imgur.com/XEEEe03.png)


---
#### **EXAMPLE-3**
Generating 128×128 (px) dimension image, with default parameters:
```js
const { davatar } = require("davatar");
const imageProperty = { size: 128, text: "dd" }
const imageDataUrl = davatar.generate(imageProperty);
```
Random `textColor` & `backgroundColor`:

![](https://i.imgur.com/wHW4DBD.png)



## Tests

```
npm test
```

## License

[MIT](LICENSE)
