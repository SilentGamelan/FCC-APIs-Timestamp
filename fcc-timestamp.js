const express = require('express');
const router = express.Router();

router.use(()=> next);

router.get('/', function(req, res) {
    res.send('hello, world!');
});


module.exports = router;