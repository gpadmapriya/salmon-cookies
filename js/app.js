'use strict';

var i;
var salesAtPike = {
  location: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookieSales: 6.3,
  customersPerHour: function(){
    return Math.floor(Math.random() * (65-23)) + 23;
  },
  salesPerHour: []
};

var totalAtPike = 0;
var sales = 0;
for (i=0; i<15; i++){
  sales = Math.floor(salesAtPike.customersPerHour() * salesAtPike.averageCookieSales);
  salesAtPike.salesPerHour.push(sales);
  totalAtPike = totalAtPike + sales;
}

var locationContainerEl = document.getElementById('location-container');
var locationLiEl = document.createElement('li');
locationLiEl.textContent = salesAtPike.location;
locationContainerEl.appendChild(locationLiEl);

var ulEl = document.createElement('ul');

var liEl;
for (i=0; i<15; i++){
  liEl = document.createElement('li');
  if (i < 6){
    liEl.textContent = (i+6) + ' am: ' + salesAtPike.salesPerHour[i] + ' cookies';
  } else if (i > 6){
    liEl.textContent = (i-6) + ' pm: ' + salesAtPike.salesPerHour[i] + ' cookies';
  }else {
    liEl.textContent = (i+6) + ' pm: ' + salesAtPike.salesPerHour[i] + ' cookies';
  }

  ulEl.appendChild(liEl);
}

liEl = document.createElement('li');
liEl.textContent = 'Total: ' + totalAtPike + ' cookies';
ulEl.appendChild(liEl);

locationContainerEl.appendChild(ulEl);

var salesAtSeatac = {
  location: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  averageCookieSales: 1.2,
  customersPerHour: function(){
    return Math.floor(Math.random() * (24-3)) + 3;
  },
  salesPerHour: []
};

var totalAtSeatac = 0;
var salesSeatac = 0;

for (i=0; i<15; i++){
  salesSeatac = Math.floor(salesAtSeatac.customersPerHour() * salesAtSeatac.averageCookieSales);
  salesAtSeatac.salesPerHour.push(salesSeatac);
  totalAtSeatac = totalAtSeatac + salesSeatac;
}

locationContainerEl = document.getElementById('location-container');
locationLiEl = document.createElement('li');
locationLiEl.textContent = salesAtSeatac.location;
locationContainerEl.appendChild(locationLiEl);

ulEl = document.createElement('ul');

for (i=0; i<15; i++){
  liEl = document.createElement('li');
  if (i < 6){
    liEl.textContent = (i+6) + ' am: ' + salesAtSeatac.salesPerHour[i] + ' cookies';
  } else if (i > 6){
    liEl.textContent = (i-6) + ' pm: ' + salesAtSeatac.salesPerHour[i] + ' cookies';
  }else {
    liEl.textContent = (i+6) + ' pm: ' + salesAtSeatac.salesPerHour[i] + ' cookies';
  }

  ulEl.appendChild(liEl);
}

liEl = document.createElement('li');
liEl.textContent = 'Total: ' + totalAtSeatac + ' cookies';
ulEl.appendChild(liEl);

locationContainerEl.appendChild(ulEl);

var salesAtSeattleCenter = {
  location: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  averageCookieSales: 3.7,
  customersPerHour: function(){
    return Math.floor(Math.random() * (38-11)) + 11;
  },
  salesPerHour: []
};

var totalAtSeattleCenter = 0;
var salesSeattleCenter = 0;

for (i=0; i<15; i++){
  salesSeattleCenter = Math.floor(salesAtSeattleCenter.customersPerHour() * salesAtSeattleCenter.averageCookieSales);
  salesAtSeattleCenter.salesPerHour.push(salesSeattleCenter);
  totalAtSeattleCenter = totalAtSeattleCenter + salesSeattleCenter;
}

locationContainerEl = document.getElementById('location-container');
locationLiEl = document.createElement('li');
locationLiEl.textContent = salesAtSeattleCenter.location;
locationContainerEl.appendChild(locationLiEl);

