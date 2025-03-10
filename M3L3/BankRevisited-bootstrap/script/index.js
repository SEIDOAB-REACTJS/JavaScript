'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';
import {Account, Bank} from './Bank.js';

const _seeder = new seedGenerator();
const bankID = document.querySelector('#bankID');
const acountList = document.querySelector('#accountList');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

//set EventHandler
btnNext.addEventListener('click', clickNext);
btnPrev.addEventListener('click', clickPrev);

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
    
    const pData = baccounts.slice(pageSize*renderPage, pageSize*renderPage+pageSize);
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


/* Exercise
1. Sort the account list according to ascending account total. 
2. Before the list add text to show the number of accounts with account total less that 10000kr
*/