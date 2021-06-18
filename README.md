# Davatar

[![codecov](https://codecov.io/gh/devblin/davatar/branch/main/graph/badge.svg?token=CT23E24A6Z)](https://codecov.io/gh/devblin/davatar)
[![npm version](https://badge.fury.io/js/davatar.svg)](https://badge.fury.io/js/davatar)

🤡 A package to generate avatar for users.


[![https://nodei.co/npm/davatar.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/davatar.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/davatar)

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Examples](#examples)
- [License](#license)

### Installation

```
npm install davatar
```

### Usage

*Import module as given below:*
```javascript=
const { davatar } = require("davatar");

/* 1. General method
 * Parameters: size (required), text(required), textColor(optional) 
 * backgroundColor(optional)
 */
const imageDataUrl = davatar.generate({size:50, text:"deepanshu dhruw", textColor:"blue", backgroundColor:"orange"});

/* 2. generate64({text: REQUIRED, textColor: OPTIONAL, backgroundColor: OPTIONAL});
 */
const imageDataUrl64 = davatar.generate64({text:"deepanshu dhruw"});

/* 3. generate128({text: REQUIRED, textColor: OPTIONAL, backgroundColor: OPTIONAL});
 */
const imageDataUrl128 = davatar.generate128({text:"deepanshu dhruw"});

//Generated imageDataUrl can be used in <img> tag or viewed directly through browser
```

### Examples

*Image generated from code usage example:*

- Fixed backgroundColor and textColor:

    ![](https://i.imgur.com/CqlMsOX.png)

- Random backgroundColor and textColor (64x64):

    ![](https://i.imgur.com/4YXo5wr.png)

- Random backgroundColor and textColor (128x128):

    ![](https://i.imgur.com/f7JvxUu.png)


### Tests

```
npm test
```

### License

[MIT](LICENSE)
