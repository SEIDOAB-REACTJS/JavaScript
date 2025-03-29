
'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

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
    if (index === 5)
    {
        v1.color = 'green';
    }
    _vehicles.push(v1);
}



for (const index in _vehicles) {
    console.log(index, _vehicles[index]);
}

const myList = document.getElementById('myList');
for (const item of _vehicles) {
    
    const newVehicle = document.createElement('li');
    newVehicle.innerText = item;
    myList.appendChild(newVehicle);

    console.log(item);
}






/* Exercises

1. use the seido-helper seedGenerator and createVehicle function from M3L1 25-vehicleExercise to create an array
   of 10 vehicles. 
2. Loop through the array and present each Vehicle using a prototype toString

*/