const request = require('request');
const crypto = require('crypto');
const querystring = require('querystring');
const config = require('./config.js');

const appid = config.appid;
const key = config.key;
const url = config.url;
const salt = config.salt;

function signature(appid, query, salt, key){
	let string = appid + query + salt + key;
	const md5 = crypto.createHash('md5');
	md5.update(string);
	return md5.digest('hex');
}

function translate(postData, cb){
	let form = postData || {};
	let sign = signature(appid, form.q, salt, key);
	form.appid = appid;
	form.salt = salt;
	form.sign = sign;
	console.log(querystring.stringify(form));
	request.post({url: url, form: querystring.stringify(form)}, function(err, httpResponse,body){
		if(err){
			return console.error(err);
		};
		cb(body);
	});
}

exports.translate = translate;
