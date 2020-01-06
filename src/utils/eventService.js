import tokenService from './tokenService';

const BASE_URL = '/api/events/';

// Find all events in DB and return to calling function as JSON
function getAll() {
  const options = {
    method: 'GET',
    
  };
  return fetch(`${BASE_URL}`, options)
    .then(res => res.json());
}

// Send POST request to DB and return with Success or Failure JSON message

function create(name, url, date, location, details){
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
    ,
    body: JSON.stringify({
      name,
      url,
      date,
      location,
      details
    })
  };

  return fetch(`${BASE_URL}`, options).then(res => res.json());
}

// Send PUT request to DB and return with Updated event
function update() {

}

export default {
  getAll,
  create,
  update
};