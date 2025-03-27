//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

const groupName = document.querySelector('#groupName');
const genre = document.querySelector('#genre');
const established = document.querySelector('#established');

//Start the server by opening a terminal in /case-study-server and type node simple-json.js
const urlGetPost = 'http://localhost:3000/api/download';      //used for get and post

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
      console.log(`Failed to recieved data from server: ${res.status}`);
      alert(`Failed to recieved data from server: ${res.status}`);
    }
  }
  catch (err) {

    //typcially you would log an error instead
    console.log(`Failed to recieved data from server: ${err.message}`);
    alert(`Failed to recieved data from server: ${err.message}`);
  }
}

(async () => {

    //read a url, get an object convert it to an object from url
    let data = await myFetch(urlGetPost);

    console.log("Data Recieved successfully");
    console.log(data);

    //set the values
    [groupName.value, genre.value, established.value] = [data.name, data.genre, data.established];

})();
