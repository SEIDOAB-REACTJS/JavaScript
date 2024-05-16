'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';

export function Book (title, author, millionSold, publishYear){

    this.bookId = uniqueId();
    this.title = title;
    this.author = author;
    this.millionsSold = millionSold;
    this.publishedYear = publishYear;

    this.toString = function () {
        return `${this.title} written by ${this.author} in the year ${this.publishedYear}. ${this.millionsSold} million copies sold`;}

    this.seed = function (_seeder) {

        this.title = _seeder.latinSentence;
        this.author = _seeder.fullName;
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

const b = new Book("Huckleberry Finn", "Mark Tawin", 100, 1875);
console.log(b.bookId, b.toString());

const b1 = new Book("Frankenstein", "Mary Ann Shelly", 200, 1888);
console.log(b1.bookId, b1.toString());

const _seeder = new seedGenerator();
const b2 = new Book().seed(_seeder);
console.log(b2.bookId, b2.toString());

const books = new Book().seedMany(100, _seeder)
console.log(books);
