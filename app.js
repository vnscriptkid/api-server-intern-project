var myTable = require('./seed.js');
var express = require('express');
var app = express();

myTable.updateDataAndSort();

app.get('/api/top-gainers', function(req, res){
	res.send(myTable.gainers);
});

app.get('/api/top-losers', function(req, res){
	res.send(myTable.losers);
});

app.get('/', function(req, res){
	res.send(myTable.stocks);
});

app.listen(3000);


