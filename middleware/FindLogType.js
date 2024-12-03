function FindLogType(rawData){
    var data = '';
    if(rawData.includes("/api/fetch-span"))return("span")
    if(rawData.includes("User-Agent"))return("web")
    if(rawData.includes("OsName"))return("os")
    return(data)
}
module.exports = FindLogType