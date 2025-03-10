'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../SeidoHelpers/seido-helpers.js';

    //module global variables
    const _seeder = new seedGenerator();
    let persons = [];

    //Get Elements
    let list  = document.querySelector(`#itemList`);
    let btn = document.querySelector(`#btnColor`);
    let btnAdd = document.querySelector(`#btnAdd`);
    let btnClear = document.querySelector(`#btnClear`);

    //Add event listeners
    btn.addEventListener(`click`, btnClick);
    btnAdd.addEventListener(`click`, btnClickAdd);
    btnClear.addEventListener(`click`, btnClickClear);

    //Declare event handlers
    function btnClick (e)
    {
        list.classList.toggle(`list1`);
    }

    function btnClickAdd (e)
    {
        populateList();
        renderList();
    }

    function btnClickClear (e)
    {
        persons = [];
        while (list.firstElementChild !== null)
        {
            list.removeChild(list.firstElementChild);
        }   
    }

    //helpers
    function renderList() {
        while (list.firstElementChild !== null) {
            list.removeChild(list.firstElementChild);
        }
    
        persons.forEach(p => {
            let li = document.createElement(`li`);
            li.innerText = p.toString();
            list.appendChild(li);
        });
    }

    function populateList() {
        let count = 5;
        while (count) {
            count--;
    
            //const p = {};
            //p.firsName = _seeder.firstName;
            const p = { firstName: _seeder.firstName, lastName: _seeder.lastName, latinSentence: _seeder.latinSentence };
            p.toString = () => `Hi, my name is ${p.firstName} ${p.lastName}. I like ${p.bookTitle}. Sold ${p.bookSoldMillions} million copies`;
    
            p.bookTitle = _seeder.fromString('Alfons aberg, alfons bakar, oh nej alfons');
            p.bookSoldMillions = randomNumber(1, 100);
            persons.push(p);
        }
    }

    //init
    (function initPage(s) 
    {
        console.log(`Init page run ${s}`);
        btnClickAdd();
    }) ('hello');

