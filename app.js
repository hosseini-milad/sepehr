const net = require('net');
var express = require('express');
require("dotenv").config();
const axios = require('axios');
const {BATCH_SIZE,SERVER_IP,LOGGER_IP} = process.env
const StandardDataFunction = require('./middleware/StandardData');
const FindLogType = require('./middleware/FindLogType');
const StandardOS = require('./middleware/StandardOS');
const { log } = require('console');
const bodyParser = require('body-parser');
var app = module.exports = express();
const cors = require("cors");
const mainApi = require('./router/mainApi');
const CatchSpan = require('./middleware/CatchSpan');
var logStack = []
// Create a TCP server
const server = net.createServer((socket) => {
  // 'socket' is a Duplex stream (Readable and Writable)

  // Connection event
  console.log('Client connected:', socket.remoteAddress, socket.remotePort);
  
  // Handle data reception
  socket.on('data', (data) => {
    const readableData = data.toString('utf8');
    //console.log(readableData)
    //var dataParse = JSON.parse(readableData)
    var logType = FindLogType(readableData)
    if(logType==="os"){
      const logOS = StandardOS(readableData)
      
      if(logOS){ 
        axios.post(SERVER_IP+'/api/fetch/osService-batch', logOS)
      .then(response => {
        console.log('Log sent successfully: '+response.message);
      })
      .catch(error => {
        console.error('Error sending log:', error.message);
      })
      }
    }
    //console.log(logType)
    if(logType==="span"){
      try {
        CatchSpan('./span/packets.json')
      }
      catch{}
    }
    if(logType==="web"){
      logStack=(StandardDataFunction(readableData))
      //console.log(readableData)
    if(logStack.length>=BATCH_SIZE){
      axios.post(SERVER_IP+'/api/fetch/webService-batch', logStack)
      .then(response => {
        logStack=[] 
        console.log('Log sent successfully: '+response.message);
      })
      .catch(error => {
        console.error('Error sending log:', error.message);
      });}}
      //console.log('Received:', data.toString());
    });


  // Handle connection termination
  socket.on('end', () => {
    console.log('Client disconnected');
  });

  // Handle errors
  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
  });
});

var router = express.Router();
router.use(bodyParser.urlencoded({
  extended: true
}))
router.use(bodyParser.json())
router.use('/api', mainApi)
router.use(cors());

app.use(router);
 
// Set the server to listen on a specific port and address
const port = 2340;  // replace with your desired port number
const host = LOGGER_IP//'localhost';  // replace with your server IP address
server.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});