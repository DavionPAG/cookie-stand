'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties.

//Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  minCust: 23,
  maxCust: 65,
  rdmCust: [],
  avgCookies: 6.3,
  cookiesPerHour: [],
  getCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var hoursAtI = ` cookies sold at ${[i]}`;
      this.rdmCust = rdmNum(23, 65) ;
      this.cookiesPerHour = [(this.avgCookies * this.rdmCust) + hoursAtI];
    }
  }
  // getCookiesPerhour: function () {
  //   for (var i = 0; i < hours.length; i++)
  //   this.cookiesPerHour = (this.avgCookies * this.rdmCust[i]);
  // }
};

//seattle.getCookiesPerhour();
seattle.getCustPerHour();

console.log(seattle.rdmCust);
console.log(seattle.cookiesPerHour);

function rdmNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// //helper function for random number from MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
