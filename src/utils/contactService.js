import tokenService from './tokenService';

const BASE_URL = '/api/contact/';

// Send POST request with email to DB and return with Success or Failure JSON message
function sendEmail(name, email, subject, message){
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
      email,
      subject,
      message
    })
  };

  return fetch(`${BASE_URL}`, options).then(res => res.json());
}

export default {
  sendEmail
};