var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.json({ ok: true, msg: 'Everything is good' });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
