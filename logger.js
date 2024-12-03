var express = require('express');
require("dotenv").config();
const cookieParser = require("cookie-parser")

require("./middleware/database").connect();
const bodyParser = require('body-parser');
var app = module.exports = express();

const cors = require("cors");
app.use(cors());
app.use(cookieParser());
 
const { API_PORT } = process.env;
const port = API_PORT;

var router = express.Router();
router.use(bodyParser.urlencoded({
  extended: true
}))
router.use(bodyParser.json())


const fetchApi = require('./router/fetchApi')
router.use('/api/fetch', fetchApi)

// express-winston logger makes sense BEFORE the router

// Now we can tell the app to use our routing code:
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}))
app.use('/upload', express.static('upload'));

app.use(router);

app.listen(port, function(){
  console.log("logger listening on port %d in %s mode", this.address().port, app.settings.env);
});