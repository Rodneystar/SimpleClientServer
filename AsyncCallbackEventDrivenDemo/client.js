const http = require('http');

const url = 'http://localhost/payload.js'
const port = '80'
var data = 'initialised';

function getData() {

  http.get(url, (response) => {
    data = response.statusCode + ' ' + response.statusMessage;
  });

  console.log('data = ',data);
  setTimeout(function() {
    console.log('data after 0.005 second = ', data);
  }, 5);
}

getData();
