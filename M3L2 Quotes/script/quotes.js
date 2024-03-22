'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

const _seeder = new seedGenerator();
let _quotes = _seeder.allQuotes;
_quotes = _quotes.filter ((item) => item.quote.toLowerCase().includes('love'))


function clickHandlerAllQ (e) {
    _quotes = _seeder.allQuotes;
    fillList();
}

function clickHandlerLoveQ (e) {
    _quotes = _seeder.allQuotes;
    _quotes = _quotes.filter ((item) => item.quote.toLowerCase().includes('love'))
    fillList();
}

const allQ = document.querySelector('#allQBtn');
const loveQ = document.querySelector('#loveQBtn');
allQ.addEventListener('click', clickHandlerAllQ);
loveQ.addEventListener('click', clickHandlerLoveQ);


function fillList()
{
    const _list = document.getElementById('list-of-items');

    while (_list.firstChild) {
        _list.removeChild(_list.firstChild);
    }

    for (const q of _quotes) {
        const div = document.createElement('div');
        div.classList.add('col-md-12', 'themed-grid-col');

        div.innerText = q.quote;
        _list.appendChild(div);
    }
}


