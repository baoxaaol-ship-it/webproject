var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
  console.log('/', req.session);
  fs.readFile('views/index.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/m', function (req, res) {
  console.log('/', req.session);
  fs.readFile('views/mindex.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/JG', function (req, res) {
  console.log('/JG', req.session);
  fs.readFile('views/subpage/self5.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/SW', function (req, res) {
  console.log('/SW', req.session);
  fs.readFile('views/subpage/Seonwoong.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/login', function (req, res) {
  console.log('/login', req.session);
  fs.readFile('views/login.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;