'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

//The selector syntax below states that find all:
// img elements that are nested at some level within an article element
const imgs = document.querySelectorAll('article img');
imgs.forEach(img => {
  console.log(img.getAttribute('src'));
});
