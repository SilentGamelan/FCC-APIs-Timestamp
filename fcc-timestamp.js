const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send('Validate your timestamp at /api/timestamp/[yourTimestamp]');
    next();
});

router.get('/api/timestamp/:timeToValidate', function(req, res) {
    res.send(req.params.timeToValidate);
});


module.exports = router;