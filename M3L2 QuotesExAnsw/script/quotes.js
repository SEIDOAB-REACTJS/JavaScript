'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';
const _seeder = new seedGenerator();

let quotesInList = _seeder.allQuotes;

const pageSize = 5;
const maxPageNr =  Math.ceil(_seeder.allQuotes.length/pageSize);
let currentPageNr = 0;


//Elements in DOM
const _list = document.querySelector('#list-of-items');
const clearBtn = document.querySelector('#clearBtn');
const allQ = document.querySelector('#allQBtn');
const loveQ = document.querySelector('#loveQBtn');

const btnPrev = document.querySelector('#prevBtn');
const btnNext = document.querySelector('#nextBtn');


//Add Click handlers
clearBtn.addEventListener('click', clickHandlerClear);
allQ.addEventListener('click', clickHandlerAllQ);
loveQ.addEventListener('click', clickHandlerLoveQ);

btnPrev.addEventListener("click", clickHandlerPrev);
btnNext.addEventListener("click", clickHandlerNext);

function clickHandlerAllQ (e) {
    let _quotes = quotesInList.slice(currentPageNr * pageSize, currentPageNr * pageSize + pageSize);
    fillList(_quotes);
}

function clickHandlerLoveQ (e) {

    //filter out all love quotes from _seeder.allQuote
    let _quotes = quotesInList.filter ((item) => item.quote.toLowerCase().includes('love'));
    fillList(_quotes);
}

function clickHandlerClear (e) {
    clearList();
}


//Paging
function clickHandlerNext (e)
{
    if (currentPageNr < maxPageNr-1) {
        currentPageNr++;
    }
    clickHandlerAllQ();
}

function clickHandlerPrev (e)
{
    if (currentPageNr > 0) {
        currentPageNr--;
    }
    clickHandlerAllQ();
}

//Helpers
function fillList(quotes)
{
    //Clear first
    clearList();

    //creat a row for every quote and append it to _list
    for (const q of quotes) {

        const div = createRow();
        div.innerText = q.quote;
        _list.appendChild(div);
    }
}

function clearList()
{
    while (_list.firstChild) {
        _list.removeChild(_list.firstChild);
    }
}

function createRow()
{
    const div = document.createElement('div');
    div.classList.add('col-md-12', 'themed-grid-col');
    return div;
}


//Exercises
//1. Add click handers to btn and aref. Click on the buttons and see that the alert windows opens up.
//2. comment out e.preventDefault(); in the clickHandler and see the difference in the click behaviour.
//     - what is the difference? 

