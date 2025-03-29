'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../SeidoHelpers/seido-helpers.js';

const _seeder = new seedGenerator();
const _quotes = _seeder.allQuotes;

const _pageSize = 5;
const _MaxNrpages = Math.ceil(_quotes.length/_pageSize);

const _pageNr = 7;
let page = _quotes.slice(_pageNr*_pageSize, _pageNr*_pageSize + _pageSize);
console.log(...page);


//console.log(_nrpages, _quotes);