ulEl = document.createElement('ul');

for (i=0; i<15; i++){
  liEl = document.createElement('li');
  if (i < 6){
    liEl.textContent = (i+6) + ' am: ' + salesAtSeattleCenter.salesPerHour[i] + ' cookies';
  } else if (i > 6){
    liEl.textContent = (i-6) + ' pm: ' + salesAtSeattleCenter.salesPerHour[i] + ' cookies';
  }else {
    liEl.textContent = (i+6) + ' pm: ' + salesAtSeattleCenter.salesPerHour[i] + ' cookies';
  }

  ulEl.appendChild(liEl);
}

liEl = document.createElement('li');
liEl.textContent = 'Total: ' + totalAtSeattleCenter + ' cookies';
ulEl.appendChild(liEl);

locationContainerEl.appendChild(ulEl);

var salesAtCapitolHill = {
  location: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  averageCookieSales: 2.3,
  customersPerHour: function(){
    return Math.floor(Math.random() * (38-20+1)) + 20;
  },
  salesPerHour: []
};

var totalAtCapitolHill = 0;
var salesCapitolHill = 0;

for (i=0; i<15; i++){
  salesCapitolHill = Math.floor(salesAtCapitolHill.customersPerHour() * salesAtCapitolHill.averageCookieSales);
  salesAtCapitolHill.salesPerHour.push(salesCapitolHill);
  totalAtCapitolHill = totalAtCapitolHill + salesCapitolHill;
}

locationContainerEl = document.getElementById('location-container');
locationLiEl = document.createElement('li');
locationLiEl.textContent = salesAtCapitolHill.location;
locationContainerEl.appendChild(locationLiEl);

ulEl = document.createElement('ul');

for (i=0; i<15; i++){
  liEl = document.createElement('li');
  if (i < 6){
    liEl.textContent = (i+6) + ' am: ' + salesAtCapitolHill.salesPerHour[i] + ' cookies';
  } else if (i > 6){
    liEl.textContent = (i-6) + ' pm: ' + salesAtCapitolHill.salesPerHour[i] + ' cookies';
  }else {
    liEl.textContent = (i+6) + ' pm: ' + salesAtCapitolHill.salesPerHour[i] + ' cookies';
  }

  ulEl.appendChild(liEl);
}

liEl = document.createElement('li');
liEl.textContent = 'Total: ' + totalAtCapitolHill + ' cookies';
ulEl.appendChild(liEl);

locationContainerEl.appendChild(ulEl);

var salesAtAlki = {
  location: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  averageCookieSales: 4.6,
  customersPerHour: function(){
    return Math.floor(Math.random() * (16-2+1)) + 2;
  },
  salesPerHour: []
};

var totalAtAlki = 0;
var salesAlki = 0;

for (i=0; i<15; i++){
  salesAlki = Math.floor(salesAtAlki.customersPerHour() * salesAtAlki.averageCookieSales);
  salesAtAlki.salesPerHour.push(salesAlki);
  totalAtAlki = totalAtAlki + salesAlki;
}

locationContainerEl = document.getElementById('location-container');
locationLiEl = document.createElement('li');
locationLiEl.textContent = salesAtAlki.location;
locationContainerEl.appendChild(locationLiEl);

ulEl = document.createElement('ul');

for (i=0; i<15; i++){
  liEl = document.createElement('li');
  if (i < 6){
    liEl.textContent = (i+6) + ' am: ' + salesAtAlki.salesPerHour[i] + ' cookies';
  } else if (i > 6){
    liEl.textContent = (i-6) + ' pm: ' + salesAtAlki.salesPerHour[i] + ' cookies';
  }else {
    liEl.textContent = (i+6) + ' pm: ' + salesAtAlki.salesPerHour[i] + ' cookies';
  }

  ulEl.appendChild(liEl);
}

liEl = document.createElement('li');
liEl.textContent = 'Total: ' + totalAtAlki + ' cookies';
ulEl.appendChild(liEl);

locationContainerEl.appendChild(ulEl);

