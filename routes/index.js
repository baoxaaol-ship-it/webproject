var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
/* GET home page. */
router.get('/', function (req, res) {
  console.log('/', req.session);
  fs.readFile('views/index.html', function (err, html) {
    res.write(html);
  });
});
module.exports = router;
