/**
* @author Filippo Finke
*/
var redis = require('redis');
var http = require('http');
var os = require('os');
var client = redis.createClient(6379, "redis");
var connected = false;

http.createServer(function (req, res) {
	res.writeHead(200, {"Access-Control-Allow-Origin": "*"});
	var message = os.hostname();
	if(connected) {
		message += " REDIS OK! Visits: ";
	} else {
		message += " REDIS OFFLINE!";
	}
	var visits = 0;
	if(connected)
	{
		client.incr('visits', function(err, reply) {
		    if(reply == null)
		    {
		    	client.set('visits', "1", function(err, reply) {
			    });
			    reply = 1;
		    }
		    console.log(reply);
		    message += reply;
		    res.end(message);
		});
	}
	else
	{
    	res.end(message);
	}
}).listen(8080);

client.on('connect', function() {
    console.log('Redis client connected');
    connected = true;
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
    connected = true;
});