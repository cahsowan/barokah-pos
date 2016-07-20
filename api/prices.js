const db = require('./db');

function pricesResources(router) {
  router.get('/prices', function (req, res) {
    db.prices.loadDatabase();
    db.prices.find({}, function(err, prices) {
      res.json(prices);
    });
  });

  router.get('/prices/:id', function (req, res) {
    db.prices.loadDatabase();
    db.prices.find({_id: req.params.id}, function(err, prices) {
      res.json(prices[0]);
    });
  });

  router.post('/prices', function (req, res) {
    let validation = require('../validations/price');
    validation.check(req);

    let errors = req.validationErrors();
    if (errors) {
      res.status(422).json(errors);
      return;
    }

    db.prices.loadDatabase();
    db.prices.insert(req.body);
    res.json(req.body);
  });

  router.put('/prices/:id', function (req, res) {
    let validation = require('../validations/price');
    validation.check(req);

    let errors = req.validationErrors();
    if (errors) {
      res.status(422).json(errors);
      return;
    }

    db.prices.loadDatabase();
    // db.prices.insert(req.body);
    db.prices.update({_id: req.params.id}, req.body, {});
    res.json(req.body);
  });

  router.delete('/prices', function (req, res) {
    let pid = req.body.id;
    db.prices.loadDatabase();
    db.prices.remove({ _id: pid });
    res.json(req.body);
  });
}

module.exports = pricesResources;