'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

const _seeder = new seedGenerator();


function clickHandler (e) {
    e.preventDefault();
    window.alert('Thank you for clicking');
}


const btn = document.getElementById('myBtn');
const aref = document.querySelector('#myAref');
btn.addEventListener('click', clickHandler);
aref.addEventListener('click', clickHandler);


//Exercises
//1. Add click handers to btn and aref. Click on the buttons and see that the alert windows opens up.
//2. comment out e.preventDefault(); in the clickHandler and see the difference in the click behaviour.
//     - what is the difference? 


