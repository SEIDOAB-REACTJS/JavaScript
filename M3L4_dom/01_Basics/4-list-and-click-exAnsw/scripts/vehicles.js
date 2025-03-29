
'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../../SeidoHelpers/seido-helpers.js';

const _prot = {color: "blue" };
_prot.toString = function () {return `vehicle ${this.regNumber} is a ${this.color} ${this.make} owned by ${this.owner}`};

function createVehicle(_seeder) {
    const vehicle = Object.create(_prot); 

    vehicle.regNumber = `${_seeder.fromString("NMN, ABC, KLW, SVA, PLU, BCX, PKH, UTO")} ${randomNumber(100, 999)}`;
    vehicle.make = _seeder.fromString("Volvo, BMW, Audi");
    vehicle.model = _seeder.fromString("XC70, XC90, i300, A4");
    vehicle.age = randomNumber(1, 20);

    const fn = _seeder.firstName;
    const ln = _seeder.lastName;
    vehicle.owner = `${fn} ${ln}`;
    vehicle.owner_email = _seeder.email(fn, ln);

    return vehicle;
}

const _seeder = new seedGenerator();

const _vehicles = [];
for (let index = 0; index < 10; index++) {
    
    const v1 = createVehicle(_seeder);
    _vehicles.push(v1);
}

for (const item of _vehicles) {
    console.log(item);
}

function clickHandler (event)  {

    //needed for <a> tag prevent default, stops the link from acting as a <a href=...> acting as it should
    event.preventDefault();
    
    window.alert(`${event.currentTarget.innerText} was clicked!`);
  };


const myList = document.getElementById('myList');
for (const item of _vehicles) {
    
    const newVehicle = document.createElement('li');
    newVehicle.innerText = item;
    newVehicle.addEventListener("click", clickHandler);

    myList.appendChild(newVehicle);
}


/* Exercises
1. Add _vehicles as li tags under myList so they present themselves
2. Add a clickHandler to each li tag so the alert box shows what vehile is clicked
*/