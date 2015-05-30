var dnsd = require('dnsd')
var dns = require('dns')
dnsd.createServer(function(req, res) {
	var question = res.question[0].name;
	if (question.indexOf("porn")==-1){
		getAdd(question, function(add){
			if (add == undefined){
				res.end();
			} else {
			res.end(add[0]);
			}
		})
		return;
	}
	console.log("Reject request from ["+req.connection.remoteAddress+"] : "+question);
	res.end('192.168.1.1')
}).listen(53,'127.0.0.1')
console.log('Server running')

dns.setServers(['192.168.1.1']);

function getAdd(host,callback){
		
dns.resolve(host,function(err, address){
	callback(address);
})
}
