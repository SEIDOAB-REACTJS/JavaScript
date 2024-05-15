'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';


let a = ['elephant', 'lion', 'leopard', 'rhino', 'buffalo'];
console.log(a); 
console.log(a.slice(2, a.length));


//insert an element at position 2
let a_shallow_copy = insert(a, 2, 'tiger');
console.log(a_shallow_copy);


//using slicing
function insert(a, idx, item) {

    //type safe parameters
    if (!Array.isArray(a)) throw new Error("insert has wrong type");
    if (!Number.isInteger(idx)) throw new Error("nsert has wrong type");
    if (typeof item !== 'string') throw new Error("nsert has wrong type");

    let b = a.slice(0, idx);
    let c = a.slice(idx, a.length);

    return [...b, item, ...c];
}

//using slice
function remove(a, idx) {

    //type safe parameters
    if (!Array.isArray(a)) throw new Error("insert has wrong type");
    if (!Number.isInteger(idx)) throw new Error("nsert has wrong type");

    //exercise remove one element from array a at position idx

}

//using splice
