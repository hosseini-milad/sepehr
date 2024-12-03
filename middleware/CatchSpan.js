const axios = require('axios');
const fs = require("fs").promises;;
const {BATCH_SIZE,SERVER_IP,LOGGER_IP} = process.env

async function CatchSpan(logUrl){
    
    const logSpan = await fs.readFile(logUrl, 'utf8');
    const jsonSpan = JSON.parse(logSpan)
    axios.post(SERVER_IP+'/api/fetch/spanService-batch', jsonSpan)
      .then(response => {
        console.log('Log sent successfully: '+response.message);
      })
      .catch(error => {
        console.error('Error sending log:', error.message);
      })
    return("done")
}
module.exports = CatchSpan