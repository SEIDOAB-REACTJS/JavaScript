'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

const _seeder = new seedGenerator();


function clickHandler (e) {
    window.alert('Click Hello');
}


const btn = document.getElementById('myBtn');
const aref = document.querySelector('#myAref');
btn.addEventListener('click', clickHandler);
aref.addEventListener('click', clickHandler);



