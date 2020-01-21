# fast-two-sms
 [![npm version](https://badge.fury.io/js/fast-2-sms.svg)](https://npmjs.org/package/fast-2-sms)  [![minzipped size](https://img.shields.io/bundlephobia/minzip/fast-2-sms.svg)](https://bundlephobia.com/result?p=fast-2-sms)  [![build status](https://img.shields.io/travis/raxraj/fast2sms/master.svg)](https://travis-ci.org/raxraj/fast2sms#master)  [![coverage status](https://coveralls.io/repos/raxraj/fast2sms/badge.svg)](https://coveralls.io/github/raxraj/fast2sms)  [![dependency status](https://david-dm.org/raxraj/fast2sms.svg?theme=shields.io)](https://david-dm.org/raxraj/fast2sms)  [![devDependency status](https://david-dm.org/raxraj/fast2sms/dev-status.svg)](https://david-dm.org/raxraj/fast2sms#info=devDependencies) 

The Module to send Message using FAST2SMS.com node JS API.



## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install fast-2-sms --save
```

This package is provided in these module formats:

- CommonJS

## Usage

```sh
const fast2sms = require('fast-2-sms')

var options = {authorization : YOUR_API_KEY , message : 'YOUR_MESSAGE_HERE' ,  numbers : ['9999999999','8888888888']} 
fast2sms.sendMessage(options)

```

Other than Above You may also use following options for more control.

```sh

You may also set the other FAST2SMS options 
method    -     Method for request (Default : POST)
sender_id -     A custom name for SMS sender (Default: FSTSMS)
language  -     english / unicode (Unicode supports other languages such as Hindi) (Default: english)
route     -     p for promotional and t for transactional (Default: p)
flash     -     This field is optional, it will use "0" as default value or you can set to "1" for sending flash message. 

```




## Dependencies

- [unirest](https://github.com/Mashape/unirest-nodejs): Simplified, lightweight HTTP client library


## Dev Dependencies

None

## License
[MIT]()
