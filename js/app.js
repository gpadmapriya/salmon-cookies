'use strict';

var i;

//StoreSales object

var StoreSales = function (
  location,
  minCustomers,
  maxCustomers,
  averageCookiesPerCustomer
) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
};

//makelist function - creates an array as an object item with the hour total for a store

StoreSales.prototype.makeList = function () {
  var customersInOneHour;
  var sales;
  var total = 0;
  this.salesPerHour = [];

  for (i = 0; i < 15; i++) {
    customersInOneHour =
      Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) +
      this.minCustomers;
    sales = Math.floor(customersInOneHour * this.averageCookiesPerCustomer);
    this.salesPerHour.push(sales);
    total = total + sales;
  }
  this.totalSales = total;
};

//Creates and renders the body of the sales table

StoreSales.prototype.render = function () {
  var tbodyEl = document.createElement('tbody');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);

  for (i = 0; i < 15; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.salesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);

  tbodyEl.appendChild(trEl);
  tableEl.appendChild(tbodyEl);
};

var salesAtPike = new StoreSales('1st and Pike', 23, 65, 6.3);
var salesAtSeatac = new StoreSales('SeaTac Airport', 3, 24, 1.2);
var salesAtSeattleCenter = new StoreSales('Seattle Center', 11, 38, 3.7);
var salesAtCapitolHill = new StoreSales('Capitol Hill', 20, 38, 2.3);
var salesAtAlki = new StoreSales('Alki', 2, 16, 4.6);

var allStores = [salesAtPike, salesAtSeatac, salesAtSeattleCenter, salesAtCapitolHill, salesAtAlki];

salesAtPike.makeList();
salesAtSeatac.makeList();
salesAtSeattleCenter.makeList();
salesAtCapitolHill.makeList();
salesAtAlki.makeList();

var tableEl = document.getElementById('my-table');

//Header function - renders the header of the sales table

var displayHeader = function () {
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');

  var thEl;
  thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (i = 0; i < 15; i++) {
    thEl = document.createElement('th');
    if (i < 6) {
      thEl.textContent = i + 6 + ':00am';
    } else if (i > 6) {
      thEl.textContent = i - 6 + ':00pm';
    } else {
      thEl.textContent = i + 6 + ':00pm';
    }
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  theadEl.appendChild(trEl);
  tableEl.appendChild(theadEl);
};

//Footer function - creates and renders the footer of the sales table

var displayFooter = function () {

  if (document.getElementById('tfoot')) {
    document.getElementById('tfoot').remove();
  }


  tableEl = document.getElementById('my-table');
  var tfootEl = document.createElement('tfoot');
  tfootEl.setAttribute('id', 'tfoot');


  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  var colTotal;
  var totalCookies = 0;

  var tdEl;
  for (i = 0; i < 15; i++) {
    colTotal = 0;
    console.log('allstores length: ' + allStores.length);
    for (var j = 0; j < allStores.length; j++) {
      colTotal = colTotal + allStores[j].salesPerHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = colTotal;
    trEl.appendChild(tdEl);
    totalCookies = totalCookies + colTotal;
  }

  tdEl = document.createElement('td');
  tdEl.textContent = totalCookies;
  trEl.appendChild(tdEl);
  tfootEl.appendChild(trEl);
  tableEl.appendChild(tfootEl);
};

displayHeader();

salesAtPike.render();
salesAtSeatac.render();
salesAtSeattleCenter.render();
salesAtCapitolHill.render();
salesAtAlki.render();

displayFooter();

// adding form event

var handleSubmitEvent = function (submitEvent) {
  submitEvent.preventDefault();

  var storeName = submitEvent.target.storeName.value;
  var minCustomers = submitEvent.target.minCustomers.value;
  var maxCustomers = submitEvent.target.maxCustomers.value;
  var avgCookiesPerHour = submitEvent.target.avgCookiesPerHour.value;

  console.log('New store name: ' + storeName);
  var newStore = new StoreSales(
    storeName,
    minCustomers,
    maxCustomers,
    avgCookiesPerHour
  );
  console.log('New Store: ' + newStore);
  allStores.push(newStore);
  newStore.makeList();

  newStore.render();

  displayFooter();

};

var form = document.getElementById('add-store');
form.addEventListener('submit', handleSubmitEvent);
