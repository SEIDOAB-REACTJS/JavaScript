'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

const _seeder = new seedGenerator();
let _quotes = _seeder.allQuotes;
//_quotes = _quotes.filter ((item) => item.quote.toLowerCase().includes('love'))

//Assign a unique id to a quote
_quotes.forEach(q => q.id = uniqueId());

const _list = document.getElementById('list-of-items');
for (const q of _quotes) {

    const li = document.createElement('li');

    //Note, this will be converted in the tag as data-item-id
    li.dataset.itemId = q.id;

    const a = document.createElement('a');
    a.innerText = q.quote;
    a.href = `./page1.html?id=${q.id}`;

    li.appendChild(a);
    _list.appendChild(li);
}
