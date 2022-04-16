const express = require('express');
var router = express.Router();
var https = require('https');

router.get("/search", function (req, res) {
    res.render('search')
});

module.exports = router;