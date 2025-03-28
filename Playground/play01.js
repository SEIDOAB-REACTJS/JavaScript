'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';

let a = 5;
console.log (a + 8);

a = 'Hello';
console.log (a + 8);

a = {};
a.hello = 'Good Morning';
a.name = 'Martin';
a.greeting = 'Have a woulderful day'
console.log (a);

console.log(a.age);

a.name = null;
console.log(a.name);

let b = undefined;
console.log (b);


b = "100" + (5 + 8) + true;
console.log(b, typeof b);
