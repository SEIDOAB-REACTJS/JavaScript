'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../SeidoHelpers/seido-helpers.js';

export function Book (title, author, genre, millionSold, publishYear){

    this.bookId = uniqueId();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.millionsSold = millionSold;
    this.publishedYear = publishYear;

    this.toString = function () {
        return `${this.title} written by ${this.author} in the year ${this.publishedYear}. ${this.millionsSold} million copies sold`;}

    this.seed = function (_seeder) {

        this.title = _seeder.latinSentence;
        this.author = _seeder.fullName;
        this.genre = _seeder.fromString("Adventure, Horror, SciFi, Computers, Animals, Children");
        this.millionsSold = randomNumber(1, 100);
        this.publishedYear = randomNumber(1800, 2020);
        return this;
    }

    this.seedMany = function (nrItems, _seeder) {
        let books = [];
        for (let index = 0; index < nrItems; index++) {

            const b = new Book().seed(_seeder);
            books.push(b);
        };
        return books;
    }
}

export function LibraryService () {

    //temporary a list made from seedGeneration
    //in reality a WebApi communication
    const _seeder = new seedGenerator();
    this.books = new Book().seedMany(1000_000, _seeder);

    //services
    this.info = function (genre) {

        if (genre === undefined) return this.books.length;

        let count = 0;
        this.books.forEach(b => {
            if (b.genre === genre)
                {
                    count++;
                }
            });
        return count;
    }
    
    this.readBooks = function(pageNr, pageSize) {

        //return this.books;

        const ret = {};

        ret.pageNr = pageNr;
        ret.pageSize = pageSize;
        ret.maxNrpages = Math.ceil(this.books.length/pageSize);
        ret.totalCount = this.books.length;

        ret.pageItems = this.books.slice(pageNr*pageSize, pageNr*pageSize + pageSize);

        return ret;
    }

    this.readBook = function(id)
    {
        return this.books.find(book => book.bookId === id);
    }
}


//testing the service
const ls = new LibraryService();
let books = ls.readBooks(0,10);

console.log(books);
console.log(...books.pageItems);