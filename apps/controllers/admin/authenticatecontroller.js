var express = require('express');
var router = express.Router();
router.use('/login', function (req, res) {
	res.render('admin/login.ejs');
});
router.use('/userManage', function (req, res) {
	res.render('admin/userManage.ejs');
});
router.use('/widget', function (req, res) {
	res.render('admin/widget.ejs');
});
module.exports = router;
