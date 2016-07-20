const Datastore = require('nedb');
let db = {};

db.prices = new Datastore('./dbs/prices.db');
db.sales = new Datastore('./dbs/sales.db');
db.stocks = new Datastore('./dbs/stocks.db');

module.exports  = db;