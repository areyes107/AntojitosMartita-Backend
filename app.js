'use strict'

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const foodRoutes = require('./src/routes/food.route');
const fileUpload = require('express-fileupload');


app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use(express.static(path.resolve('public')));

app.use(fileUpload())

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/food', foodRoutes);


module.exports = app;
