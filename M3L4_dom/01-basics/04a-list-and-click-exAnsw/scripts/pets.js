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

function clickHandler (event)  {

    //needed for <a> tag prevent default, stops the link from acting as a <a href=...> acting as it should
    event.preventDefault();
    
    window.alert(`${event.currentTarget.innerText} was clicked!`);
  };

const myList = document.getElementById('myPets');
for (const item of _pets) {
        
    const newPet = document.createElement('li');
    newPet.innerText = item.toString();
    newPet.addEventListener("click", clickHandler);    

    myList.appendChild(newPet)
}

const endMsg = document.getElementById('endMsg');
endMsg.innerText = _seeder.latinParagraph.paragraph;


/* Exercises
1. Add _pets as li tags under myPets so they present themselves
2. Add a clickHandler to each li tag so the alert box shows what pet is clicked
3. Add a latis paragraph using, _seeder.latinParagraph.paragraph; to p-tag endMsg
*/