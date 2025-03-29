'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

console.log("Hello from pets");

const _prot = {};
_prot.toString = function () {return `${this.name} is ${this.age} years old`}


function createPet(_seeder)
{
    const p = Object.create(_prot);
    p.name = _seeder.petName;
    p.age = randomNumber(1, 10);
    return p;
}

const _seeder = new seedGenerator();
const _pets = [];

for (let index = 0; index < 10; index++) {
    _pets.push(createPet(_seeder));    
}

const myList = document.getElementById('myPets');
for (const item of _pets) {
        
    const newPet = document.createElement('li');
    newPet.innerText = item.toString();
    myList.appendChild(newPet)
}

const endMsg = document.getElementById('endMsg');
endMsg.innerText = _seeder.latinParagraph.paragraph;

console.log(..._pets)