'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../SeidoHelpers/seido-helpers.js';
import {Book, LibraryService} from './26-constructor-function-service.js';

//Using Book with seedGenerator
const b = new Book("Huckleberry Finn", "Mark Tawin", "Adventure", 100, 1875);
console.log(b.bookId, b.toString());

const b1 = new Book("Frankenstein", "Mary Ann Shelly", "Horror", 200, 1888);
console.log(b1.bookId, b1.toString());

const _seeder = new seedGenerator();
const b2 = new Book().seed(_seeder);
console.log(b2.bookId, b2.toString());

const books = new Book().seedMany(100, _seeder)
console.log(books);


//using LibraryService
const library = new LibraryService();
console.log ("from my library");
console.log("Total nr books", library.info());
console.log("Adventure books", library.info("Horror"));

let p1 = library.readBooks(0, 50);
console.log("Books", p1);
console.log("Books", library.readBooks(1, 50));
console.log("Books", ...library.readBooks(2, 50).pageItems);

let bookdetail = library.readBook(p1.pageItems[0].bookId);
console.log(bookdetail);
