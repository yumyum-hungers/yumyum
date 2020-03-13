/* eslint-disable no-undef */
'use strict';

var headarr = document.getElementsByClassName('heeeed');

for(let i = 0 ; i<headarr.length;i++){
  headarr[i].addEventListener('click',hi);
}

function hi(e){
  localStorage.setItem('header',e.target.id);
}


AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 200,
});

new WOW().init();

/************************************************************************************************** */

var user;
var companyIndex;
var bestOne;
var restorantIndex;
var userIndex;
var orderListArr=[]; // save orders in the waiting list
var ListId =0;
var allcost=[];
// var companyName;
// Get data from local storage
loadData();

// Display name and logo for the company
printCompany();

// Display User Name
printUser();

// calculate best one according to number of votes
votesCalc();

resturants();

// // Declare event listeners for every restorant
// listenersfun();

/******************************************************************************************************** */

// Get data from local storage
function loadData() {
  // string that have the user name from sign in or sign up
  user = localStorage.getItem('user') || [];

  // get array of objects for the companies.company
  var companiesarr = JSON.parse(localStorage.getItem('companies')) || [];
  // eslint-disable-next-line no-undef
  companies = new Companies(companiesarr);
}

// Display User Name
function printUser(){
  var userName = document.getElementById('userName');
  userName.textContent = ` ${user}`;
}

// Display name and logo for the company
function printCompany(){
//   var companyLogo = document.getElementById('companyLogo');
  var companyname = document.getElementById('companyName');
  for(let i =0;i<companies.company.length; i++ ){
    for(let j =0 ; j<companies.company[i].users.length;j++){
      if(companies.company[i].users[j].name.includes(user)){
        companyIndex = i;
        userIndex =j;
        companyname.textContent = companies.company[i].companyName;
        break;
      }
    }
  }
}

function votesCalc(){
  bestOne = companies.company[companyIndex].restorant[0].totalvoteses;
  restorantIndex = 0;
  for(let i = 1; i<companies.company[companyIndex].restorant.length;i++){
    if( bestOne < companies.company[companyIndex].restorant[i].totalvoteses){
      restorantIndex =i;
      bestOne = companies.company[companyIndex].restorant[i].totalvoteses;
    }
  }
  bestOne = companies.company[companyIndex].restorant[restorantIndex];
}



function resturants(){
  var main = document.getElementById('resturantsName');
  main.innerHTML = '';
  var previousButton = document.createElement('div');
  previousButton.id = 'previous';
  previousButton.textContent = 'Previous Order';
  main.appendChild(previousButton);
  var h2El =document.createElement('h5');
  h2El.innerText = 'Restaurants List ';
  main.appendChild(h2El);
  var h3El =document.createElement('h4');
  h3El.innerText = 'Click your favourite Restaurant';
  main.appendChild(h3El);
  var divEl = document.createElement('div');
  divEl.className = 'allResturants';
  main.appendChild(divEl);

  var offerButton = document.createElement('span');
  divEl.appendChild(offerButton);
  offerButton.className ='offerButton';
  offerButton.textContent = 'Restaurants offers';
  offerButton.addEventListener('click',offers);

  for (var res in companies.company[companyIndex].restorant) {
    var divresturant = document.createElement('span');
    divEl.appendChild(divresturant);
    var divLogo = document.createElement('div');
    divresturant.appendChild(divLogo);
    divLogo.className = 'resturantLogo';
    divLogo.id = `res:${res}`;
    divLogo.innerHTML = `<div  class='resturant'  >
        <img  id = imgres:${res} src= '${companies.company[companyIndex].restorant[res].logo}' /> </div>` ;
  }
  // Declare event listeners for every restorant
  listenersfun();
}


function offers(e){
  if(e.target.textContent === 'Restaurant logos'){
    resturants();
  }else{
    e.target.textContent = 'Restaurant logos';
    var resturantLogoClass = document.querySelectorAll('.resturantLogo');
    for(let i = 0 ; i < resturantLogoClass.length;i++ ){
      var restdiv = document.getElementById(`res:${i}`);
      let res = restdiv.id.split(':')[1] ;
      resturantLogoClass[i].textContent =`Number of orders for 
      ${companies.company[companyIndex].restorant[res].name} equall to ${companies.company[companyIndex].restorant[res].totalvoteses} and when ${companies.company[companyIndex].companyName} reach ${companies.company[companyIndex].restorant[res].offer} order you will take 10% discount`;
      resturantLogoClass[i].style.background = 'lightgray';
      resturantLogoClass[i].style.backgroundColor = 'rgba(0,0,0,0.05)';
    }
  }
}

function listenersfun(){
  for(let res =0 ; res < companies.company[companyIndex].restorant.length;res++){
    var resturantClicked =document.getElementById(`res:${res}`);
    resturantClicked.addEventListener('click',resturantClick);
  }
  var previous = document.getElementById('previous');
  previous.addEventListener('click',previousClick);
}


