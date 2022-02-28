require('dotenv').config();


const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());

app.get('/', function (req, res, next) {
    res.json({status:200, msg:'success'});
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})