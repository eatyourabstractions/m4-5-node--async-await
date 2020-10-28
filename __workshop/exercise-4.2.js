const request = require('request-promise');


let options = {
  uri: 'https://api.tronalddump.io/random/quote',
  
  headers: {
      "Accept": "application/json"
  },
  json: true // Automatically parses the JSON string in the response
};
const getTronaldDumpQuote = async () => {
  // write write write
  try {
    let response = await request(options)
    return response.value
  } catch (error) {
    return error
  }
};

getTronaldDumpQuote().then(res => console.log(res))
module.exports = { getTronaldDumpQuote };
