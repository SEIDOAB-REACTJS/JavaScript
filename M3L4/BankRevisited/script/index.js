'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';
import {Account, Bank} from './Bank.js';

//Start the server by opening a terminal in /case-study-server and type node simple-with-form.js
const url = 'http://localhost:3000/api/upload';

const _seeder = new seedGenerator();
const bankID = document.querySelector('#bankID');
const acountList = document.querySelector('#accountList');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const myForm = document.getElementById('whoAreYou');


//set EventHandler
btnNext.addEventListener('click', clickNext);
btnPrev.addEventListener('click', clickPrev);
myForm.addEventListener('submit', submitHandler);

//Create accounts and bank
const baccounts = new Account().createRandomMany(_seeder, 25);
const bank1 = new Bank("Martins bank1", baccounts );

//list paging
let currentPage = 0;
const pageSize = 10;
const maxNrPages = Math.ceil(baccounts.length/pageSize);


//Initial page presentation
bankID.innerHTML = bank1.toString();
removeAllChildNodes(acountList);
renderAccounts(0);


function renderAccounts(renderPage) {
    
    const pData = bank1.accounts.slice(pageSize*renderPage, pageSize*renderPage+pageSize);
    for (const acc of pData) {
        
        const li = document.createElement('li');
        li.innerText = acc.toString();

        acountList.appendChild(li);
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clickNext (event)  {
    currentPage++;
    if (currentPage > maxNrPages-1) currentPage = maxNrPages-1;

    removeAllChildNodes(acountList);
    renderAccounts(currentPage)
};

function clickPrev (event)  {
    currentPage--;
    if (currentPage < 0) currentPage = 0;

    removeAllChildNodes(acountList);
    renderAccounts(currentPage)
};


function submitHandler(e)
{
  e.preventDefault(); //prevenet the refresh of the oage after a Post

  const formData = new FormData(myForm);

  const fname = formData.get('firstName');
  const lname = formData.get('lastName');
  const city = formData.get('city');
  const money = Number(formData.get('money'));
  
  const accountNr = `${randomNumber(100,1000)}-${randomNumber(100,1000)}-${randomNumber(100,1000)}`;
  
  //create the account
  const a = new Account({accountNr, accountTotal: money, firstName: fname, lastName: lname, city});

  //add it first in the list
  bank1.accounts = [a, ...bank1.accounts];

  //Update the bank header
  bankID.innerHTML = bank1.toString();
  removeAllChildNodes(acountList);
  renderAccounts(0);
}


/* Exercise
1. Looking into 3-from-post example and Write code that posts the form data to server case-study-server/simple-with-form.js
2. verify that the server has recieved the data
3. Modify html and js to make the form input for new customer in a modal window
*/