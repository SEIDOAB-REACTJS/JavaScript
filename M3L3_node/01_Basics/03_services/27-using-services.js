'use strict';
import {Book, LibraryService} from './26-constructor-function-service.js';


//using the service
const ls = new LibraryService();
let books = ls.readBooks(0,10);

console.log(books);
console.log(...books.pageItems);