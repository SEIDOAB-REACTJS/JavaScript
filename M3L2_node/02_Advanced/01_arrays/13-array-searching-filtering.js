'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

console.group('Searching with exact equality');
const animals = ['dog', 'cat', 'seal', 'elephant', 'walrus', 'lion'];
console.log(`Elephant is at ${animals.indexOf('elephant')}`); // 3
console.log(`Walrus is at ${animals.lastIndexOf('walrus')}`); // 4
console.log(`Array includes 'dog': ${animals.includes('dog')}`); // true
console.groupEnd();

console.group('Searching with filter criteria');
const nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];

// Find the first value over 10.
const bigNum = nums.find(element => element > 10);
console.log(`First >10 number is ${bigNum}`); // 19 (the first match)

// Find the first value over 10.
const bigNums = nums.filter(element => element > 10);
console.log(`Array >10 number is ${bigNums}`); // all matches


const bigNumIndex = nums.findIndex(element => element > 100);
console.log(`First >10 number is at index ${bigNumIndex}`); // 4
console.groupEnd();



const _seeder = new seedGenerator();
const _quotes = _seeder.allQuotes;

const _loveQuotes = _quotes.filter ((item) => {return item.quote.toLowerCase().includes('love')})
console.log(_loveQuotes);

