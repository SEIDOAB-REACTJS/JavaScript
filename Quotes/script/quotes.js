'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';




const _seeder = new seedGenerator();
const _quotes = _seeder.allQuotes;
const _loveQuotes = _quotes.filter ((item) => item.quote.toLowerCase().includes('love'))

const _list = document.getElementById('list-of-items');
for (const q of _loveQuotes) {
    const div = document.createElement('div');
    div.classList.add('col-md-10', 'themed-grid-col');

    div.innerText = q.quote;
    _list.appendChild(div);
}
console.log('Hello');