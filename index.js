const fs = require('fs');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const api = require('./api');
const app = express();

app.use(cors({
  exposedHeaders: ['Link']
}));

app.use(bodyParser.json({
  limit : '100kb'
}));

app.use(expressValidator());

app.use(express.static('public'));

app.use('/api', api);

app.get('/', function (req, res) {
  fs.readFile('./public/index.html', function (err, content) {
    res.send(content.toString());
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});