'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../SeidoHelpers/seido-helpers.js';

console.log("Hello world from table.js");

    //module global variables
const _seeder = new seedGenerator();
console.log(_seeder.latinSentence);

    //Get Elements
    const bookList = document.querySelector("#bookList");

    //div class="trFluid"
    addRow("Inte nu igen, Alfons!", "Vet inte just nu", 2001, "1");
    addRow("Inte nu igen, Martin!", "Martin", 2020, 0.4);
    addRow("Inte nu igen, Stefan!", "Stefan", 2024, 5);
    //add a row into #bookList


    //Add event listeners

    //Declare event handlers

    //helpers
    function addRow(bookTitle, bookAuthor, publishedYear, millionsSold) {
        let divRow = document.createElement(`div`);
        divRow.classList.add("trFluid");
    
        let divGroup2 = document.createElement(`div`);
        divGroup2.classList.add("trFluid_Grouping2");
        divRow.appendChild(divGroup2);
    
    
        let divGroup1_1 = document.createElement(`div`);
        divGroup1_1.classList.add("trFluid_Grouping1");
        let divGroup1_2 = document.createElement(`div`);
        divGroup1_2.classList.add("trFluid_Grouping1");
        divGroup2.appendChild(divGroup1_1);
        divGroup2.appendChild(divGroup1_2);
    
    
        //<div class="tdFluent"></div>
        let divFluent1 = document.createElement(`div`);
        divFluent1.classList.add("tdFluent");
        divFluent1.innerHTML = bookTitle;
        divGroup1_1.appendChild(divFluent1);
    
        let divFluent2 = document.createElement(`div`);
        divFluent2.classList.add("tdFluent");
        divFluent2.innerHTML = bookAuthor;
    
        let divFluent3 = document.createElement(`div`);
        divFluent3.classList.add("tdFluent");
        divFluent3.innerHTML = publishedYear;
    
        let divFluent4 = document.createElement(`div`);
        divFluent4.classList.add("tdFluent");
        divFluent4.innerHTML = millionsSold;
    
        divGroup1_2.appendChild(divFluent2);
        divGroup1_2.appendChild(divFluent3);
        divGroup1_2.appendChild(divFluent4);
    
    
        bookList.appendChild(divRow);
    }
    //init