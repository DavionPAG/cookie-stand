'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var salesTable = document.getElementById('salesTable');


var tr = document.createElement('tr');
salesTable.appendChild(tr);
var th = document.createElement('th');
th.textContent = '';
tr.appendChild(th);
for (var i = 0; i < hours.length; i++) {
  th = document.createElement('th');
  th.textContent = hours[i];
  tr.appendChild(th);
}


th = document.createElement('th');
th.textContent = 'Total';
tr.appendChild(th);


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
  this.totals = function () {
    
  };

  this.render = function () {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.storeName;
    tr.appendChild(td);
    for (var i = 0; i < hours.length; i++) {
      td = document.createElement('td');
      td.textContent = this.cookiesPerHr[i];
      tr.appendChild(td);
      salesTable.appendChild(tr);
    }

    td = document.createElement('td');
    td.textContent = this.dailySales;
    tr.appendChild(td);
  };

}



var tfoot = document.createElement('tfoot');
salesTable.appendChild(tfoot);
var thead = document.createElement(thead);
thead.textContent = 'Total';
tfoot.appendChild(thead);
var td = document.createElement(td);


// var totals = function () {
//   for (var i = 0; i < seattleStore.cookiesPerHr.length; i++) {
//     for (var j = 0; j < seattleStore.cookiesPerHr[i]; j++) {
//       var total = 0;
//       total = (total += seattleStore.cookiesPerHr[j][i]);
//     }
//   }
// };




var seattleStore = new Sales('Seattle', 23, 65, 6.3);
var toykoStore = new Sales('Tokyo', 3, 24, 1.2);
var dubaiStore = new Sales('Duabi', 11, 38, 3.7);
var parisStore = new Sales('Paris', 20, 38, 2.3);
var limaStore = new Sales('Lima', 2, 16, 4.6);


seattleStore.getCookiesPerhour();
seattleStore.render();

toykoStore.getCookiesPerhour();
toykoStore.render();

dubaiStore.getCookiesPerhour();
dubaiStore.render();

parisStore.getCookiesPerhour();
parisStore.render();

limaStore.getCookiesPerhour();
limaStore.render();

