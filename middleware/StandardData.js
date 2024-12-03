const FindBadURL = require("./FindBadURL");

function StandardDataFunction(rawData){
    var standardData=[]
  for(var i=0;i<rawData.length;i++){
    var data = '';
    try{
        data= rawData[i].split("\r\n\r\n")[1];
        data = JSON.parse(data)
    }
    catch{return('')}
    const meta = data.meta; 
    const result = meta.res;
    const request = meta.req;
    standardData.push({
        url:request.url,
        host:request.headers.host,
        agent:request.headers["user-agent"],
        contentType:request.headers["content-type"],
        requestLength:request.headers['content-length'],
        requestToken:request.headers['x-access-token']?1:0,
        query:request.query,
        bad_query:FindBadURL(request.query,"query"),
        body:request.body,
        bad_body:FindBadURL(request.body,"body"),
        requestSize:meta.httpRequest?meta.httpRequest.requestSize:'',

        responseCode:result.statusCode,
        responseTime:meta.responseTime,
        remoteIp:meta.httpRequest?meta.httpRequest.remoteIp:''

    })
    //console.log(standardData)
    }
    return(standardData)
}
module.exports = StandardDataFunction