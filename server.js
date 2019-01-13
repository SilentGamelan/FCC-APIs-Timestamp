// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Micro logger middleware
app.use((req, res, next) => {
    let log = req.method + " " + req.path + "-" + req.ip;
    console.log(log);
    next();
});

// routing functions located in fcc-timestamp.js
const router = require('./fcc-timestamp');
app.use(router);



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});