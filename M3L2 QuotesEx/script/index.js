'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

const _seeder = new seedGenerator();


function clickHandler (e) {

    //check with and without
    e.preventDefault();
    window.alert('Thank you for clicking');
}


const btn = document.getElementById('myBtn');
const aref = document.querySelector('#myAref');



//Exercises
//1. Add click handers to btn and aref that calls function clickHandler. Click on the buttons and see that the alert windows opens up.
//2. comment out e.preventDefault(); in the clickHandler and see the difference in the click behaviour.
//     - what is the difference? 


