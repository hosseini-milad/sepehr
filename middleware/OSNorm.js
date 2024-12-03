//const {WEBHOSTS} = process.env
function OSNorm(value){
    var result=[]
    try{
        result.push((value[0]/255).toFixed(2))
        result.push((value[1]/4).toFixed(2))
        result.push((value[2]/5000).toFixed(2))
        result.push(((6000-value[3])/(6000-2000)).toFixed(2))
        result.push(((value[4])/(100)).toFixed(2))
        result.push(((value[5])/(100)).toFixed(2))
        result.push(((value[6])/5).toFixed(2))
        result.push(((value[7])/2).toFixed(2))
        
        return(result)  
    }
    catch{return([
        0, 0, 0, 0, 0,
        0, 0, 0,
      ])}
    
}

module.exports = OSNorm