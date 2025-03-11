'use strict';
import {Book, LibraryService} from './library.js';

//module global variables
let url = new URL(window.location);
let params = url.searchParams;
let id = params.get("id"); 
const _library = new LibraryService(sessionStorage);

//Get Elements
const bookTitle = document.querySelector("#bookTitle");

//Init
(() => {
    const book = _library.readBook(id);
    bookTitle.value = book.title;

})();