'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';
const _seeder = new seedGenerator();

const pageSize = 5;
const maxPageNr =  Math.ceil(_seeder.allQuotes.length/pageSize);
let currentPageNr = 0;

let quoteList =  _seeder.allQuotes;

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

    currentPageNr = 0;
    quoteList =  _seeder.allQuotes;
}

function clickHandlerLoveQ (e) {

    currentPageNr = 0;

    //filter out all love quotes from _seeder.allQuote
}

function clickHandlerClear (e) {
}


//Paging
function clickHandlerNext (e)
{
    if (currentPageNr < maxPageNr-1) {
        currentPageNr++;
    }
    fillList()
}

function clickHandlerPrev (e)
{
    if (currentPageNr > 0) {
        currentPageNr--;
    }
    fillList()
}

//Helpers
function fillList()
{
    //Clear first
    clearList();

    //slice out the quote page
    let quotePage = quoteList.slice(currentPageNr * pageSize, currentPageNr * pageSize + pageSize);

    //creat a row for every quote and append it to _list
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
//1. Finish the code in the three clickHandlers
//2. Finish the code in fillList()
