'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';
 
const _address = {country: `Sweden`, phoneNr:["070 123456", "010 654321"]};
const _friend1 = Object.create(_address);
const _friend2 = Object.create(_address);
_friend1.name = `Sam`;
_friend2.name = `Frodo`;

console.log(_address);

console.log(_friend1);
console.log(_friend1.country, ..._friend1.phoneNr);
console.log(_friend2);
console.log(_friend2.country, ..._friend2.phoneNr);

_address.country=`Denmark`;
console.log(_friend1);
console.log(_friend1.country, ..._friend1.phoneNr);
console.log(_friend2);
console.log(_friend2.country, ..._friend2.phoneNr);

_friend2.country=`Finland`;
_friend2.phoneNr[0] = "000 00000";
console.log(_friend1);
console.log(_friend1.country, ..._friend1.phoneNr);
console.log(_friend2);
console.log(_friend2.country, ..._friend2.phoneNr);

_friend1.country=`Sweden`;
_friend1.phoneNr = ["000 00000"];
console.log(_friend1);
console.log(_friend1.country, ..._friend1.phoneNr);
console.log(_friend2);
console.log(_friend2.country, ..._friend2.phoneNr);

