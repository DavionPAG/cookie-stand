'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var salesTable = document.getElementById('salesTable');
var stores = [];
var newStoreForm = document.getElementById('newStore');

function renderHeader() {
  var tr = document.createElement('tr');
  salesTable.appendChild(tr);
  var th = document.createElement('th');
  th.textContent = 'Locations';
  tr.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Total';
  tr.appendChild(th);
}

function Sales(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHr = [];
  this.dailySales = 0;
  stores.push(this);
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
    salesTable.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = this.storeName;
    tr.appendChild(td);
    for (var i = 0; i < hours.length; i++) {
      td = document.createElement('td');
      td.textContent = this.cookiesPerHr[i];
      tr.appendChild(td);
    }

    td = document.createElement('td');
    td.textContent = this.dailySales;
    tr.appendChild(td);
  };
  this.getCookiesPerhour();
}

var tfoot = document.createElement('tfoot');

function renderStores() {
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

function endTotals() {

  salesTable.appendChild(tfoot);
  var th = document.createElement('th');
  th.textContent = 'Total';
  tfoot.appendChild(th);

  var grandtotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var totals = 0;
    for (var j = 0; j < stores.length; j++) {
      totals += stores[j].cookiesPerHr[i];
    }
    grandtotal += totals;
    var td = document.createElement('td');
    td.textContent = totals;
    tfoot.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = grandtotal;
  tfoot.appendChild(td);
}

//Event

function handleNewStore(event){
  event.preventDefault();

  var storeName = event.target.storeName.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgSales = event.target.avgSales.value;
  var newStore = new Sales(storeName, minCust, maxCust, avgSales);

  tfoot.innerHTML = '';
  newStore.render();
  endTotals();
  newStoreForm = document.getElementById('newStore').reset();
}

newStoreForm.addEventListener('submit', handleNewStore);

new Sales('Seattle', 23, 65, 6.3);
new Sales('Tokyo', 3, 24, 1.2);
new Sales('Duabi', 11, 38, 3.7);
new Sales('Paris', 20, 38, 2.3);
new Sales('Lima', 2, 16, 4.6);

renderHeader();
renderStores();
endTotals();
