//const {WEBHOSTS} = process.env
function OSStand(value){
    var result =[]
    OS=["indow", "buntu", "ac","ndro"]
    HML=["High", "Medium", "Low"]
    Type=["Security","System","Application","Setup","ForwardedEvents"]
    result.push(Number(value.ip.split(".").pop()))
    result.push(OS.findIndex(item=>value.os.includes(item)))
    var macCode = value.mac.split(":").pop()
    macCode = macCode.charCodeAt(0)+macCode.charCodeAt(1)
    result.push(macCode)
    result.push(value.eventId)
    var cpuUsage = value.eventResource.Cpu
    var cpuNorm = cpuUsage.reduce((a, b) => a + b, 0)
    cpuNorm=cpuNorm/cpuUsage.length
    result.push(cpuNorm)
    var memUsage = value.eventResource.Ram
    var memNorm = memUsage.reduce((a, b) => a + b, 0)
    memNorm=memNorm/memUsage.length
    result.push(memNorm)
    result.push(Type.findIndex(item=>value.logType===item))
    result.push(HML.findIndex(item=>value.eventDetail?value.eventDetail[2]===item:"-1"))

    try{
    return(result)  
    }
    catch{return([
        0, 0, 0, 0, 0,
        0, 0, 0,  
      ])}
    
}

module.exports = OSStand