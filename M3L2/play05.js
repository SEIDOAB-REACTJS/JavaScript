'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';


let a = ['elephant', 'lion', 'leopard', 'rhino', 'buffalo'];
console.log(a); 
console.log(a.slice(2, a.length));


//insert an element at position 2
let a_shallow_copy = insert(a, 2, 'tiger');
console.log(a_shallow_copy);

//remove an element at position 2
a_shallow_copy = remove(a, 2);
console.log(a_shallow_copy);

//using slicing
function insert(a, idx, item) {

    //type safe parameters
    if (!Array.isArray(a)) throw new Error("insert has wrong type");
    if (!Number.isInteger(idx)) throw new Error("nsert has wrong type");
    if (typeof item !== 'string') throw new Error("insert has wrong type");

    let b = a.slice(0, idx);
    let c = a.slice(idx, a.length);

    return [...b, item, ...c];
}

//using slice
function remove(a, idx) {

    //type safe parameters
    if (!Array.isArray(a)) throw new Error("remove has wrong type");
    if (!Number.isInteger(idx)) throw new Error("remove has wrong type");

    //exercise remove one element from array a at position idx
    let b = a.slice (0, idx);
    let c = a.slice(idx+1, a.length);
    return [...b, ...c];
}

//using splice
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
a = ['elephant', 'lion', 'leopard', 'rhino', 'buffalo'];
a.splice (2)
console.log(a); //['elephant', 'lion']

a = ['elephant', 'lion', 'leopard', 'rhino', 'buffalo'];
a.splice (1, 2);
console.log(a); //['elephant', 'rhino', 'buffalo']

a = ['elephant', 'lion', 'leopard', 'rhino', 'buffalo'];
a.splice (1, 2, 'tiger')
console.log(a); //['elephant', 'tiger', 'rhino', 'buffalo']

a = ['elephant', 'lion', 'leopard', 'rhino', 'buffalo'];
let newAnimals = ['tiger', 'wolf', 'owl'];

a.splice (1, 0, ...newAnimals)
console.log(a); //['elephant', 'tiger', 'wolf', 'lion', 'leopard', 'rhino', 'buffalo']
