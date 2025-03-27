
'use strict'; 

//https://developer.mozilla.org/en-US/docs/Web/API/FormData
const myForm = document.querySelector("#newBook");

//Start the server by opening a terminal in /case-study-server and type node simple-with-form.js
const url = 'http://localhost:3000/api/upload';

myForm.addEventListener('submit', async event => {
  event.preventDefault();

  //Create the key/value pairs used in the form
  const formData = new FormData(myForm);

  try {
    //send the data using post and await the reply
    const response = await fetch(url, {
      method: 'post',
      body: formData
    });
    const result = await response.json();

    if (response.ok) {
      alert("Thank you for submitting the information. It has been recieved");
    }
    else {
      alert("Transmission error");
    }
    console.log(result);
  }
  catch {
    alert("Transmission error");
  }
});
