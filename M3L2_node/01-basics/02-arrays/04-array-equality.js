'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual, isEqualArray} from '../../../SeidoHelpers/seido-helpers.js';

//Checking array equality you have to understand if content is of value type or objects
function _isEqualArrayVal(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    // These objects are null, undeclared, or non-array objects
    return false;
  }
  else if (arrayA === arrayB) {
    // Shortcut: they're two references pointing to the same array
    return true;
  }
  else if (arrayA.length !== arrayB.length) {
    // They can't match if they have a different item count
    return false;
  }
  else {
    // Time to look closer at each item
    for (let i = 0; i < arrayA.length; ++i) {

      // We require items to have the same content and be the same type,
      if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
  }
}

const fruitNamesA = ['apple', 'kumquat', 'grapefruit', 'kiwi'];
const fruitNamesB = ['apple', 'kumquat', 'grapefruit', 'kiwi'];

console.log(_isEqualArrayVal(fruitNamesA, fruitNamesB)); // true
console.log(_isEqualArrayVal(fruitNamesA.sort(), fruitNamesB.sort())); // true


function _isEqualArrayObj(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    // These objects are null, undeclared, or non-array objects
    return false;
  }
  else if (arrayA === arrayB) {
    // Shortcut: they're two references pointing to the same array
    return true;
  }
  else if (arrayA.length !== arrayB.length) {
    // They can't match if they have a different item count
    return false;
  }
  else {
    // Time to look closer at each item
    for (let i = 0; i < arrayA.length; ++i) {

      // We require items to have the same content and be the same type,
      if (!isEqual(arrayA[i], arrayB[i])) return false;
    }
    return true;
  }
}

const fruitNamesAObj = [{fruit:'apple'}, {fruit:'kumquat'}, {fruit:'grapefruit'}, {fruit:'kiwi'}];
const fruitNamesBObj = [{fruit:'apple'}, {fruit:'kumquat'}, {fruit:'grapefruit'}, {fruit:'kiwi'}];

console.log(_isEqualArrayVal(fruitNamesAObj, fruitNamesBObj)); // false
console.log(_isEqualArrayObj(fruitNamesAObj, fruitNamesBObj)); // true


//Testing Equality using JSON will always work
//But it is not very efficient
function isEqualJson(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log('JSON equality');
console.log(isEqualJson(fruitNamesA, fruitNamesB)); //true
console.log(isEqualJson(fruitNamesAObj, fruitNamesBObj)); //true

//alternatives is to use js libraries such as, 
// https://lodash.com/docs/4.17.15#isEqual
// https://www.npmjs.com/package/fast-equals