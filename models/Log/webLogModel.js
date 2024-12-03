const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const WebLogSchema = new Schema({
    url: String,
    host: String,
    agent: String,
    requestLength: String,
    query: Object,
    requestSize: Number,
    responseCode: Number,
    responseTime: Number,
    requestToken: Number,
    remoteIp: String,
    body: Object,

    bad_body: String,
    bad_query: String,

    predict: String,
    resultValue:String,
    sVector:{type:Array,default:[]},
    nVector:{type:Array,default:[]},
    date: { type: Date , default: Date.now }   
})
module.exports = mongoose.model('weblog',WebLogSchema);