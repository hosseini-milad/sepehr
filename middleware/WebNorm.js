//const {WEBHOSTS} = process.env
function WebNorm(value){
    var result=[]
    try{
        result.push(((55-value[0])/(55-20)).toFixed(2))
        result.push(((10-value[1])/(10)).toFixed(2))
        result.push(((10-value[2])/(10)).toFixed(2))
        result.push(((100-value[3])/(100-10)).toFixed(2))
        result.push(((100-value[4])/(100-5)).toFixed(2))
        result.push(((value[5])/(1)).toFixed(2))
        result.push(((55-value[6])/(55)).toFixed(2))
        result.push(((75-value[7])/(75)).toFixed(2))
        result.push(((1000-value[8])/(1000)).toFixed(2))
        result.push(((550-value[9])/(550-200)).toFixed(2))
        result.push(((200-value[10])/(200)).toFixed(2))
        result.push(((value[11])/(10**value[11].toString().length)).toFixed(2))
        return(result)  
    }
    catch{return([
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0
      ])}
    
}

module.exports = WebNorm