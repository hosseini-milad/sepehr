const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const readline = require("readline");
const fs = require("fs");
const axios = require('axios');
var ObjectID = require('mongodb').ObjectID;
const router = express.Router()
const jsonParser = bodyParser.json();
const webLogModel = require('../models/Log/webLogModel');
const osLogModel = require('../models/Log/osLogModel');
const webDataModel = require('../models/Log/webLogData');
const StandIt = require('../middleware/StandIt');
const WebStand = require('../middleware/WebStand');
const WebNorm = require('../middleware/WebNorm');
const OSStand = require('../middleware/OSStand');
const OSNorm = require('../middleware/OSNorm');
const spanLogData = require('../models/Log/spanLogData');
const {DEFAULT_PREDICT,INSERT_DAY} = process.env


router.post('/webService', async (req,res)=>{
  const data = req.body
  var label = 0;
  if(data.responseCode===200)label =0
  else if(data.responseCode===404)label =.5
  else if(data.responseCode===401)label =.8
  else  label =1
  data.label = label
  const logAdd= await webLogModel.create(data)

  res.json({result:label,message:logAdd})
})
router.post('/webService-batch', async (req,res)=>{
  const data = req.body
  
  var label = 0;
  for(var i=0;i<data.length;i++){
    var standardData = WebStand(data[i])
    data[i].nVector = WebNorm(standardData)
    data[i].sVector=standardData
  }
  const dataToTrain = {data:data}
  var resultML =''
  axios.post('http://ml.deepware.ir/api/tf/tf-test', dataToTrain)
    .then(response => {
      var resJson = response.data.result;
      console.log(resJson)
    for(var i=0;i<data.length;i++){
      data[i].predict=resJson[i].predict,
      data[i].resultValue=resJson[i].value 
      var rand = 0//parseInt(Math.random()*7)
      var date = new Date()
      data[i].date = date.setDate(date.getDate() - rand);
    }
      const logAdd= webLogModel.insertMany(data)

      res.json({result:label,message:logAdd.length +" logs added",
    mlResult:resultML})
    })
    .catch(error => {
      for(var i=0;i<data.length;i++){
        data[i].predict="Unlabel";
        var predictvalue = Math.random().toFixed(2) 
        data[i].resultValue=predictvalue<.90?(1-predictvalue):
        1-(predictvalue/4)
      }
      const logAdd= webLogModel.insertMany(data)
      console.error('Error sending log:', error.message);
    });
  /*if(data.responseCode===200)label =0
  else if(data.responseCode===404)label =.5
  else if(data.responseCode===401)label =.8
  else  label =1
  data.label = label*/
  
})
router.post('/osService-batch', async (req,res)=>{
  const data = req.body
  var label = 0;
  
  for(var i=0;i<data.length;i++){
    var standardData = OSStand(data[i])
    data[i].nVector = OSNorm(standardData)
    data[i].sVector=standardData
  }
  //console.log(data)
  const dataToTrain = {data:data}
  var resultML =''
  axios.post('http://ml.deepware.ir/api/tf/tf-test-os', dataToTrain)
    .then(response => {
      var resJson = response.data.result;
      console.log(resJson)
    for(var i=0;i<data.length;i++){
      data[i].predict=resJson[i]?resJson[i].predict:DEFAULT_PREDICT,
      data[i].resultValue=resJson[i]?resJson[i].value :"N/A"
      var rand = parseInt(Math.random()*INSERT_DAY)
      var date = new Date()
      data[i].date = date.setDate(date.getDate() - rand);
    }
      const logAdd= osLogModel.insertMany(data)

      res.json({result:label,message:logAdd.length +" logs added",
    mlResult:resultML})
    })
    .catch(error => {
      for(var i=0;i<data.length;i++){
        data[i].predict="Unlabel";
        var predictvalue = Math.random().toFixed(2) 
        data[i].resultValue=predictvalue>.9?(1-predictvalue):
        1-(predictvalue/4)
      }
      const logAdd= osLogModel.insertMany(data)
      console.error('Error sending log:', error.message);
    });
  
})
router.post('/spanService-batch', async (req,res)=>{
  const data = req.body
  var label=0
  var insertData=[]
  for(var i=0;i<data.length;i++){
    insertData.push({
      raw:data[0]
    })
  }
    const insertInfo = await spanLogData.insertMany(insertData)
    /*var standardData = OSStand(data[i])
    data[i].nVector = OSNorm(standardData)
    data[i].sVector=standardData*/
  
  return("done")
  
})
router.post('/createDS', async (req,res)=>{
  const net = ''
  const stream = fs.createReadStream("./dataset/sample/log.json", "utf-8");
  const rl = readline.createInterface({ input: stream });
    let data = [];
    let record = 0
    rl.on("line", (row) => {
      var pureRow = row.split(',')
      pureRow.pop()
      data.push(pureRow.toString());
    });
    
    rl.on("close", async () => {
      var parseData = []
      var unFormat =0
      var attack=0
      for (var i=0;i</*1000*/data.length;i++)
      {
        var standResult = StandIt(data[i]);
        //console.log(standResult)
        //console.log(standResult.label)
        if(!standResult||!standResult.parse)unFormat++
        if(standResult&&standResult.label==="attack")attack++
        parseData.push(standResult)
      }
      await webDataModel.deleteMany({})
      //console.log(parseData)

      const addDB = await webDataModel.insertMany(parseData)
      /*var zero=data[100]
      for(var i=0;i<data.length;i++){
        if(i===100){
          try{zero = JSON.parse(zero)}catch{}
        }
      }*/
      
      res.json({unFormat:unFormat,size:parseData.length,
        attack:attack});
      
    });

  
  //net.fromJSON(networkState);
  var testResult=[]
  /*for(var i=0;i<testData.length;i++){
    testResult.push({data:testData[i].data,result:
      net.run(normalize(testData[i].data.split(',').map(str => {
        return parseFloat(String2Float(str))
      })))[0]
    })
    }*/
    //res.json({size:networkState})
})


module.exports = router;