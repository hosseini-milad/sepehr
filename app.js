const express = require("express");
const fetchApi = require('./router/fetchApi');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const cors = require("cors");

const app = express();
app.use(cors());

app.use('/api/fetch', fetchApi)

app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
  
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
  })

app.use(express.json());

module.exports = app;
