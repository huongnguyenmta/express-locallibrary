var express = require('express');
var router = express.Router();

// routes/index.js
// how that route renders a response using the template "index" passing the template variable "title".
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
