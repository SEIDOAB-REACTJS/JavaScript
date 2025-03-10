'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/Events
//https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
//https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

//https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

//function that should be executed, could be an arrow function
function clickHandler (event)  {

  //needed for <a> tag prevent default, stops the link from acting as a <a href=...> acting as it should
  event.preventDefault();
  
  window.alert(`The ${event.currentTarget.nodeName} element has been clicked!`);
};

//The selector syntax below states that find all:
// find the first element with id myPets
const myList = document.querySelector('#myPets');
for (const item of myList.childNodes) {    
  item.addEventListener('click', clickHandler);
}

//The selector syntax below states that find all:
// li elements with an attribute data-row-id that are nested at some level within an element id myVehicles
let items = document.querySelectorAll('#myVehicles li[data-row-id]');
console.log(items);

items.forEach (i => i.addEventListener('click', clickHandler))

//The selector syntax below states that find all:
// a elements that are at some level nested within and li element with an attribute data-row-id 
// that are nested at some level within an element id myVehicles
items = document.querySelectorAll('#myFriends li[data-row-id] a');
console.log(items);

items.forEach (i => i.addEventListener('click', clickHandler))

