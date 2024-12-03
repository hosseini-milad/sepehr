const FindBadURL = require("./FindBadURL");
const FindEventDetail = require("./FindEventDetail");

function StandardOS(rawData){
    try{
        data = JSON.parse(rawData)
    //console.log(data)
    }
    catch{return('')}
    const logs = data.Logs; 
    const resource = data.Resorces;
    var standardData=[]
    var logType=["Security","System","Application","Setup","ForwardedEvents"]
    for(var i=0;i<logType.length;i++){
        var logDetail = logs[logType[i]]
        
        for(var j=0;j<logDetail.length;j++){
            const eventDetail = FindEventDetail(logDetail[j].Id)
            const standardVector = StandardVector(data,logDetail[j])
            standardData.push({
            ip:data.Ip,
            os:data.OsName+"("+data.OsVersion+")",
            mac:data.Mac,
            logType:logType[i],
            eventId:logDetail[j].Id,
            eventCat:logDetail[j].Category,
            eventDetail:eventDetail,
            eventResource:resource,
            
            date:new Date(),
            })
        }
    }
    
    return(standardData)
}

const StandardVector=(standardData)=>{

}
module.exports = StandardOS