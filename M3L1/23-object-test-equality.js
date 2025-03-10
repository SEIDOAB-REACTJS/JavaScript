'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

console.group('TESTING FOR Object EQUALITY');
// non-strict equality operator: == != test for eqality after type conversions and returns a Boolean result. 
// Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality

// strict equality operator: === and !== the strict equality operator always considers operands of different types to be different.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// almost ALWAYS use === and !== 

//Testing object equality - always assumed by reference
let name1 = {firstName: "Jane", lastName: "Doe"};
let name2 = {firstName: "Jane", lastName: "Doe"};

let name3 = name2;  // refer to the same object

// always assume reference equality
console.log('referential equality');
console.log (name1 == name2);    //false
console.log (name1 === name2);   //false

console.log (name2 == name3);    //true
console.log (name2 === name3);   //true

// you need to implement yourself value equality
console.log('value equality');
console.log (isEqual1(name1, name2)); 
console.log (isEqual1(name2, name3));

function isEqual1(obj1, obj2) {
   return obj1.firstName == obj2.firstName && obj1.lastName == obj2.lastName;
}





//alternatives is to use js libraries such as, 
// https://lodash.com/docs/4.17.15#isEqual
// https://www.npmjs.com/package/fast-equals

