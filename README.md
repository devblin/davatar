# Davatar

A package to generate avatar for users.

## Contents

- [Installation](###installation)
- [Usage](###usage)
- [Tests](###tests)
- [Examples](###examples)
- [License](###license)

### Installation

```
npm install davatar
```

### Usage

```js
const davatar = require("davatar");
```

Generate 64x64 width avatar:

```js
const image_64 = davatar.generate(64, "Deepanshu Dhruw");
```

### Tests

```
npm test
```

### License

[MIT](LICENSE)
