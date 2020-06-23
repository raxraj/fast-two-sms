const chalk = require('chalk');
const axios = require('axios');
const Sentry = require('@sentry/node');

//Initialize Sentry
Sentry.init({ dsn: 'https://8adbc6b47b784d0f8e8ef220a2455413@o386985.ingest.sentry.io/5241759' })

const sendMessage = async (props) => {
	if (props.method === undefined) {
		props.method = 'POST';
	}
	if (props.sender_id === undefined) {
		props.sender_id = 'FSTSMS';
	}
	if (props.language === undefined) {
		props.language = 'english';
	}
	if (props.route === undefined) {
		props.route = 'p';
	}
	if (props.flash === undefined) {
		props.flash = 0;
	}
	if (props.showLogs === undefined) {
		props.showLogs = true;
	}
	//THE REASON TO GO WITH (if) and not (props.method = props.method || 'POST') is for empty String and false values.

	let url = 'https://www.fast2sms.com/dev/bulk';
	let nums = props.numbers.join(',');
	if (props.method === 'GET') {
		//NO-CACHE ONLY IF GET
		data = {
			authorization: props.authorization,
			sender_id: props.sender_id,
			message: props.message,
			language: props.language,
			route: props.route,
			numbers: nums,
			flash: props.flash
		};
		headers = {
			'cache-control': 'no-cache'
		};
	} else {
		headers = {
			authorization: props.authorization
		};

		data = {
			sender_id: props.sender_id,
			message: props.message,
			language: props.language,
			route: props.route,
			numbers: nums
		};
	}
	try {
		const response = await axios({
			method: props.method,
			url,
			data,
			headers
		});
		if (props.showLogs) console.log(chalk.greenBright('Message sent successfully.'));
		return response.data;
	} catch (error) {
		if (error.response.data.status_code === 412)
			if (props.showLogs) console.log(chalk.red("Can't send message. Authorization key missing or invalid."));
		if (error.response.data.status_code === 402)
			if (props.showLogs) console.log(chalk.red("Can't send message. Message text is required."));
		if (error.response.data.status_code === 405)
			if (props.showLogs) console.log(chalk.red("Can't send message.Atleast one Number is required."));
		return error.response.data;
	}
};

module.exports = {
	sendMessage: sendMessage
};
