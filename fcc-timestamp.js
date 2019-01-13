const express = require('express');
const router = express.Router();


// http://expressjs.com/en/starter/basic-routing.html
router.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
router.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Timestamp validation via routing parameters
router.get('/api/timestamp/:userTime', function(req, res, next) {
    let userTime = req.params.userTime;
    
    if(userTime == null && userTime == "") {
        next(res.send(userTime = new Date()));
    }

    userTime = new Date(userTime);

    if(userTime === NaN) {
        next(res.send({"error": "Invalid Date"}));
    } else {
        next(res.send({
            "unix"  : userTime.getTime(),
            "utc"   : userTime.toUTCString()
        }));
    }

});


module.exports = router;