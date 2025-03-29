'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

const blankObject = {};
const objectWithProperty = {price: 47.99};

if (typeof objectWithProperty === 'object' && Object.keys(blankObject).length === 0) {
  // This code runs because there's nothing in this object
  console.log('blankObject is empty')
}

if (typeof objectWithProperty === 'object' && Object.keys(objectWithProperty).length === 0) {
  // This code won't run, because objectWithProperty isn't empty
  console.log('objectWithProperty is empty')
}
