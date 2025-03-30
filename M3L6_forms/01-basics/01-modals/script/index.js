//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

let modalOk = document.querySelector("#modalOk");

//to be able to manipulate modal in javascript, keyboard: false - ignore esc key
let softModal = new bootstrap.Modal(document.querySelector("#softModal"), { keyboard: false })

modalOk.addEventListener('click', () => { 

    alert("ok, lets take action on ok");

    //close the modal with javascript
    softModal.hide();
})



/* Exercise 
1. Write code that adds a li tag with text "Modal is clicked ok" to the ul #modalClickedList every time the modal
   clicked with an Ok.
*/