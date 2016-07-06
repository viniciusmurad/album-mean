var express = require('express');
var consign = require('consign');
var app = express();

app.use(express.static('./public'));

consign().include('app/routes').into(app);

module.exports = app;