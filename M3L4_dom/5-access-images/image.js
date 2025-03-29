'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
//https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore



// Access all elements of a specific type
// loop over all images
const imgElements = document.getElementsByTagName('img');
for (let i = 0; i < imgElements.length; i += 1) {
  const img = imgElements[i];
  console.log(img);
}

// append a new image

//create the image
//querySelectorAll more modern and general than getElementsByTagName
let imgs = document.querySelectorAll('img'); 
console.log(imgs.length);

//embedd the new image in a p element - just to look like the other
const p = document.createElement('p');
const img = document.createElement('img');
img.src = './img/someimg.jpg';
p.appendChild(img);

//get the parent of the p elements
const paras = document.querySelectorAll('p');

//append the new p element (with the image) as a last child
const body = paras[0].parentNode;
body.appendChild(p);

//how many img tags do we have
imgs = document.querySelectorAll('img');
console.log(imgs.length);

//embedd the new image in a p element - just to look like the other
const p1 = document.createElement('p');
const img1 = document.createElement('img');
img1.src = './img/someimg.jpg';
p1.appendChild(img1);

//let place this as the first child
const paras1 = document.querySelectorAll('p');
paras1[0].parentNode.insertBefore(p1, paras1[0]);

//how many img tags do we have
imgs = document.querySelectorAll('img');
console.log(imgs.length);
