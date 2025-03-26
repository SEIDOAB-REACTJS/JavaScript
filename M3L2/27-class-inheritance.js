'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
class Animal {

  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, I am ${this.name}!`);
  };
}

class Dog extends Animal {

  constructor (name, breed)
  {
    super(name);
    this.breed = breed;
  }

  sound() {console.log(`${this.name}, a ${this.breed}, says: Woof! Woof!`)};
}

class Cat extends Animal {
  constructor (name, breed)
  {
    super(name);
    this.breed = breed;
  }

  sound() {console.log(`${this.name}, a ${this.breed}, says: Miau!`)};
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayHello();  // Hello, I am Buddy!
myDog.sound();     // Buddy, a Golden Retriever, says: Woof! Woof!

const myCat = new Cat("Charlie", "Small Tiger");
myCat.sayHello();
myCat.sound();
