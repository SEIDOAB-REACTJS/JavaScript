'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';
import {readIngredientsAsync} from './Ingredients.js';



//As we read async we have to package the main within (async () => {....})();
(async () => {
const itemList = document.querySelector('#itemList');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

//set EventHandler
btnNext.addEventListener('click', clickNext);
btnPrev.addEventListener('click', clickPrev);

//Get the async data
const ingredients = await readIngredientsAsync();

//list paging
let currentPage = 0;
const pageSize = 2;
const maxNrPages = Math.ceil(ingredients.length/pageSize);


//Initial page presentation
removeAllChildNodes(itemList);
renderAccounts(0);



function renderAccounts(renderPage) {
    
    const pData = ingredients.slice(pageSize*renderPage, pageSize*renderPage+pageSize);
    for (const item of pData) {
        
        const div = document.createElement('div');
        div.classList.add("col-md-12", "themed-grid-col");
        div.innerText = `id:${item.id} item:${item.item}`;

        itemList.appendChild(div);
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

    removeAllChildNodes(itemList);
    renderAccounts(currentPage)
};

function clickPrev (event)  {
    currentPage--;
    if (currentPage < 0) currentPage = 0;

    removeAllChildNodes(itemList);
    renderAccounts(currentPage)
};

})();


/* Exercise
1. Sort the account list according to ascending account total. 
2. Before the list add text to show the number of accounts with account total less that 10000kr
*/