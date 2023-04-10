var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const indexController = require('../ws_controllers/index');

/* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });
router.get('/', indexController.getIndex);
router.get('/*', indexController.getOther);

module.exports = router;
