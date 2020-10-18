'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties.

//Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
var seattleUl = document.getElementById('seattle');
var tokyoUl = document.getElementById('tokyo');
var dubaiUl = document.getElementById('dubai');
var parisUl = document.getElementById('paris');
var limaUl = document.getElementById('lima');

var seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesPerHr: [],
  dailySales: 0,
  getRdmCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCookiesPerhour: function () {
    for (var i = 0; i < hours.length; i++) {
      var hrlySales = Math.ceil(this.getRdmCust() * this.avgCookies);
      this.cookiesPerHr.push(hrlySales);
      this.dailySales += hrlySales;
    }
  },
  render: function () {
    this.getCookiesPerhour();
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookiesPerHr[i]} cookies`;
      seattleUl.appendChild(li);
    }
    var li = document.createElement('li');
    li.textContent = `Total: ${this.dailySales} cookies`;
    seattleUl.appendChild(li);
  }
};

var tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  cookiesPerHr: [],
  dailySales: 0,
  getRdmCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCookiesPerhour: function () {
    for (var i = 0; i < hours.length; i++) {
      var hrlySales = Math.ceil(this.getRdmCust() * this.avgCookies);
      this.cookiesPerHr.push(hrlySales);
      this.dailySales += hrlySales;
    }
  },
  render: function () {
    this.getCookiesPerhour();
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookiesPerHr[i]} cookies`;
      tokyoUl.appendChild(li);
    }
    var li = document.createElement('li');
    li.textContent = `Total: ${this.dailySales} cookies`;
    tokyoUl.appendChild(li);
  }
};

var dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  cookiesPerHr: [],
  dailySales: 0,
  getRdmCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCookiesPerhour: function () {
    for (var i = 0; i < hours.length; i++) {
      var hrlySales = Math.ceil(this.getRdmCust() * this.avgCookies);
      this.cookiesPerHr.push(hrlySales);
      this.dailySales += hrlySales;
    }
  },
  render: function () {
    this.getCookiesPerhour();
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookiesPerHr[i]} cookies`;
      dubaiUl.appendChild(li);
    }
    var li = document.createElement('li');
    li.textContent = `Total: ${this.dailySales} cookies`;
    dubaiUl.appendChild(li);
  }
};

var paris = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  cookiesPerHr: [],
  dailySales: 0,
  getRdmCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCookiesPerhour: function () {
    for (var i = 0; i < hours.length; i++) {
      var hrlySales = Math.ceil(this.getRdmCust() * this.avgCookies);
      this.cookiesPerHr.push(hrlySales);
      this.dailySales += hrlySales;
    }
  },
  render: function () {
    this.getCookiesPerhour();
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookiesPerHr[i]} cookies`;
      parisUl.appendChild(li);
    }
    var li = document.createElement('li');
    li.textContent = `Total: ${this.dailySales} cookies`;
    parisUl.appendChild(li);
  }
};

var lima = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  cookiesPerHr: [],
  dailySales: 0,
  getRdmCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCookiesPerhour: function () {
    for (var i = 0; i < hours.length; i++) {
      var hrlySales = Math.ceil(this.getRdmCust() * this.avgCookies);
      this.cookiesPerHr.push(hrlySales);
      this.dailySales += hrlySales;
    }
  },
  render: function () {
    this.getCookiesPerhour();
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookiesPerHr[i]} cookies`;
      limaUl.appendChild(li);
    }
    var li = document.createElement('li');
    li.textContent = `Total: ${this.dailySales} cookies`;
    limaUl.appendChild(li);
  }
};


seattle.getRdmCust();
seattle.getCookiesPerhour();
seattle.render();

tokyo.getRdmCust();
tokyo.getCookiesPerhour();
tokyo.render();

dubai.getRdmCust();
dubai.getCookiesPerhour();
dubai.render();

paris.getRdmCust();
paris.getCookiesPerhour();
paris.render();

lima.getRdmCust();
lima.getCookiesPerhour();
lima.render();

