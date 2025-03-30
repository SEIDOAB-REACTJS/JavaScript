'use strict';
//import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';

//reference copy
let a = ['apple', 'banana', 'orange', 'mango'];
let b = a;
b[0] = 'nuts';

console.log(a);
console.log(b);

//shallow copy
a = ['apple', 'banana', 'orange', 'mango'];
let c = [...a];
c[0] = 'nuts';

console.log(a);
console.log(c);

//deep copy
a = [{fruit:'apple'}, 'banana', 'orange', 'mango'];
let d = [...a];

d[3] = 'passion';
d[0].fruit = "pear";
console.log(a[0], a);
console.log(d[0], d);

a = [{fruit:'apple'}, 'banana', 'orange', 'mango'];

//simpler way to make deep copy that works at all levels
let tmp = JSON.stringify(a)
let e = JSON.parse(tmp);

e[3] = 'passion';
e[0].fruit = "pear";

console.log(a[0], a);
console.log(e[0], e);