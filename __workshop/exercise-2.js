// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require('request-promise');

const getIssPosition = async () => {
  try {
    let response = await request(`http://api.open-notify.org/iss-now.json`);
    let issLocation = JSON.parse(response);
    return {
      lat: issLocation.iss_position.latitude,
      lng: issLocation.iss_position.longitude,
    };
  } catch (err) {
    console.log('Error: ', err);
  }
};

getIssPosition().then(res => console.log(res));
