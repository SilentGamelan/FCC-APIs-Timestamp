const express = require('express');
const router = express.Router();



router.get('/', function(req, res) {
    res.send('Timestamp goes here');
});


module.exports = router;