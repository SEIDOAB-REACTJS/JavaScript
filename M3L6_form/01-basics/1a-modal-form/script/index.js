//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

let modalOk = document.querySelector("#modalOk");

//to be able to manipulate modal in javascript, keyboard: false - ignore esc key
let softModal = document.querySelector("#softModal");
let softModalObj = new bootstrap.Modal(softModal, { keyboard: false })

modalOk.addEventListener('click', () => { 

  let modalRecipient = softModal.querySelector('.modal-body input')

  alert(`Message to ${modalRecipient.value}`);

  //close the modal with javascript
  softModalObj.hide();
})

softModal.addEventListener('show.bs.modal', function (event) {

  // Button that triggered the modal
  let button = event.relatedTarget

  // Update the modal's content.
  let recipientName = softModal.querySelector('#recipient-name')
  recipientName.value = button.getAttribute('data-bs-whatever');

  let modalTitle = softModal.querySelector('.modal-title')
  modalTitle.textContent = 'New message to ' + recipient
})

/* Exercise 
1. Write code that adds a li tag with text "Message to {recipient}: {Message} to the ul #modalClickedList every time the modal
   clicked with an Ok.
*/