const express = require('express');
const router = express.Router()
const fs = require("fs");
const mime = require('mime');
const multer = require('multer');
const auth = require("../middleware/auth");
var ObjectID = require('mongodb').ObjectId;
const decompress = require("decompress");
const csv = require("fast-csv");
const users = require('../models/auth/users');

router.post('/fetchWeb',async (req,res)=>{
   

  res.json({result:"true",status:"done"})
})
router.post('/fetch-span',async (req,res)=>{
  const data = fs.readFile('./span/span.pcap', 'utf8')
  

  res.json({result:data,status:"done"})
})

module.exports = router;