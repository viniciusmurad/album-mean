var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.set('secret', 'segredojwt');
app.use(express.static('./public'));
app.use(bodyParser.json());

consign()
	.include('app/models')
	.then('app/api')
	.then('app/routes/auth.js')
	.then('app/routes')
	.into(app);

module.exports = app;


