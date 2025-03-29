'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
const items = document.querySelectorAll('.mystyles');
const item = document.querySelector('.mystyles');

console.log(`items: `, items);
console.log(`item: `, item);

//traversing with .ForEach
items.forEach(i => {
  console.log(i.innerText);
});

//traversion with for..of
for (const i of items) {
  console.log(i.innerHTML); 
}
