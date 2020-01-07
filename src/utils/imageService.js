import tokenService from './tokenService';

const BASE_URL = '/api/images/';

// Find all events in DB and return to calling function as JSON
function getAll() {
  return fetch(`${BASE_URL}`)
    .then(res => res.json());
}

// Send POST request to DB and return with Success or Failure JSON message
function create(url, category, name){
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
    ,
    body: JSON.stringify({
      url,
      category,
      name,
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