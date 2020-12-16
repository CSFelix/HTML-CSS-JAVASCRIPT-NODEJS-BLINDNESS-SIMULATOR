/* 
	*******************
	*** Installers  ***
	*******************

	npm install express     (app control)
	npm install body-parser (data transfer between pages >> forms and ajax) 
	npm install color-blind (blindness simulator library)
*/

const express = require('express');
const bodyParser = require('body-parser');
const blinder = require('color-blind');
const app = express();

// receive datas via json and ajax
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// disable cors
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");;
	next();
});

// port to run
app.listen(4000, () => {
	console.log('All right on port 4000!');
});

// post methods
app.post('/simulatorProtanomaly', function(req, res) {
	color = simuProtanomaly(req.body.color);
	console.log(color);
	res.send(color);
});

app.post('/simulatorProtanopia', function(req, res) {
	color = simuProtanopia(req.body.color);
	console.log(color);
	res.send(color);
});

app.post('/simulatorDeuteranomaly', function(req, res) {
	color = simuDeuteranomaly(req.body.color);
	console.log(color);
	res.send(color);
});

app.post('/simulatorDeuteranopia', function(req, res) {
	color = simuDeuteranopia(req.body.color);
	console.log(color);
	res.send(color);
});

app.post('/simulatorTritanomaly', function(req, res) {
	color = simuTritanomaly(req.body.color);
	console.log(color);
	res.send(color);
});

app.post('/simulatorTritanopia', function(req, res) {
	color = simuTritanopia(req.body.color);
	console.log(color);
	res.send(color);
});

app.post('/simulatorAchromatomaly', function(req, res) {
	color = simuAchromatomaly(req.body.color);
	console.log(color);
	res.send(color);
});

app.post('/simulatorAchromatopsia', function(req, res) {
	color = simuAchromatopsia(req.body.color);
	console.log(color);
	res.send(color);
});

app.post('/simulatorAll', function(req, res) {
	colors = simuAll(req.body.color);
	console.log(colors);
	res.send(colors);
});

// simulator methods
function simuProtanomaly(hex_color) { return blinder.protanomaly(hex_color); }
function simuProtanopia(hex_color) { return blinder.protanopia(hex_color); }
function simuDeuteranomaly(hex_color) { return blinder.deuteranomaly(hex_color); }
function simuDeuteranopia(hex_color) { return blinder.deuteranopia(hex_color); }
function simuTritanomaly(hex_color) { return blinder.tritanomaly(hex_color); }
function simuTritanopia(hex_color) { return blinder.tritanopia(hex_color); }
function simuAchromatomaly(hex_color) { return blinder.achromatomaly(hex_color); }
function simuAchromatopsia(hex_color) { return blinder.achromatopsia(hex_color); }

function simuAll(hex_color) {
	results = [];

	results.push(blinder.protanomaly(hex_color));
	results.push(blinder.protanopia(hex_color));
	results.push(blinder.deuteranomaly(hex_color));
	results.push(blinder.deuteranopia(hex_color));
	results.push(blinder.tritanomaly(hex_color));
	results.push(blinder.tritanopia(hex_color));
	results.push(blinder.achromatomaly(hex_color));
	results.push(blinder.achromatopsia(hex_color));

	return results;
}