'use strict';
import {Book, LibraryService} from './library.js';

    //module global variables
    const _library = new LibraryService(sessionStorage);

    //paging
    const _pageSize = 20;
    let _currentPage = 0;
    let _maxNrpages;

    //Get Elements
    const bookList = document.querySelector("#bookList");
    const btnPrev = document.querySelector("#btnPrev");
    const btnNext = document.querySelector("#btnNext");
 
    //Add event listeners
    btnPrev.addEventListener("click", clickPrev);
    btnNext.addEventListener("click", clickNext);

    //Declare event handlers
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
    function addRow(bookId, bookTitle, bookAuthor, publishedYear, millionsSold) {
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

        //<a href="./new-book.html">view book</a>
        let a_tag = document.createElement(`a`);
        a_tag.innerText = "view book";
        a_tag.href=`./new-book.html?id=${bookId}`;
        divGroup1_2.appendChild(a_tag);

        bookList.appendChild(divRow);
    }

    function renderBooks(_pageNr) {
        while (bookList.firstElementChild !== null) {
            bookList.removeChild(bookList.firstElementChild);
        }

        let response = _library.readBooks(_pageNr, _pageSize);
        response.pageItems.forEach(b => {addRow(b.bookId, b.title, b.author, b.publishedYear, b.millionsSold)});
        
        //for debugging
        console.log(response.totalCount);
        
        _maxNrpages = response.maxNrpages;
    }


    //init
    (function pageInit() 
    {
        renderBooks(_currentPage);
    })();