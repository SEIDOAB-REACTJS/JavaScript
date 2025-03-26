//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

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

    this.count = function () { return this.cards.length }

    this.dealOne = function () {

        if (this.cards.length <= 0)
            throw new TypeError('Deck is empty');

        return this.cards.pop();
    }

    this.shuffle = function () {

        //Shuffle between 100 and 1000 times
        let nrShuffles = rnd(100, 999+1);
        for (let i = 0; i < nrShuffles; i++) {

            let loCard = rnd(0, this.cards.length);
            let hiCard = rnd(0, this.cards.length);

            //swap the cards
            [this.cards[loCard], this.cards[hiCard]] = [this.cards[hiCard], this.cards[loCard]];
        }

        //randomNumber = Math.floor(Math.random() * (max - min) ) + min;
        //non inclusive max, but inclusive min
        function rnd(min, max) {return Math.floor(Math.random() * (max - min)) + min;}
    }

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
console.log(deck.count());

let c = deck.dealOne();
console.log(c);

console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(deck.count());

deck.shuffle();
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(deck.count());

deck.sort();
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(deck.count());

/* Exercise
1. write a function shuffle() that shuffles the deck
2. In a playing card, introduce to properties, suitOrder, 0 to 3, and numeralOrder 2 to 14, and
   set them when creating the deck. 
3. write a function sort() that sorts the deck in the suit and numeral order using the properties introduced in 
   exercise 2
*/