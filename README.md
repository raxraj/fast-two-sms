<h1 align="center">Welcome to fast-two-sms 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/fast-two-sms" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/fast-two-sms.svg">
  </a>
  <a href="https://github.com/raxraj/fast-two-sms#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/raxraj/fast-two-sms/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/raxraj/fast-two-sms/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/raxraj/fast-two-sms" />
  </a>
  <a href="https://twitter.com/raxrajtwit" target="_blank">
    <img alt="Twitter: raxrajtwit" src="https://img.shields.io/twitter/follow/raxrajtwit.svg?style=social" />
  </a>
</p>

> The Module to send Message using FAST2SMS.com

### 🏠 [Homepage](https://github.com/raxraj/fast2sms#readme)


## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install fast-2-sms --save
```

This package is provided in these module formats:

- CommonJS

## Usage

```sh
const fast2sms = require('fast-two-sms')

var options = 
{
authorization : YOUR_API_KEY,
message : 'YOUR_MESSAGE_HERE',
numbers : ['9999999999','8888888888']
} 
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
## Author

👤 **Ashutosh Kumar**

* Website: raxraj.github.io
* Twitter: [@raxrajtwit](https://twitter.com/raxrajtwit)
* Github: [@raxraj](https://github.com/raxraj)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/raxraj/fast2sms/issues). You can also take a look at the [contributing guide](https://github.com/raxraj/fast2sms/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [raxraj](https://github.com/raxraj).<br />
This project is [MIT](https://github.com/raxraj/fast2sms/blob/master/LICENSE) licensed.
