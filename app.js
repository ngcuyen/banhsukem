const express = require('express');

var app = express();
var controller = require(__dirname + '/apps/controllers');
app.use(controller);
app.set('views', __dirname + '/apps/views');
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));
app.use('/partial', express.static(__dirname + '/views/partical'));
var server = app.listen(3000, function () {
	console.log('Server is running on port 3000');
});
