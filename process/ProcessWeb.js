const { default: axios } = require("axios");

async function ProcessWeb(logStack,BATCH_SIZE){
    if(logStack.length>=BATCH_SIZE){
        axios.post(SERVER_IP+'/api/fetch/webService-batch', logStack)
        .then(response => {
          return(1)
        })
        .catch(error => {
          console.error('Error sending log:', error.message);
        });}
}
module.exports = ProcessWeb