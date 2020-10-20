'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties.

//Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var seattleUl = document.getElementById('seattle');
var tokyoUl = document.getElementById('tokyo');
var dubaiUl = document.getElementById('dubai');
var parisUl = document.getElementById('paris');
var limaUl = document.getElementById('lima');

var salesTable = document.getElementById('salesTable');

var tr = document.createElement('tr');
salesTable.appendChild(tr);
var th = document.createElement('th');
th.textContent = '';
tr.appendChild(th);
for (var i = 0; i < hours.length; i++) {
  var th = document.createElement('th');
  th.textContent = (hours[i]);
  tr.appendChild(th);
}

var th = document.createElement('th');
th.textContent = 'Total';
tr.appendChild(th);




console.log(salesTable);

function Sales(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHr = [];
  this.dailySales = 0;
  this.getRdmCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.getCookiesPerhour = function () {
    for (var i = 0; i < hours.length; i++) {
      var hrlySales = Math.ceil(this.getRdmCust() * this.avgCookies);
      this.cookiesPerHr.push(hrlySales);
      this.dailySales += hrlySales;
    }
  };
  this.render = function () {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.storeName;
    tr.appendChild(td);
    for (var i = 0; i < hours.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.cookiesPerHr[i];
      tr.appendChild(td);
      salesTable.appendChild(tr);
    }

    var td = document.createElement('td');
    td.textContent = this.dailySales ;
    tr.appendChild(td);
  };
}

var tfoot = document.createElement('tfoot');
var td = document.createElement(td);
td.textContent = 'Total';
tfoot.appendChild(td);
// var td = document.createElement(td);
// td.textContent = 0;
// tfoot.appendChild(td);
salesTable.appendChild(tfoot);

var seattleStore = new Sales('Seattle', 23, 65, 6.3);
var toykoStore = new Sales('Tokyo', 3, 24, 1.2);
var dubaiStore = new Sales('Duabi', 11, 38, 3.7);
var parisStore = new Sales('Paris', 20, 38, 2.3);
var limaStore = new Sales('Lima', 2, 16, 4.6);

seattleStore.getRdmCust();
seattleStore.getCookiesPerhour();
seattleStore.render();

toykoStore.getRdmCust();
toykoStore.getCookiesPerhour();
toykoStore.render();

dubaiStore.getRdmCust();
dubaiStore.getCookiesPerhour();
dubaiStore.render();

parisStore.getRdmCust();
parisStore.getCookiesPerhour();
parisStore.render();

limaStore.getRdmCust();
limaStore.getCookiesPerhour();
limaStore.render();



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


// seattle.getRdmCust();
// seattle.getCookiesPerhour();
// seattle.render();

// tokyo.getRdmCust();
// tokyo.getCookiesPerhour();
// tokyo.render();

// dubai.getRdmCust();
// dubai.getCookiesPerhour();
// dubai.render();

// paris.getRdmCust();
// paris.getCookiesPerhour();
// paris.render();

// lima.getRdmCust();
// lima.getCookiesPerhour();
// lima.render();
