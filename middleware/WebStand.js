//const {WEBHOSTS} = process.env
function WebStand(value){
    try{var result =[]
    WEBHOSTS=["localhost", "deepware", "sepehrai"]
    WEBAGENT=["ire", "hrome", "nsomnia","ndro"]
    var urlResult = value.url.split("?").length*10
    result.push(urlResult+value.url.split("/").length)
    result.push(WEBHOSTS.findIndex(item=>value.host.includes(item)))
    result.push(WEBAGENT.findIndex(item=>value.agent.includes(item)))
    result.push(value.contentType.length)
    result.push(Number(value.requestLength))
    result.push(value.requestToken)
    result.push((value.bad_query*10)+
        (Object.keys(value.query).length))
    result.push((value.bad_body*10)+
        (Object.keys(value.body).length))
    result.push(value.requestSize)
    result.push(value.responseCode)
    result.push(value.responseTime)
    var ipValue = value.remoteIp.split('.')
    var ipNumber = Number(ipValue[0])*Number(ipValue[3])
    result.push(ipNumber)
    
    return(result)  
    }
    catch{return([
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0
      ])}
    
}

module.exports = WebStand