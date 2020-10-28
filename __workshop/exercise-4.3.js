const request = require('request-promise');


let options = {
  uri: 'https://geek-jokes.sameerkumar.website/api?format=json',
  
  headers: {
      "Accept": "application/json"
  },
  json: true // Automatically parses the JSON string in the response
};
const getGeekJoke = async () => {
  // ha hahahh
  try {
    let response = await request(options)
    return response.joke
  } catch (error) {
    return error
  }

};

getGeekJoke().then(res => console.log(res))
module.exports = { getGeekJoke };
