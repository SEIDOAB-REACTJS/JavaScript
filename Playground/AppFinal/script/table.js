'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../SeidoHelpers/seido-helpers.js';

    //module global variables
    const _seeder = new seedGenerator();
    let books = [];

    //Get Elements
    const bookList = document.querySelector("#bookList");
    const btnPopulate = document.querySelector("#btnPopulate");
    const btnClear = document.querySelector("#btnClear");
 
    //Add event listeners
    btnPopulate.addEventListener("click", clickPopulate);
    btnClear.addEventListener("click", clickClear);

    //Declare event handlers
    function clickPopulate (e) {
        populateBooks(5);
        renderBooks();
    }

    function clickClear (e) {

        books = [];
        renderBooks();
    }


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

    function renderBooks() {
        while (bookList.firstElementChild !== null) {
            bookList.removeChild(bookList.firstElementChild);
        }

        books.forEach(b => {addRow(b.bookTitle, b.bookAuthor, b.publishedYear, b.millionsSold)});
    }

    function populateBooks(nrBooks) {
        for (let index = 0; index < nrBooks; index++) {
    
            const b = {};
            b.bookTitle = _seeder.fromString('Alfons aberg, alfons bakar, oh nej alfons');
            b.bookAuthor = _seeder.fromString("Mark Twain, Steven King, Mary Shelly");
            b.millionsSold = randomNumber(1, 100);
            b.publishedYear = randomNumber(1800, 2020);

            books.push(b);
        }
    }

    //init
    (function pageInit() 
    {
        populateBooks(5);
        renderBooks();
    })();