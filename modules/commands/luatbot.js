const fs = require("fs");
module.exports.config = {
	name: "Luật bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Luật bot")==0 || (event.body.indexOf("luật bot")==0)) {
		var msg = {
				body: "⚡️MỜI BOT VÀO NHÓM /rankup 2 LẦN và /resend 2 LẦN ĐỂ TẮT THÔNG BÁO LÊN CẤP !!!!!\n⚡️⚡️⚡️++ CHỬI BO.T + SPAM BO.T + KICK BO.T = BAN BOX ++⚡️⚡️⚡️\n\n⚡️Do sự thiếu hiểu biết của thành viên trong nhóm hoặc do cả quản trị viên cũng đéo có ý thức nên chả ai quản được để thành ra bo.t bị ăn block tin nhắn hoặc có thể bay acc bo.t (t bay lần thứ n rồi đấy.-.) hoặc do một số đứa ngu k biết sài bo.t lại bảo bo.t ng.u thiểu năng và bảo bo.t dởm(nếu dởm thì kick t ra kiếm bot khác mà sài nhé._.).\n⚡️Thứ 2⚡️\n⚡️Add bo.t vô box mà không xin phép 🤔 rồi phá bo.t xong kick bo.t hãm loz vừa thôi nhé 🐧\n⚡️Thứ 3⚡️\n⚡️Nhiều thành phần có 1,2 lệnh cách 5s spam một lần máy ông nội tụi mày cũng đéo chịu nổi được đâu ._.\n⚡️Thứ 4⚡️\n⚡️Có 1 số thành phần bảo dùng máy vippro no 1 ip12prx samsung abcxyz gì đó xong bảo bo.t vào nhắn tin lag hết cả máy thì t nghĩ nên đi thay máy mới hoặc đập cmn đi .-.\n⚡️Thứ 5⚡️\n⚡️Admin sẽ vào kiểm tra đột xuất nếu box nào dưới 10 người và không có ảnh hoặc tên thì auto out box.\n⚡️Thứ 6⚡️\n⚡️Một box chỉ sài 1 bo.t thôi nhé nhiều bo.t dẫn đến loãng box và ảnh hưởng đến các bo.t phát hiện có 2 bo.t hoặc bla bla thì out + ban.\n⚡️Thứ 7⚡️\n⚡️Và lần cuối t nói ai sài được bot t thì sài không sài t không ép đừng kiểu thêm vô box rồi chê đủ kiểu bảo bo.t dởm xong chửi đòi war với bo.t ._.\n⚡️Chủ nhật⚡️\n⚡️Có thắc mắc gì liên hệ FB: https://www.facebook.com/WuyChjll/ 🌚🌚🌚",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}