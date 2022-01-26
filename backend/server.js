const express = require("express")
const axios = require("axios")
const app = express()

app.get("/japan-corona-data-date", function (req, res) {
    res.setHeader('Access-control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Headers", "*");
    //console.log(req.query);
    const { date } = req.query
    axios({
        url: 'https://opendata.corona.go.jp/api/Covid19JapanAll',
        params: { date }
    }).then(response => {
        res.json(response.data)
    })
})

app.get("/japan-corona-data-site", function (req, res) {
    res.setHeader('Access-control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Headers", "*");
    const { dataName } = req.query
    axios({
        url: 'https://opendata.corona.go.jp/api/Covid19JapanAll',
        params: { dataName }
    }).then(response => {
        res.json(response.data)
    })
})

app.listen(5000, "localhost", (err) => {
    if (!err) {
        console.log("Successful!")
    }
    else console.log(err);
})