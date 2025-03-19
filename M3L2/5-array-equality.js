'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual, isEqualArray} from '../SeidoHelpers/seido-helpers.js';

function _isEqualArray(arrayA, arrayB) {
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
      // but you could use loosely typed equality depending on your task
      if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
  }
}

function isEqual2(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const fruitNamesA = ['apple', 'kumquat', 'grapefruit', 'kiwi'];
const fruitNamesB = ['apple', 'kumquat', 'grapefruit', 'kiwi'];
const fruitNamesC = ['avocado', 'squash', 'red pepper', 'cucumber'];

console.log(isEqual2(fruitNamesA, fruitNamesB)); //true
console.log(_isEqualArray(fruitNamesA, fruitNamesB)); // true
console.log(_isEqualArray(fruitNamesA, fruitNamesC)); // false
console.log(_isEqualArray(fruitNamesA.sort(), fruitNamesB.sort())); // true


//array or objects, you will have to choose if you want value or reference equality
//for value equality use seido helpers isEqual()
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
      // but you could use loosely typed equality depending on your task
      if (!isEqual(arrayA[i], arrayB[i])) return false;
    }
    return true;
  }
}

const fruitNamesAObj = [{fruit:'apple'}, {fruit:'kumquat'}, {fruit:'grapefruit'}, {fruit:'kiwi'}];
const fruitNamesBObj = [{fruit:'apple'}, {fruit:'kumquat'}, {fruit:'grapefruit'}, {fruit:'kiwi'}];

console.log(_isEqualArray(fruitNamesAObj, fruitNamesBObj)); // false
console.log(_isEqualArrayObj(fruitNamesAObj, fruitNamesBObj)); // true