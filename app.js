var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/checkprime', function handleProcessGet(request, response) {
	var number = request.query.thenumber;
	var isPrime = true;
	if (number == 2){
		isPrime = true;
	}else if (number % 2 == 0){
		isPrime = false;
	}else{
		for (var i = 3; i < number / 2 + 1; i+=2) {
			if (number % i == 0){
				isPrime = false;
				break;
			}
		}
	}
	if (isPrime){
		response.send("It is a relative of Optimus, a friend");
	}else{
		response.send("It is not a Prime, maybe a decepticon");
	}
});

var server = app.listen(3000, function ServerListner() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Using Forms and Express, listening at http://%s:%s", host, port);
});
