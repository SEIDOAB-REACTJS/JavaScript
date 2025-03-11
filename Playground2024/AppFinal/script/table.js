'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../SeidoHelpers/seido-helpers.js';

    //module global variables
    const _seeder = new seedGenerator();
    let books = [];

    //paging
    const _pageSize = 20;
    let _maxNrpages;
    let _currentPage = 0;

    //Get Elements
    const bookList = document.querySelector("#bookList");
    const btnPopulate = document.querySelector("#btnPopulate");
    const btnClear = document.querySelector("#btnClear");
    const btnPrev = document.querySelector("#btnPrev");
    const btnNext = document.querySelector("#btnNext");
 
    //Add event listeners
    btnPopulate.addEventListener("click", clickPopulate);
    btnClear.addEventListener("click", clickClear);
    btnPrev.addEventListener("click", clickPrev);
    btnNext.addEventListener("click", clickNext);

    //Declare event handlers
    function clickPopulate (e) {

        populateBooks(randomNumber(1,5));
        renderBooks(_currentPage);
    }

    function clickClear (e) {

        books = [];
        _currentPage = 0;
        renderBooks(_currentPage);
    }

    function clickPrev (e){

        if (_currentPage > 0 ) {
            _currentPage--;
            renderBooks(_currentPage);
        }
    }

    function clickNext (e){
        if (_currentPage < _maxNrpages-1) {
            _currentPage++;
            renderBooks(_currentPage);
        }
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

    function renderBooks(_pageNr) {
        while (bookList.firstElementChild !== null) {
            bookList.removeChild(bookList.firstElementChild);
        }

        let page = books.slice(_pageNr*_pageSize, _pageNr*_pageSize + _pageSize);
        page.forEach(b => {addRow(b.bookTitle, b.bookAuthor, b.publishedYear, b.millionsSold)});
    }

    function populateBooks(nrBooks) {
        for (let index = 0; index < nrBooks; index++) {
    
            const b = {};
            b.bookTitle = _seeder.latinSentence;
            b.bookAuthor = _seeder.fullName;
            b.millionsSold = randomNumber(1, 100);
            b.publishedYear = randomNumber(1800, 2020);

            books.push(b);
        }

        _maxNrpages = Math.ceil(books.length/_pageSize);
    }

    //init
    (function pageInit() 
    {
        populateBooks(100);
        renderBooks(_currentPage);
    })();