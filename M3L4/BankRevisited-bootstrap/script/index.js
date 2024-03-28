'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';
import {Account, Bank} from './Bank.js';

const _seeder = new seedGenerator();
const bankID = document.querySelector('#bankID');
const acountList = document.querySelector('#accountList');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const myForm = document.querySelector('#whoAreYou');
const btnAddAccount = document.querySelector('#btnValidate');

//set EventHandler
btnNext.addEventListener('click', clickNext);
btnPrev.addEventListener('click', clickPrev);
myForm.addEventListener('submit', submitHandler);
btnAddAccount.addEventListener('click', submitHandler);

//Create accounts and bank
const baccounts = new Account().createRandomMany(_seeder, 25);
const bank1 = new Bank("Martins bank1", baccounts );

//list paging
let currentPage = 0;
const pageSize = 10;
const maxNrPages = Math.ceil(bank1.accounts.length/pageSize);


//Initial page presentation
bankID.innerHTML = bank1.toString();
removeAllChildNodes(acountList);
renderAccounts(0);


function renderAccounts(renderPage) {
    
    const pData = bank1.accounts.slice(pageSize*renderPage, pageSize*renderPage+pageSize);
    for (const acc of pData) {
        
        const div = document.createElement('div');
        div.classList.add("col-md-12", "themed-grid-col");
        div.innerText = acc.toString();

        acountList.appendChild(div);
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


function submitHandler(e) {
    if (!myForm.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      myForm.classList.add('was-validated')
    }
    else{
      
      e.preventDefault(); //prevenet the refresh of the oage after a Post
      
      //What you have to do on success
      const fname = document.querySelector('#whoAreYou #firstName').value;
      const lname = document.querySelector('#whoAreYou #lastName').value;
      const city = document.querySelector('#whoAreYou #city').value;
      const money = Number(document.querySelector('#whoAreYou #money').value);
      
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
  } 

