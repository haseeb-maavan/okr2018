var express = require('express');
var bodyParser = require('body-parser');
var User = require('../../models/user');

var router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/insert', function (req, res) {
    var User = new User();
    User.user_id = req.body.user_id;
    User.user_name = req.body.user_name;
    User.password = req.body.password;

    User.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('User saved successfully');
    });
});

module.exports = router;