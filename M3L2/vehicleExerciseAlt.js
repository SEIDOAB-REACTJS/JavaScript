'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//to import ES6 modules you have to have a package.json file in you directory.
//in terminal type npm init -y
//in the created package.json add on first row
//"type": "module",

function createVehicle(_seeder) {
    const vehicle = {};
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

//assign the function to a prototype which then becomes valid for all objects with the prototype
let proto = {
    toString: function () { return `The vehicle ${this.regNumber} is ${this.age} years old and owned by ${this.owner}` }
}

/* You will need to update your seedGenerator for this */
const vehicles = _seeder.toArray(10, createVehicle, proto);
for (const v of vehicles2) {
    console.log(''+v);
}

/* Exercises
1. Make a deepCopy of vehicles, dc_vehicles
2. Sort dc_vehicles according to age and printout
3. Extract the oldest dc_vehicles into a separate array

4. Use above structure and create a list of 1000 friends, each friend should have a firstname, lastname, an email address,
   a favorite quote and a favorite latin sentence 

*/