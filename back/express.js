require('dotenv').config();


const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoDBClient = require('./bdd/mongoDBCLient');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());

const userRoutes = require('./routes/userRoutes');
const topicRoutes = require('./routes/topicRoute');


app.get('/', function (req, res, next) {
    res.json({status:200, msg:'success'});
})

userRoutes(app);
topicRoutes(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
    mongoDBClient(); 
})