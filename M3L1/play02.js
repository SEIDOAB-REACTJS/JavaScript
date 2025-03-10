'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';


const _seeder = new seedGenerator();
let persons = [];
let count = 10;
while (count) 
{
    count--;

    //const p = {};
    //p.firsName = _seeder.firstName;
    const p = {firstName: _seeder.firstName, lastName: _seeder.lastName, latinSentence: _seeder.latinSentence};
    p.toString = () => `Hi, my name is ${p.firstName} ${p.lastName}. I like ${p.latinSentence}`;

    persons.push(p);
}

console.log(persons[0] + '');
console.log(persons.length);

console.log ('alternative 1')
persons.forEach(p => console.log (p +''));


console.log ('alternativ 2')
for (const p of persons) {
    console.log (p +'');
}

console.log ('alternative 3');
for (let index = 0; index < persons.length; index++) {
    console.log (persons[index] +'');
}



