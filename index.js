const express = require('express');
const app = express();
const googleTrends = require('google-trends-api');
const dayjs = require('dayjs');
const cors = require('cors');
app.use(cors());

app.get('/pastmonth', (req, res) => {
    new Promise((resolve,reject)=>{
        googleTrends.interestOverTime({keyword: req.query.keyword,startTime : dayjs().subtract(1, 'month').toDate()})
        .then(function(result){
            let trendResult = JSON.parse(result)
            resolve(trendResult)
        })
        .catch(function(err){
          console.error('Oh no there was an error', err);
        });
    }).then((result)=>{
        res.json(result)
    })
});
app.get('/pasthalfyear', (req, res) => {
    new Promise((resolve,reject)=>{
        googleTrends.interestOverTime({keyword: req.query.keyword,startTime : dayjs().subtract(6, 'month').toDate()})
        .then(function(result){
            let trendResult = JSON.parse(result)
            resolve(trendResult)
        })
        .catch(function(err){
          console.error('Oh no there was an error', err);
        });
    }).then((result)=>{
        res.json(result)
    })
});
app.get('/pastyear', (req, res) => {
    new Promise((resolve,reject)=>{
        googleTrends.interestOverTime({keyword: req.query.keyword,startTime : dayjs().subtract(1, 'year').toDate()})
        .then(function(result){
            let trendResult = JSON.parse(result)
            resolve(trendResult)
        })
        .catch(function(err){
          console.error('Oh no there was an error', err);
        });
    }).then((result)=>{
        res.json(result)
    })
});
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));