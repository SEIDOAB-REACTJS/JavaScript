
//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/FormData

const formValidate = document.querySelector('#formValidate');
const groupName = document.querySelector('#groupName');
const genre = document.querySelector('#genre');
const established = document.querySelector('#established');

//Start the server by opening a terminal in /case-study-server and type node simple-json.js
const url = 'http://localhost:3000/api/upload';

async function myFetch(url, method = null, body = null) {
  try {

    console.log("Request initiate");
    
    let res = await fetch(url, {
      method: method ?? 'GET',
      headers: { 'content-type': 'application/json' },
      body: body ? JSON.stringify(body) : null
    });

    if (res.ok) {

      console.log("Request successful");

      //get the data from server
      let data = await res.json();
      return data;
    }
    else {

      //typcially you would log an error instead
      console.log(`Failed to recieved data from server: ${res.status} - ${res.statusText}`);
      alert(`Failed to recieved data from server: ${res.status} - ${res.statusText}`);
    }
  }
  catch (err) {

    //typcially you would log an error instead
    console.log(`Failed to recieved data from server: ${err.message}`);
    alert(`Failed to recieved data from server: ${err.message}`);
  }
}

formValidate.addEventListener('submit', async event => {
  event.preventDefault();

  //this allows me to check all values individually
  let [gn, g, e] = [groupName.value, genre.value, established.value];

  let data = {name: gn, genre: g, established: e};
  let result = await myFetch(url, "POST", data);

});


