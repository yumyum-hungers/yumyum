'use strict';
// Global variables
var userNum ;
var companyNum ;
var companies ;
var restorantIndex;
var logosDivEl = document.getElementById('resturant-logos');
var bestOne = 0;
var logoDivImage = document.createElement('div');
logosDivEl.appendChild(logoDivImage);
logoDivImage.className = 'divForLogo';
var ulEl = document.createElement('ul');
logoDivImage.appendChild(ulEl);
ulEl.className ='carousel';
ulEl.setAttribute("data-target", "carousel");


// Get data from local storage
// Get data from local storage
function loadData() {
  // string that have the user name from sign in or sign up
  userNum = localStorage.userNum;
  userNum = 0;
  companyNum = localStorage.companyNum;
  companyNum = 0;

  // get array of objects for the companies.company
  var companiesarr = JSON.parse(localStorage.getItem('companies')) || [];
  // eslint-disable-next-line no-undef
  companies = new Companies(companiesarr);
}
loadData();
function votesCalc(){
  bestOne = companies.company[companyNum].restorant[0].totalvoteses;
  restorantIndex = 0;
  for(let i = 1; i<companies.company[companyNum].restorant.length;i++){
    if( bestOne < companies.company[companyNum].restorant[i].totalvoteses){
      restorantIndex =i;
      bestOne = companies.company[companyNum].restorant[i].totalvoteses;
    }
  }
  bestOne = companies.company[companyNum].restorant[restorantIndex];
}
votesCalc();
function displayRstorant(){
  for (let r =0 ; r < companies.company[companyNum].restorant.length;r++){

    var liEl = document.createElement('li');
    liEl.className = 'card';
    liEl.setAttribute("data-target", "card");
    ulEl.appendChild(liEl);
    var divEl = document.createElement('div');
    divEl.className = 'logos';
    liEl.appendChild(divEl);
    // var imgEl = document.createElement('img');
    // divEl.appendChild(imgEl);
    // imgEl.src = companies.company[companyNum].restorant[r].logo;
    divEl.style.backgroundImage = `url(${companies.company[companyNum].restorant[r].logo})`;
    var h5El =document.createElement('h5');
    divEl.appendChild(h5El);
    h5El.innerText = companies.company[companyNum].restorant[r].name;
    var pEl = document.createElement('p');
    pEl.innerText = `orderd ${companies.company[companyNum].restorant[r].totalvoteses}`;
    divEl.appendChild(pEl);
  }
}
displayRstorant();
function diplayMenu(restorantNum){
  var mainEl = document.getElementById('main');
  mainEl.innerHTML = '';
  for ( let m = 0 ; m < companies.company[companyNum].restorant[restorantNum].menu.length; m++){
    var menuDivEl = document.createElement('div');
    mainEl.appendChild(menuDivEl);
    menuDivEl.className = 'menuDev';
    menuDivEl.style.backgroundImage = `url(${companies.company[companyNum].restorant[restorantNum].menuImage[m]})`;
    // var menuImagEl = document.createElement('img');
    // menuDivEl.appendChild(menuImagEl);
    // menuImagEl.className = 'menuImg';
    // menuImagEl.src = companies.company[companyNum].restorant[restorantNum].menuImage[m];
    var menuPEl =document.createElement('p');
    menuDivEl.appendChild(menuPEl);
    menuPEl.className = 'menuP';
    menuPEl.innerText = companies.company[companyNum].restorant[restorantNum].menu[m];
  }
}
diplayMenu(2);
function listdisplay(){
  // Select the carousel you'll need to manipulate and the buttons you'll add events to
  const carousel = document.querySelector('[data-target=\'carousel\']');
  const card = carousel.querySelector('[data-target=\'card\']');
  const leftButton = document.querySelector('.bb2');
  const rightButton = document.querySelector('.bb1');

  // Prepare to limit the direction in which the carousel can slide,
  // and to control how much the carousel advances by each time.
  // In order to slide the carousel so that only three cards are perfectly visible each time,
  // you need to know the carousel width, and the margin placed on a given card in the carousel
  const carouselWidth = carousel.offsetWidth;
  const cardStyle = card.currentStyle || window.getComputedStyle(card);
  const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

  // Count the number of total cards you have
  const cardCount = carousel.querySelectorAll('[data-target=\'card\']').length;

  // Define an offset property to dynamically update by clicking the button controls
  // as well as a maxX property so the carousel knows when to stop at the upper limit
  let offset = 0;
  const maxX = -((cardCount / 3) * carouselWidth +
               (cardMarginRight * (cardCount / 3)) -
               carouselWidth - cardMarginRight);


  // Add the click events
  leftButton.addEventListener('click', function() {
    if (offset !== 0) {
      offset += carouselWidth + cardMarginRight;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  });

  rightButton.addEventListener('click', function() {
    if (offset !== maxX) {
      offset -= carouselWidth + cardMarginRight;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  });
}
listdisplay();
