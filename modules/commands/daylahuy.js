const fs = require("fs");
module.exports.config = {
	name: "daylahuy",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dawuy", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "daylahuy",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đây là Huy")==0 || (event.body.indexOf("Đây là Huy")==0)) {
		var msg = {
				body: "nhạc đây nè !!",
				attachment: fs.createReadStream(__dirname + `/noprefix/daylahuy.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}