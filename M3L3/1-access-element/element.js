'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';


//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes


// select the element
const demodiv = document.getElementById('demodiv');
console.log(demodiv);

// select the parent of the element
const parent = demodiv.parentNode;
console.log(`parent:`, parent);

// select the children
const children = demodiv.childNodes;
console.log(`children:`, children);

// traverse collection of child elements
let outputString = 'Tag with id="demodiv has children" \n';

if (demodiv.hasChildNodes()) {
  children.forEach(child => {
    outputString += `${child.nodeName} ${child.nodeValue}\n`;
  });
}
console.log(outputString);
