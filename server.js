const express = require('express');
const app = express();
const router = require('./fcc-timestamp');
const port = 3000;



// NOTE: to use template strings, use *backticks* not ''
app.listen(port, () => console.log(`Listening on port ${port}!`));

app.use('./fcc-timestamp', router);
