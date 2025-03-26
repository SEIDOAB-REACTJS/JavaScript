//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//A function's this keyword behaves differently in JavaScript compared to other languages.
//In most cases, the value of this is determined by how a function is called (runtime binding). 
//ES5 introduced the bind() method to set the value of a function's this regardless of how it's called
//ES2015 introduced arrow functions where this is the value of the enclosing context.

console.group('Global context - "this" is undefined');

console.log(this);              //undefined

(function funcGlobalContext(param1) {
    const a = param1
    console.log(a);          
    console.log(this);          //undefined
})(3);

function funcGlobalContext(param1) {
    const a = param1
    console.log(this);          //undefined
}
funcGlobalContext(3);

console.groupEnd();


console.group('Object context - "this" is the object instance');
const obj = {
    prop: 'Object property',
    funcObjectContext: function () {
        console.log(this);          //the object
        console.log(this.prop);     //the object's property
    }};

console.log(obj);           //the object
obj.funcObjectContext();    
console.groupEnd();



console.group('Constructor Function - "this" is the Function instance');

function FuncC() {

    console.log(this);           //FuncC

    this.prop = "Constructor Function prop";
    this.funcEmbedded = function () {
        console.log(this);
        console.log(this.prop);
    }
}
const fc = new FuncC();
fc.funcEmbedded(); 
console.groupEnd();

console.group('Constructor Function with prototype - "this" is the Function instance');

function FuncCprop() {

    console.log(this);           //FuncCprop

    this.prop = "Constructor Function prop";
    this.funcEmbedded = function () {
        console.log(this);
        console.log(this.prop);
    }
}
FuncCprop.prototype = {
    funcEmbeddedProp: function () {
        console.log(this);       //FuncCprop
        console.log(this.prop);
    }
}
const fc1 = new FuncCprop();
fc1.funcEmbedded(); 
fc1.funcEmbeddedProp(); 
console.groupEnd();

console.group('Class-as-class context');

class classClass {

    constructor () {
    console.log(this);           //classClass

    //but you use it to define properties, when later executed
    this.prop = "Class prop";
    }

    funcEmbedded () {
        console.log(this);
        console.log(this.prop);
    }
}

const cc = new classClass();
cc.funcEmbedded(); 
console.groupEnd();
