const express = require('express');
var router = express.Router();
var https = require('https');

router.get("https://aarnavr.github.io/HackTJ9/form_render?", function (req, res) {
    search = req.query.mySearch
    res.render('search', {'search_value' : search})
});

module.exports = router;