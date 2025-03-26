'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function () {
    console.log(`Hello, I am ${this.name}!`);
};

function Dog(name, breed) {
    
    //Inheritance - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name);
    this.breed = breed;
}

//share prototype
Dog.prototype = Object.create(Animal.prototype);

//Set prototype for Dog
Dog.prototype.constructor = Dog;
Dog.prototype.sound = function () {
    console.log(`${this.name} says: Woof!`);
};


function Cat(name, breed) {

    //Inheritance - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name); 

    this.breed = breed;
    this.sound = function () {console.log(`${this.name}, a ${this.breed}, says: Miau!`)};
}

//share prototype
Cat.prototype = Object.create(Animal.prototype);

//Set prototype for Dog
Cat.prototype.constructor = Cat;
Cat.prototype.sound = function () {
    console.log(`${this.name} says: Woof!`);
};


const myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayHello();  // Hello, I am Buddy!
myDog.sound();     // Buddy, a Golden Retriever, says: Woof! Woof!

const myCat = new Cat("Charlie", "Small Tiger");
myCat.sayHello();
myCat.sound();

