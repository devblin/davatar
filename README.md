# Davatar

[![codecov](https://codecov.io/gh/devblin/davatar/branch/main/graph/badge.svg?token=CT23E24A6Z)](https://codecov.io/gh/devblin/davatar)
[![npm version](https://badge.fury.io/js/davatar.svg)](https://badge.fury.io/js/davatar)
![npm](https://img.shields.io/npm/dt/davatar)

🤡 An npm package to generate avatar.

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

*Import module as given below:*
```js
/*
Generated imageDataUrl can be used in <img> tag 
Or can be viewed directly through browser.
*/
const { davatar } = require("davatar");
const imageDataUrl50 = davatar.generate({size:50, text:"deepanshu dhruw", textColor:"blue", backgroundColor:"orange"});
```
*Go to generated image-data-URL from the above code in the browser; you'll see the following image:*

![](https://i.imgur.com/b3vPzJE.png)


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

```js
const { davatar } = require("davatar");
const imageProperty = { text: "John Doe" }
const imageDataUrl = davatar.generate(imageProperty);
```
Random `textColor` & `backgroundColor`:

![](https://i.imgur.com/XEEEe03.png)


---

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
