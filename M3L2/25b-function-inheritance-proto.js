'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function () {
    console.log(`Hello, I am ${this.name}!`);
};

function Dog(name, breed) {
    
    //Inheritance step1 - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name);
    this.breed = breed;

    this.sound = function () {
        console.log(`${this.name}, a ${this.breed}, says: Woof!`);
    };
}

//Inheritance step2 - Set child prototype to parent prototype and constructor to child
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


function Cat(name, breed) {

    //Inheritance step1 - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name); 

    this.breed = breed;
    this.sound = function () {
        console.log(`${this.name}, a ${this.breed}, says: Miau!`)};
}

//Inheritance step2 - Set child prototype to parent prototype and constructor to child
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


const myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayHello();  // Hello, I am Buddy!
myDog.sound();     // Buddy, a Golden Retriever, says: Woof! Woof!

const myCat = new Cat("Charlie", "Small Tiger");
myCat.sayHello();
myCat.sound();

