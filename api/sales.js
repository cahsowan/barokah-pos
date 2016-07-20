const moment = require('moment');
const db = require('./db');

function salesResources(router) {
  router.get('/sales', function(req, res) {
    db.sales.loadDatabase();
    db.sales.find({}).sort({ created: -1 }).exec(function(err, sales) {
      res.json(sales);
    });
  });

  router.post('/sales', function(req, res) {
    let data = req.body;
    data.created = moment().unix();

    db.sales.loadDatabase();
    db.sales.insert(data, function(err, sale) {
      res.json(sale);
    });
  });

  router.get('/sales/:id', function(req, res) {
    let id = req.params.id;

    db.sales.loadDatabase();
    db.sales.find({_id: id}, function(err, sale) {
      res.json(sale);
    });
  });
}

module.exports = salesResources;