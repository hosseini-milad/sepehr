const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const SpanDataSchema = new Schema({
    data: Object,
    parse:Boolean,
    user:String,
    raw:Object,
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
    date: { type: Date , default: Date.now }  ,
    label:String,
    sVector:{type:Array,default:[]},
    nVector:{type:Array,default:[]}
})
module.exports = mongoose.model('spandata',SpanDataSchema);