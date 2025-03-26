'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

// Parent Constructor
function Animal(name) {
    this.name = name;

    this.sayHello = function () {
        console.log(`Hello, I am ${this.name}!`);
    };
}

// Child Constructor
function Dog(name, breed) {

    //Inheritance - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name); 

    this.breed = breed;
    this.sound = function () {console.log(`${this.name}, a ${this.breed}, says: Woof! Woof!`)};
}

function Cat(name, breed) {

    //Inheritance - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name); 

    this.breed = breed;
    this.sound = function () {console.log(`${this.name}, a ${this.breed}, says: Miau!`)};
}


const myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayHello();  // Hello, I am Buddy!
myDog.sound();     // Buddy, a Golden Retriever, says: Woof! Woof!

const myCat = new Cat("Charlie", "Small Tiger");
myCat.sayHello();
myCat.sound();

