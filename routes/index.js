var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Masterton-Smith' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Test Page' });
});

module.exports = router;
