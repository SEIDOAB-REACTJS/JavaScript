'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

const _seeder = new seedGenerator();
let _quotes = _seeder.allQuotes;
//_quotes = _quotes.filter ((item) => item.quote.toLowerCase().includes('love'))

const _list = document.getElementById('list-of-items');
for (const q of _quotes) {
    const div = document.createElement('div');
    div.classList.add('col-md-12', 'themed-grid-col');

    div.innerText = q.quote;
    _list.appendChild(div);
}
console.log('Hello');