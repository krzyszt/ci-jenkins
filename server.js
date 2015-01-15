var express = require('express');

var app = express();

app.get('/', function(req,res){
	res.send('Continuous Integration with Jenkins');
});

app.listen(process.env.PORT || 3003);

module.exports = app;