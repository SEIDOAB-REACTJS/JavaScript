//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { prototypeCard } from './playing-card.js';

function deckOfCards() {

    this.freshDeck = function () {

        let suits = ["Club", "Diamond", "Heart", "Spade"];
        let numeral = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
            "Knight", "Queen", "King", "Ace"];

        for (const s of suits) {

            for (const n of numeral) {

                let card = Object.create(prototypeCard);
                card.suit = s;
                card.numeral = n;

                this.cards.push(card);
            }
        }
    }

    //this.count

    //this.dealOne

    //this.shuffle

    //this.sort
    this.sort = function () { return this.cards.sort((card1, card2) => {
        if (card1.suitOrder !== card2.suitOrder)
            return card1.suitOrder - card2.suitOrder;

        return card1.numeralOrder - card2.numeralOrder; 
    })}


    //Here I add constructor code so I can also accesss the declared functions
    this.cards = []; 
    this.freshDeck();
}


//Test it
const deck = new deckOfCards();
// console.log(deck.count());

// let c = deck.dealOne();
// console.log(c);

// console.log(''+deck.dealOne());
// console.log(''+deck.dealOne());
// console.log(''+deck.dealOne());
// console.log(''+deck.dealOne());
// console.log(deck.count());

// deck.shuffle();
// console.log(''+deck.dealOne());
// console.log(''+deck.dealOne());
// console.log(''+deck.dealOne());
// console.log(''+deck.dealOne());
// console.log(deck.count());

// deck.sort();
// console.log(''+deck.dealOne());
// console.log(''+deck.dealOne());
// console.log(''+deck.dealOne());
// console.log(''+deck.dealOne());
// console.log(deck.count());


/* Exercise
1. write function this.count, this.dealOne, this.shuffle
2. Test the constructor function deckOfCards() by running the test code


*/