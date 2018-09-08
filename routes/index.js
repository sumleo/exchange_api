var express = require('express');
var router = express.Router();
var fetch=require('node-fetch');
var http=require('./httpClient');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api',function (req,res,next) {
    let url = `https://api.huobipro.com/market/history/kline?period=1day&size=200&symbol=btcusdt&AccessKeyId=7c31c94c-56d262be-67fb0e41-0ff6c`;
    http.get(url, {
        timeout: 100000,
        gzip: true
    }).then(data => {
        console.log(data)
    }).catch(ex => {
        resolve(null);
    });
});


module.exports = router;
