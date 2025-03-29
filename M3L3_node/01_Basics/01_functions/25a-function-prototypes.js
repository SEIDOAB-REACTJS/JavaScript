'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

console.group('Nu skapar vi kontot');
export function Account({ accountNr, accountTotal, firstName, lastName, city } =
    { accountNr: 'xxx-xxx-xxx', accountTotal: 0, firstName: 'unknown', lastName: 'unknown', city: 'unknown' }) {

    this.accountNr = accountNr;
    this.accountTotal = accountTotal;

    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
}

Account.prototype = {

    toString: function () { return `account: ${this.accountNr} has amount ${this.accountTotal}kr, owner: ${this.firstName} ${this.lastName} from ${this.city}`},

    createRandom: function () {

        const _sgen = new seedGenerator();
        const a = new Account();
        a.accountNr = `${randomNumber(100,1000)}-${randomNumber(100,1000)}-${randomNumber(100,1000)}`;
        a.accountTotal = randomNumber(0,50000);

        a.firstName = _sgen.firstName;
        a.lastName = _sgen.lastName;
        a.city = _sgen.city();

        return a;
    },

    createRandomMany: function (nrOfItems) {

        const _sgen = new seedGenerator();
        return _sgen.toArray(nrOfItems, this.createRandom);
    }
};

const a = new Account();
console.log(''+a);

const b = new Account().createRandom();
console.log(''+b);

const accounts = new Account().createRandomMany(10);
accounts.forEach(acc => console.log(''+acc));
console.groupEnd();

