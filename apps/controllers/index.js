var express = require('express');
var router = express.Router();
router.use('/home', require(__dirname + '/homecontroller'));
router.use('/product', require(__dirname + '/productcontroller'));
router.use('/about', require(__dirname + '/aboutcontroller'));
router.use('/contact', require(__dirname + '/contactcontroller'));
router.use('/service', require(__dirname + '/servicecontroller'));
router.get('/', function (req, res) {
	res.render('index.ejs');
});
router.use('/admin', require(__dirname + '/admin/authenticatecontroller'));
module.exports = router;
