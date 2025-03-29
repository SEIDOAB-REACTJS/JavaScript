//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//This is an example of where this context is peculiar, Callbacks
function Counter(from, to, divElement) {
  this.currentCount = from;
  this.finishCount = to;
}

Counter.prototype = {

  decrementCounter: function () {
    this.currentCount -= 1;
    console.log(this.currentCount);

    if (this.currentCount > this.finishCount) {

      // Schedule this function to run again after 1 second.
      // Increament counter is a Callback from setTimer

      // In the CallBack decrementCounter this will be undefined
      setTimeout(this.decrementCounter, 1000);  // number error

      //Bind to 'this' ensures all further callback are bound to this object, Counter
      //const decrementCounterFixed = this.decrementCounter.bind(this);
      //setTimeout(decrementCounterFixed, 1000);

      //This is the same as above
      //setTimeout(this.decrementCounter.bind(this), 1000);
    }
  },

  startCounter: function () {
    this.decrementCounter();
  }
}

// Create the counter for this page.
const counter = new Counter(10, 0);

counter.startCounter();
