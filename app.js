var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running at localhost:3000 ...');
});