function previousClick(){
  var contentVariable = document.getElementById('contentVariable');
  contentVariable.innerHTML ='';
  var orderlistHeading = document.createElement('h5');
  contentVariable.appendChild(orderlistHeading);
  orderlistHeading.className = 'previousOrders';
  orderlistHeading.textContent = 'Previous Orders';


  var divEl = document.createElement('div');
  divEl.className = 'divdiv';
  contentVariable.appendChild(divEl);

  for (var i in companies.company[companyIndex].users[userIndex].ordered) {
    var divAllOrder = document.createElement('div');
    divAllOrder.className = 'orderedOne';
    var tdEl0 = document.createElement('ul');
    var tdEl1 = document.createElement('li');
    var tdEl2 = document.createElement('li');
    var tdEl3 = document.createElement('li');
    var tdEl4 = document.createElement('li');
    divEl.appendChild(divAllOrder);
    divAllOrder.appendChild(tdEl0);
    tdEl0.appendChild(tdEl1);
    tdEl0.appendChild(tdEl2);
    tdEl0.appendChild(tdEl3);
    tdEl0.appendChild(tdEl4);



    var z = companies.company[companyIndex].users[userIndex].restorant[i];
    var t = companies.company[companyIndex].users[userIndex].ordered[i];
    var imgIndex =0;
    for(let j = 0 ; j < companies.company[companyIndex].restorant.length;j++){
      if(companies.company[companyIndex].restorant[j].name=== z){
        for(let k = 0 ; k < companies.company[companyIndex].restorant[j].menu.length;k++){
          if(companies.company[companyIndex].restorant[j].menu[k] === t){
            imgIndex = companies.company[companyIndex].restorant[j].menuImage[k];
          }
        }

      }
    }
    tdEl1.textContent =`Resturant: ${companies.company[companyIndex].users[userIndex].restorant[i]}`;
    tdEl2.textContent = companies.company[companyIndex].users[userIndex].ordered[i] ;
    tdEl3.textContent =`Delivery time: ${companies.company[companyIndex].users[userIndex].breakHour}`;
    var imgg = document.createElement('img');
    imgg.className = 'orderedImg';
    divAllOrder.appendChild(imgg);
    imgg.src = imgIndex;
  }
}




function resturantClick(e){
  var resturantLogoClass = document.querySelectorAll('.resturantLogo');
  var res = e.target.id.split(':')[1];
  for (let i = 0 ; i< resturantLogoClass.length;i++){
    if(resturantLogoClass[i].id === `res:${res}`){
      resturantLogoClass[i].className ='wow slideOutUp resturantLogo';
      new WOW().init();
      changeContent(e);

      setTimeout(() => {
        // e.target.className ='';
        resturantLogoClass[i].className ='resturantLogo';
      }, 1000);

    }
  }

}

function changeContent(e){
  var contentVariable = document.getElementById('contentVariable');
  contentVariable.innerHTML ='';

  var orderlistHeading = document.createElement('h5');
  contentVariable.appendChild(orderlistHeading);
  orderlistHeading.className = 'orderlistHeading';
  orderlistHeading.textContent = 'Waiting Orders';

  var orderlist = document.createElement('div');
  contentVariable.appendChild(orderlist);
  orderlist.className = 'orderList';
  orderlist.id = 'orderList';

  var orderButton = document.createElement('div');
  contentVariable.appendChild(orderButton);
  orderButton.id = 'orderButton';
  orderButton.textContent = 'ORDER NOW';
  orderButton.addEventListener('click',orderNow);


  var resturantName = document.createElement('h4');
  contentVariable.appendChild(resturantName);
  var res =e.target.id.split(':')[1];
  resturantName.textContent = companies.company[companyIndex].restorant[res].name;


  var companyOrders = document.createElement('div');
  contentVariable.appendChild(companyOrders);
  companyOrders.id = 'companyOrders';
  companyOrders.textContent = `# of Orders for ${companies.company[companyIndex].companyName}
  is ${companies.company[companyIndex].restorant[res].totalvoteses}`;

  var resturantImg = document.createElement('img');
  resturantImg.id = 'resturantImages';
  contentVariable.appendChild(resturantImg);
  resturantImg.src = companies.company[companyIndex].restorant[res].logo;
  var menuTable = document.createElement('table');
  contentVariable.appendChild(menuTable);
  var resturantmenu = companies.company[companyIndex].restorant[res];

  for(let meal in resturantmenu.menu){
    let rowMeal = document.createElement('tr');
    menuTable.appendChild(rowMeal);
    let menuMeal = document.createElement('td');
    menuMeal.id = `res:${res}.meal:${meal}`;
    menuMeal.className = 'meal';
    rowMeal.appendChild(menuMeal);
    menuMeal.textContent = resturantmenu.menu[meal];

    menuMeal = document.createElement('td');
    rowMeal.appendChild(menuMeal);
    menuMeal.textContent = `${companies.company[companyIndex].restorant[res].cost[meal]} JD`;

    menuMeal = document.createElement('td');
    rowMeal.appendChild(menuMeal);
    menuMeal.textContent = '+';
    menuMeal.id = `res:${res}.mealImage:${meal}`;
    menuMeal.className ='mealButton';
  }

  let menuMeal = document.querySelectorAll('.meal');
  let mealButton = document.querySelectorAll('.mealButton');
  for(let i =0;i<menuMeal.length;i++){
    menuMeal[i].addEventListener('mouseover',hoverEffects);
    menuMeal[i].addEventListener('mouseout',hoverEffectsOut);
    mealButton[i].addEventListener('click',addOrderToList);
  }

  loadOrderList();

}

