const cheerio = require('cheerio');
const cloudscraper = require('cloudscraper');

phimcoco = (url) => {
	return new Promise((resolve, reject) => {
		cloudscraper.get(url)
			.then((body) => {
				let web = body.replace(/https:\/\/noonoo43.tv/g,'http://127.0.0.1:3000').replace(/eval/g,'').replace(/location/g,'lcation');
				resolve(web);
			})
			.catch((err) => {
				// console.log(err);
				resolve(false);
			});
	});
}

module.exports.phimcoco = phimcoco;