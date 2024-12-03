const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const OSDataSchema = new Schema({
    ip:String,
    os:String,
    mac:String,
    eventId:String,
    eventCat:String,
    eventResource:Object,
    logType:String,
    eventDetail:Array,
    predict: String,
    resultValue:String,
    date: { type: Date , default: Date.now }  ,
    label:String,
    sVector:{type:Array,default:[]},
    nVector:{type:Array,default:[]}
})
module.exports = mongoose.model('osdata',OSDataSchema);