function loadOrderList(){
  var orderList = document.getElementById('orderList');
  for(let orders in orderListArr){
    var res = orderListArr[orders].split('.')[0].split(':')[1];
    var mealImg = orderListArr[orders].split('.')[1].split(':')[1];
    var imgDiv =document.createElement('div');
    orderList.appendChild(imgDiv);
    imgDiv.className = 'imgOrderList';
    var imgEl = document.createElement('img');
    imgEl.src = companies.company[companyIndex].restorant[res].menuImage[mealImg];
    imgEl.id = `List:${orders}.res:${res}.mealImage:${mealImg}`;
    imgDiv.appendChild(imgEl);
    imgEl.addEventListener('click',removeItemFromOrderList);
  }
}

function addOrderToList(e){
  var orderList = document.getElementById('orderList');
  var res = e.target.id.split('.')[0].split(':')[1];
  var mealImg = e.target.id.split('.')[1].split(':')[1];
  var imgDiv =document.createElement('div');
  orderList.appendChild(imgDiv);
  imgDiv.className = 'imgOrderList';

  var imgEl = document.createElement('img');
  imgEl.src = companies.company[companyIndex].restorant[res].menuImage[mealImg];
  imgEl.id = `List:${ListId}.res:${res}.mealImage:${mealImg}`;
  ListId++;
  imgDiv.appendChild(imgEl);

  orderListArr.push(e.target.id);
  imgEl.addEventListener('click',removeItemFromOrderList);

}

function removeItemFromOrderList(e){
  var listIndex = e.target.id.split('.')[0].split(':')[1];
  orderListArr.splice(listIndex,1);
  var orderList = document.getElementById('orderList');
  orderList.textContent = '';
  loadOrderList();
}

function hoverEffects(e){
  var imgDesc = document.getElementById('resturantImages');
  var res = e.target.id.split('.')[0].split(':')[1];
  var meal = e.target.id.split('.')[1].split(':')[1];

  imgDesc.src = companies.company[companyIndex].restorant[res].menuImage[meal];

}

// Event listeners function for hover effects
function hoverEffectsOut(e){
  var imgDesc = document.getElementById('resturantImages');
  var res = e.target.id.split('.')[0].split(':')[1];
  imgDesc.src = companies.company[companyIndex].restorant[res].logo;
}

function orderNow(){
  for( let orders in orderListArr){
    let res = orderListArr[orders].split('.')[0].split(':')[1];
    let meal = orderListArr[orders].split('.')[1].split(':')[1];
    companies.company[companyIndex].restorant[res].totalvoteses++;
    companies.company[companyIndex].users[userIndex].ordered.push(companies.company[companyIndex].restorant[res].menu[meal]);
    companies.company[companyIndex].users[userIndex].restorant.push(companies.company[companyIndex].restorant[res].name);
    allcost.push(companies.company[companyIndex].restorant[res].cost[meal]);
    companies.saveToLocalStorage();
  }
  orderListArr = [];
  var orderList = document.getElementById('orderList');
  orderList.innerHTML = '';
  thanksfun();

}
function thanksfun(){
  var contentVariable = document.getElementById('contentVariable');
  contentVariable.innerHTML ='';
  var thanks = document.createElement('h1');
  thanks.textContent =`Thank You ${companies.company[companyIndex].users[userIndex].name}`;
  thanks.className = 'wow flipInX';
  contentVariable.appendChild(thanks);
  var yourOrder = document.createElement('h3');
  yourOrder.textContent =`Your Order will be delivered at ${companies.company[companyIndex].users[userIndex].breakHour}:00`;
  yourOrder.className = 'wow fadeInUp';
  contentVariable.appendChild(yourOrder);
  var c =0;
  for( let i in allcost){
    c += parseFloat(allcost[i]);
  }
  allcost = [];
  var yourCost = document.createElement('h6');
  yourCost.textContent =`Your total cost will be ${c} JD`;
  yourCost.className = 'wow fadeInUp';
  yourCost.id = 'costId';
  contentVariable.appendChild(yourCost);
}
