'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

//The selector syntax below states that find all:
// find the first element with id myPets
const item = document.querySelector('#myPets');
console.log(item);

//The selector syntax below states that find all:
// li elements with an attribute data-row-id that are nested at some level within an element id myVehicles
let items = document.querySelectorAll('#myVehicles li[data-row-id]');
console.log(items);

//The selector syntax below states that find all:
// a elements that are at some level nested within and li element with an attribute data-row-id 
// that are nested at some level within an element id myVehicles
items = document.querySelectorAll('#myFriends li[data-row-id] a');
console.log(items);

