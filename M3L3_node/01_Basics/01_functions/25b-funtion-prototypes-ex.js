'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

function Vehicle() {

    this.regNumber = undefined;
    this.make = undefined;
    this.model = undefined;
    this.age = undefined;

    this.owner = undefined;
    this.owner_email = undefined;
}

Vehicle.prototype = {

    toString: function () { return `The vehicle ${this.regNumber} is ${this.age} years old and owned by ${this.owner}` },

    createRandom: function () {

        const _sgen = new seedGenerator();
        const v = new Vehicle();

        v.regNumber = `${_sgen.fromString("NMN, ABC, KLW, SVA, PLU, BCX, PKH, UTO")} ${randomNumber(100, 999)}`;
        v.make = _sgen.fromString("Volvo, BMW, Audi");
        v.model = _sgen.fromString("XC70, XC90, i300, A4");
        v.age = randomNumber(1, 20);
    
        const fn = _sgen.firstName;
        const ln = _sgen.lastName;
        v.owner = `${fn} ${ln}`;
        v.owner_email = _sgen.email(fn, ln);

        return v;
    },

    createRandomMany: function (nrOfItems) {

        const _sgen = new seedGenerator();
        return _sgen.toArray(nrOfItems, this.createRandom);
    }
};


const v1 = new Vehicle();
console.log (v1);

const v2 = new Vehicle().createRandom();
console.log (v2);

const vehicles = new Vehicle().createRandomMany(10);
for (const v of vehicles) {
    console.log(''+v);
}


/* Exercises
1. Make a deepCopy of vehicles, dc_vehicles
2. Sort dc_vehicles according to age and printout
3. Extract the oldest dc_vehicles into a separate array

4. Use above structure and create a list of 1000 friends, each friend should have a firstname, lastname, an email address,
   a favorite quote and a favorite latin sentence 

*/