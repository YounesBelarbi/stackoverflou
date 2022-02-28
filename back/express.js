require('dotenv').config();


const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', function (req, res, next) {
    res.json({status:200, msg:'success'});
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})