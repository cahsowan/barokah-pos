const db = require('./db');
const express = require('express');
const router = express.Router();
const pricesResource = require('./prices');
const salesResource = require('./sales');

pricesResource(router);
salesResource(router);

module.exports = router;