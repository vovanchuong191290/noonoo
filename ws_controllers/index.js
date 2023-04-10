const getlink = require('../ws_functions/getlink');

exports.getIndex = async(req, res, next) => {
	let body = await getlink.phimcoco('https://noonoo43.tv');
	res.send(body);
};

exports.getPost = (req, res, next) => {
	let url = req.url;
	console.log(url);
	res.send(url);
};

exports.getOther = async(req, res, next) => {
	let url = req.url;
	let body = await getlink.phimcoco(`https://noonoo43.tv${url}`);
	res.send(body);
};