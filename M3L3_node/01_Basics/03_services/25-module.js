'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';
import {Account} from '../01_functions/25a-function-prototypes.js';

console.group('ny skapar vi banken');
class Bank {

    //class contructor
    constructor(name = 'unknown', accounts = []) {

        this.name = name;
        this.accounts = accounts;
    }

    toString() { return `Bank: ${this.name} has ${this.accounts.length} accounts with a total of ${this.Total()}kr`}

    Total() { 
        if (this.accounts.length === 0) return 0;

        const total = this.accounts.reduce( (tot, acc) => tot + acc.accountTotal, 0);
        return total}   
}

const baccounts = new Account().createRandomMany(1000);

//total of all accounts with less than 1000kr in it
const tot1 = baccounts.reduce((tot, account)=> account.accountTotal < 1000 ?tot+account.accountTotal :tot, 0);
console.log(tot1);

//total of all accounts with more or equal to 1000kr in it
const tot2 = baccounts.reduce((tot, account)=> account.accountTotal >= 1000 ?tot+account.accountTotal :tot, 0);
console.log(tot2);

//verification - should match bank total
console.log(tot1 + tot2);

const bank1 = new Bank("Martins bank1", baccounts );
console.log(bank1);
console.log(''+bank1);

console.log(bank1.Total());

console.groupEnd()

/* Exercises
1. use Array.map() to create an array of all the cities of the account holders.
2. use Set() collection to make the list of cities without duplicate cities
3. use for...of (over the cities), Array.filter() - to filter out accounts for a city, and Array.reduce() to calculate the totals of all accounts in each city
*/


