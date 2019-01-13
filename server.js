const express = require('express');
const app = express();
const router = require('./fcc-timestamp');
const port = 3000;

// NOTE: to use template strings, use *backticks* not ''
app.listen(port, () => console.log(`Listening on port ${port}!`));

// logger middleware
app.use((req, res, next) => {
    let log = req.method + " " + req.path + "-" + req.ip;
    console.log(log);
    next();
});

app.get('/', function(req, res) {
    res.send('Validate your timestamp at /api/timestamp/[yourTimestamp]');
});

app.use('/api/timestamp', router);
