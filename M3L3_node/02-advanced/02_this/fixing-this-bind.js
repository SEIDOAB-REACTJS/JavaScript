'use strict';

const newObject = {
    name: 'object',

    sayGreeting: function sayGreeting() {

      console.log(`Now this is easy, ${this.name}`);
      
      const nestedGreeting = function nestedGreeting(greeting) {

        console.log(this);      //this is the object due to bind
        console.log(`${greeting} ${this.name}`);
      }.bind(this);


      nestedGreeting('hello');},

    sayGreetingWithoutBind: function sayGreetingWithoutBind() {

      console.log(`Now this is easy, ${this.name}`);

      const nestedGreetingWithoutBind = function nestedGreetingWithoutBind(greeting) {

        console.log(this);    //this is undefined
        console.log(`${greeting} ${this.name}`);
        };

      nestedGreetingWithoutBind('hello');}
  };

  console.group('With bind()');
  newObject.sayGreeting();
  console.groupEnd();

  console.group('Without bind()');
  newObject.sayGreetingWithoutBind();
  console.groupEnd();

