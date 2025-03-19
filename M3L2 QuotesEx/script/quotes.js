'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';
const _seeder = new seedGenerator();

//Elements in DOM
const _list = document.querySelector('#list-of-items');
const clearBtn = document.querySelector('#clearBtn');
const allQ = document.querySelector('#allQBtn');
const loveQ = document.querySelector('#loveQBtn');

//Add Click handlers
clearBtn.addEventListener('click', clickHandlerClear);
allQ.addEventListener('click', clickHandlerAllQ);
loveQ.addEventListener('click', clickHandlerLoveQ);

function clickHandlerAllQ (e) {

    //fill the list with _seeder.allQuotes
    let _quotes = _seeder.allQuotes;
}

function clickHandlerLoveQ (e) {

    //filter out all love quotes from _seeder.allQuote
}

function clickHandlerClear (e) {

    //Write code to clear the list
}

//Helpers
function fillList(quotes)
{
    //Clear List

    //for every quote 
    // - create a row, set innerText, and append it to _list
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

