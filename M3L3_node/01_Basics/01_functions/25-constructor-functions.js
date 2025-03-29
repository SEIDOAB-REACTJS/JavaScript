'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

//create person as an object
console.group('create person as an object');
const person = {
    firstName: 'Lisa',
    lastName: 'Stanecki',
    birthDate: new Date(1996, 5, 12),
    address: {
        street: 'Worcestire Blvd 412',
        country: 'Australia', 
        city: 'Sydney'
    }
}

console.log(person);
console.groupEnd();

console.group('Using constructor function  to create an object');
function Person1 ()
{
    this.greetings = function () {console.log(`hello ${this.firstName}`)};

    //constructor
    this.firstName = 'Lisa';
    this.lastName = 'Stanecki';
    this.birthDate = new Date(1996, 5, 12);
    this.address = {
        street: 'Worcestire Blvd 412',
        country: 'Australia', 
        city: 'Sydney'
    }

    this.greetings();
}

let p1 = new Person1 ()
console.log(p1);


const _seeder = new seedGenerator();
function Person2 (_sgen) {

    this.greetings = function () {console.log(`hello ${this.firstName}`)};

    this.firstName = _sgen.firstName;
    this.lastName = _sgen.lastName;
    this.birthDate = _sgen.dateAndTime(1970, 2000);

    this.address = {};
    this.address.country = _sgen.country;
    this.address.city = _sgen.city(this.address.country);
    this.address.street = _sgen.street(this.address.country);

    this.greetings();
}



let p2 = new Person2 (_seeder)
console.log(p2);