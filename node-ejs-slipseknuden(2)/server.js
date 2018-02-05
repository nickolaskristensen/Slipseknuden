// load the things we need
var express = require('express');
var app = express();
require("./routes/allroutes.js")(app);

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.listen(8000);
console.log('8000 is the magic port');

app.use(express.static("public"));