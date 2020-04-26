# jstransformer-hamljs

[Haml.js](http://github.com/tj/haml.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-hamljs/master.svg)](https://travis-ci.org/jstransformers/jstransformer-hamljs)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-hamljs/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-hamljs)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-hamljs/master.svg)](http://david-dm.org/jstransformers/jstransformer-hamljs)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-hamljs.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-hamljs.svg)](https://www.npmjs.org/package/jstransformer-hamljs)

## Installation

    npm install jstransformer-hamljs

## API

```js
var hamljs = require('jstransformer')(require('jstransformer-hamljs'))

hamljs.render('#home\n  = title').body
//=> '<div id="home">Hello World!</div>'
```

## License

MIT
