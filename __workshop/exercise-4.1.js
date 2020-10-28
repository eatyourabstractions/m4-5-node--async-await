const request = require("request-promise");

// getDadJoke
let options = {
    uri: 'https://icanhazdadjoke.com/',
    
    headers: {
        "Accept": "application/json"
    },
    json: true // Automatically parses the JSON string in the response
};

const getDadJoke = async () =>{
    try {
        let response = await request(options)
        return response.joke
    } catch (error) {
        return error
    }
}

// 4.1
 getDadJoke().then((data) => console.log(data));
 module.exports = { getDadJoke };
