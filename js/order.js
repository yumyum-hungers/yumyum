function order(){

  var main = document.getElementById('main');
  main.innerHTML ='';
  var h2El =document.createElement('h2');
  h2El.innerText = 'ordered list ';
  main.appendChild(h2El);
  var divEl = document.createElement('div');
  main.appendChild(divEl);
  var tableEl = document.createElement('table');
  divEl.appendChild(tableEl);
  var theadEl = document.createElement('thead')
  tableEl.appendChild(theadEl);
  var trEl = document.createElement('tr');
  theadEl.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.innerHTML = 'restorant';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.innerHTML = 'item';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.innerHTML = 'order delivery time';
  trEl.appendChild(thEl);
  var tbodyEl = document.createElement('tbody');
  tableEl.appendChild(tbodyEl);
  for (var i in companies.company[companyIndex].users[userIndex].ordered) {
    // TODO: Iterate over the items in the cart
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    var tdEl2 = document.createElement('td');
    var tdEl0 = document.createElement('td');
    tdEl0.id=i;
    tbody1.appendChild(trEl);
    trEl.appendChild(tdEl0);
    trEl.appendChild(tdEl);
    trEl.appendChild(tdEl2);
    tdEl2.textContent = companies.company[companyIndex].users[userIndex].breakHour;
    tdEl.textContent = companies.company[companyIndex].users[userIndex].ordered[i] ;
    tdEl0.textContent = companies.company[companyIndex].users[userIndex].resturant[i];
  }
}
  




order();
