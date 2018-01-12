const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./routes/size.js');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

let port = process.env.PORT || 3500;

app.listen(port, function() {
  console.log("Listening on port: " + port);
});

api(app);
