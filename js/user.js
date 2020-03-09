'use strict';
// anas page
// var User = new User(userItems);

/*********************************************** Data for testing **************************************************** */
/*localStorage.setItem('user','ruwaid');
/*
//companies.company objects
localStorage.setItem('companies.company',JSON.stringify([
  {companyName:'ltuc',
    logo:'https://pbs.twimg.com/profile_images/1009039397243801600/ZY_JEMj4.jpg ',
    users:[{name:'ahmad',password:'123',brake:'12',cardId:'7854879',payementMetod:'zainCash'},
      {name:'mohammed',password:'456',brake:'1',cardId:'5487',payementMetod:'visa'},
      {name:'ruwaid',password:'789',brake:'2',cardId:'21365',payementMetod:'masterCard'}],
    restorant:[
      {name:'firefly',logo:'https://www.firefly-burgers.com/wp-content/uploads/2018/07/logo.png',
        menu:['burgerr','meat'],totalvoteses:0},
      {name:'batata',logo:'https://pngimage.net/wp-content/uploads/2018/05/batata-png.png',
        menu:['poteto','juice'],totalvoteses:9},
      {name:'Kfc',logo:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        menu:['carrot'],totalvoteses:12},
      {name:'BurgerMaker',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqwRhlloYzv_UieJ0izfJ7wyqxxr1oLspdnxMJ4ugbU9JaV_w5',
        menu:['chicken','coca'],totalvoteses:15},
    ]
  },
  {companyName:'amazon',
    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfH1ax3tDvXMU9_C4S2BS865aiuFMyE7jdmsFLELqUMPy8R3ec',
    users:[{name:'swsan',password:'123',brake:'12',cardId:'7854879',payementMetod:'zainCash'},
      {name:'rami',password:'456',brake:'1',cardId:'5487',payementMetod:'visa'},
      {name:'zaid',password:'789',brake:'2',cardId:'21365',payementMetod:'masterCard'}],
    restorant:[
      {name:'firefly',logo:'https://www.firefly-burgers.com/wp-content/uploads/2018/07/logo.png',
        menu:['burgerr','meat'],totalvoteses:0},
      {name:'batata',logo:'https://pngimage.net/wp-content/uploads/2018/05/batata-png.png',
        menu:['poteto','juice'],totalvoteses:7},
      {name:'Kfc',logo:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        menu:['carrot'],totalvoteses:0},
      {name:'BurgerMaker',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqwRhlloYzv_UieJ0izfJ7wyqxxr1oLspdnxMJ4ugbU9JaV_w5',
        menu:['chicken','coca'],totalvoteses:0},
    ]
  },
  {companyName:'hyere',
    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQuKThZ70eGV3vUpe53a93qtlUyAwfNwNlBoEQNxdE4L7gOv9L',
    users:[{name:'lama',password:'123',brake:'12',cardId:'7854879',payementMetod:'zainCash'},
      {name:'wendy',password:'456',brake:'1',cardId:'5487',payementMetod:'visa'},
    ],
    restorant:[
      {name:'firefly',logo:'https://www.firefly-burgers.com/wp-content/uploads/2018/07/logo.png',
        menu:['burgerr','meat'],totalvoteses:7},
      {name:'batata',logo:'https://pngimage.net/wp-content/uploads/2018/05/batata-png.png',
        menu:['poteto','juice'],totalvoteses:0},
      {name:'Kfc',logo:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        menu:['carrot'],totalvoteses:2},
      {name:'BurgerMaker',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqwRhlloYzv_UieJ0izfJ7wyqxxr1oLspdnxMJ4ugbU9JaV_w5',
        menu:['chicken','coca'],totalvoteses:0},
    ]
  }
]));
/****************************************** User Page Code start here ******************************************** */
// Global variables
var imgEl = document.createElement('img');
var user ;
var companies ;
var companyIndex = 0;
var restorantIndex;
var bestOne = 0;



/********************************************** Calling Functions ************************************************* */

// Get data from local storage
loadData();

// Display name and logo for the company
printCompany();

// Display User Name
printUser();

// ascending();

// Display boxes
printRest();

var orderClass = document.querySelectorAll('.orderButton');

// calculate best one according to number of votes
votesCalc();

// Display other resturants
topp();

// Declare event listeners for every restorant
listenersfun();



/*********************************************** Functions ******************************************************* */


// Display User Name
function printUser(){
  var userName = document.getElementById('userName');
  userName.textContent = ` ${user}`;
}

// Display name and logo for the company
function printCompany(){
  var companyLogo = document.getElementById('companyLogo');
  for(let i =0;i<companies.company.length; i++ ){
    for(let j =0 ; j<companies.company[i].users.length;j++){
      if(companies.company[i].users[j].name.includes(user)){
        companyIndex = i;
        companyLogo.src = companies.company[i].logoDirectory;
        companyLogo.alt = companies.company[i].companyName;
        break;
      }
    }
  }
}


// function ascending(){
//   var arr= companies;
//   var x= [];
//   var y=[];
// console.log('jj');
// console.log(arr.company[0].restorant[0].totalvoteses);
// for(let i = 0; i<arr.company[companyIndex].restorant.length;i++){
//   x.push(arr.company[companyIndex].restorant[i].totalvoteses);
//   // console.log(x);
// }
// x.sort();
// for(let j = 0; j<arr.company[companyIndex].restorant.length;j++){
//   for(let i = 0; i<arr.company[companyIndex].restorant.length;i++){
//     if(x[j]===arr.company[companyIndex].restorant[i].totalvoteses){
//       console.log('all',arr.company);
//       y.push(arr.company[companyIndex].restorant[i]);
//       console.log('inde',arr.company[companyIndex].restorant[i]);
//       arr.company.splice(arr.company[companyIndex].restorant[i],1);
//       console.log('arr',arr.company);
//       break;
//     }
//   }
// }
// console.log('ff',y);
//  console.log(arr.company[companyIndex].restorant.indexOf(y));
// for(let j = 0; j<arr.company[companyIndex].restorant.length;j++){
//   for(let i = 0; i<arr.company[companyIndex].restorant.length-1;i++){
//     if(arr.company[companyIndex].restorant[i].totalvoteses > arr.company[companyIndex].restorant[i+1].totalvoteses){
//       y.push(arr.company[companyIndex].restorant[i]);
//     }
//   }


// }

// calculate best one according to number of votes
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

// Display other resturants
function topp(){
  var restorantClass = document.getElementsByClassName('resturantName');
  var votesClass = document.getElementsByClassName('votes');
  var discClass = document.getElementsByClassName('desc');
  var logoClass = document.getElementsByClassName('imgLogo');
  // var tableEl = document.getElementsByClassName('table');
  var tbodyEl = document.querySelectorAll('tbody');
  var topDiv =1;
  // var ulEl =document.createElement('ul');
  restorantClass[0].textContent = bestOne.name;
  logoClass[0].src= bestOne.logo;
  votesClass[0].textContent = `ordered  ${bestOne.totalvoteses}`;
  discClass[0].textContent = `The menu for ${bestOne.name} is `;
  // discClass[0].appendChild(ulEl);
  for(let i =0 ;i<bestOne.menu.length;i++){
    // let liEl =document.createElement('li');
    // liEl.textContent = `${bestOne.menu[i]}`;
    // ulEl.appendChild(liEl);
    // liEl.id =`${0}.${restorantIndex}.${i}`;
    orderClass[0].id = `${restorantIndex}`;
    // console.log('before',i,tableEl);
    // console.log('after',tableEl);
    // var tbodyEl = document.createElement('tbody');
    // tbodyEl.className = 'tbody';
    // tableEl[0].appendChild(tbodyEl[0]);
    var trEl = document.createElement('tr');
    trEl.className = 'tr';
    tbodyEl[0].appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.className = 'meal';
    tdEl.id =`${0}.${restorantIndex}.${i}`;
    trEl.appendChild(tdEl);
    tdEl.textContent = `${bestOne.menu[i]}`;

    tdEl = document.createElement('td');
    tdEl.className = 'tdorder';
    tdEl.id = `tdorder.${restorantIndex}.${i}`;
    trEl.appendChild(tdEl);
    tdEl.textContent = '0';

    tdEl = document.createElement('td');
    tdEl.className = 'add';
    tdEl.id = `tdADD.${restorantIndex}.${i}`;
    trEl.appendChild(tdEl);
    tdEl.textContent = '+';

    tdEl = document.createElement('td');
    tdEl.className = 'sub';
    tdEl.id = `tdsub.${restorantIndex}.${i}`;
    trEl.appendChild(tdEl);
    tdEl.textContent = '-';

  }
  for (let i =0;i<=companies.company[companyIndex].restorant.length-1;i++){
    if(i !== restorantIndex){
      restorantClass[topDiv].textContent = companies.company[companyIndex].restorant[i].name;
      logoClass[topDiv].src= companies.company[companyIndex].restorant[i].logo;
      votesClass[topDiv].textContent = `ordered  ${companies.company[companyIndex].restorant[i].totalvoteses}`;
      discClass[topDiv].textContent = `The menu for ${companies.company[companyIndex].restorant[i].companyName} is `;
      orderClass[topDiv].id = `${i}`;

      for(let j =0 ;j<companies.company[companyIndex].restorant[i].menu.length;j++){


        trEl = document.createElement('tr');
        trEl.className = 'tr';
        tbodyEl[topDiv].appendChild(trEl);

        tdEl = document.createElement('td');
        tdEl.className = 'meal';
        tdEl.id =`${topDiv}.${i}.${j}`;
        trEl.appendChild(tdEl);
        tdEl.textContent = `${companies.company[companyIndex].restorant[i].menu[j]}`;

        tdEl = document.createElement('td');
        tdEl.className = 'tdorder';
        tdEl.id = `tdorder.${i}.${j}`;
        trEl.appendChild(tdEl);
        tdEl.textContent = '0';

        tdEl = document.createElement('td');
        tdEl.className = 'add';
        tdEl.id = `tdADD.${i}.${j}`;
        trEl.appendChild(tdEl);
        tdEl.textContent = '+';

        tdEl = document.createElement('td');
        tdEl.className = 'sub';
        tdEl.id = `tdsub.${i}.${j}`;
        trEl.appendChild(tdEl);
        tdEl.textContent = '-';

      }
      topDiv++;
    }
  }
}

// Event listeners function for hover effects
function hoverEffects(e){
  var imgDesc = document.querySelectorAll('.imgDesc');
  imgEl = imgDesc[e.target.id.split('.')[0]];
  imgEl.src = companies.company[companyIndex].restorant[e.target.id.split('.')[1]].menuImage[e.target.id.split('.')[2]];
  imgDesc[e.target.id.split('.')[0]].style.opacity ='1';
  imgDesc[e.target.id.split('.')[0]].style.zIndex ='9999';

}

// Event listeners function for hover effects
function hoverEffectsOut(e){
  var imgDesc = document.querySelectorAll('.imgDesc');
  imgDesc[e.target.id.split('.')[0]].style.opacity ='0';
  imgDesc[e.target.id.split('.')[0]].style.zIndex ='-9999';
}


function ordered(e){
  var x = document.getElementById('main');
  x.className = 'door';

  var res = e.target.id;
  var value = 0;
  for(let meal = 0 ;meal < companies.company[companyIndex].restorant[res].menu.length ; meal++){
    var resturant = document.getElementById(`tdorder.${res}.${meal}`).textContent;
    value += parseInt(resturant);
  }
  companies.company[companyIndex].restorant[res].totalvoteses += value;
  companies.saveToLocalStorage();
  popalert(e);

  removeTableBody();

  // calculate best one according to number of votes
  votesCalc();

  // Display other resturants
  topp();

  // Declare event listeners for every restorant
  listenersfun();
}


// Get data from local storage
function loadData() {
  // string that have the user name from sign in or sign up
  user = localStorage.getItem('user') || [];

  // get array of objects for the companies.company
  var companiesarr = JSON.parse(localStorage.getItem('companies')) || [];
  // eslint-disable-next-line no-undef
  companies = new Companies(companiesarr);
}

// Display alert after ordering
function popalert(e){
  var msg = document.getElementById('msg');
  msg.style.zIndex='9999';
  msg.innerHTML=(`Thank you ${user} for your order from ${companies.company[companyIndex].restorant[e.target.id].name}
  and the ordered numbers for the resturant ${companies.company[companyIndex].restorant[e.target.id].totalvoteses}`);
  msg.style.opacity=1;
  setTimeout(() => {
    msg.style.opacity=0;
    msg.style.zIndex='-9999';
    var x = document.getElementById('main');
    x.className = '';
  }, 8000);
}

function listenersfun(){
  var menuMeal = document.querySelectorAll('.meal');
  var orderButton = document.querySelectorAll('.orderButton');
  var addButton = document.querySelectorAll('.add');
  var subButton = document.querySelectorAll('.sub');
  for(let i = 0 ;i<orderButton.length;i++){
    orderButton[i].addEventListener('click',ordered);
  }
  for(let i =0;i<menuMeal.length;i++){
    menuMeal[i].addEventListener('mouseover',hoverEffects);
    menuMeal[i].addEventListener('mouseout',hoverEffectsOut);
  }
  for(let i =0 ; i <addButton.length;i++){
    addButton[i].addEventListener('click',addOne);
    subButton[i].addEventListener('click',subOne);
  }
}

function addOne(e){
  var rest = e.target.id.split('.')[1];
  var meal = e.target.id.split('.')[2];
  var tdOrderId = document.getElementById(`tdorder.${rest}.${meal}`);
  var num = parseInt(tdOrderId.textContent);
  num++;
  tdOrderId.textContent = num;
}

function subOne(e){
  var rest = e.target.id.split('.')[1];
  var meal = e.target.id.split('.')[2];
  var tdOrderId = document.getElementById(`tdorder.${rest}.${meal}`);
  var num = parseInt(tdOrderId.textContent);
  num--;
  tdOrderId.textContent = num;
}


// Display resturants
function printRest(){
  var main = document.getElementById('main');
  for(let i =0;i<companies.company[0].restorant.length;i++){

    var divOne = document.createElement('div');
    divOne.className = 'container inlineDiv ';
    main.appendChild(divOne);
    var imgDesc = document.createElement('img');
    imgDesc.className = 'imgDesc' ;
    divOne.appendChild(imgDesc);
    var divTwo = document.createElement('div');
    divTwo.className = 'boxContainer';
    divOne.appendChild(divTwo);
    var divThree = document.createElement('div');
    divThree.className = 'box';
    divTwo.appendChild(divThree);
    var divFour = document.createElement('div');
    divFour.className = 'front';
    divThree.appendChild(divFour);
    var divFive = document.createElement('div');
    divFour.appendChild(divFive);
    var par = document.createElement('p');
    par.className = 'resturantName';
    divFive.appendChild(par);
    var image = document.createElement('img');
    image.className = 'imgLogo';
    divFive.appendChild(image);
    par = document.createElement('p');
    par.className = 'votes';
    divFive.appendChild(par);
    var divsix = document.createElement('div');
    divsix.className = 'back';
    divThree.appendChild(divsix);
    par = document.createElement('p');
    par.className = 'desc';
    divsix.appendChild(par);

    var tableEl = document.createElement('table');
    tableEl.className = 'table';
    divsix.appendChild(tableEl);

    var trEl = document.createElement('tr');
    trEl.className = 'tr';
    tableEl.appendChild(trEl);

    var thEl = document.createElement('th');
    thEl.className = 'th';
    trEl.appendChild(thEl);
    thEl.textContent = 'Meal';

    thEl = document.createElement('th');
    thEl.className = 'th';
    trEl.appendChild(thEl);
    thEl.textContent = '# of orders';

    thEl = document.createElement('th');
    thEl.className = 'th';
    trEl.appendChild(thEl);
    thEl.textContent = 'ADD';

    thEl = document.createElement('th');
    thEl.className = 'th';
    trEl.appendChild(thEl);
    thEl.textContent = 'Sub';

    var tbodyEl = document.createElement('tbody');
    tableEl.appendChild(tbodyEl);


    var divOrder = document.createElement('div');
    divOrder.className = 'orderButton';
    divOne.appendChild(divOrder);
    divOrder.textContent = 'Order';
  }

}


function removeTableBody(){
  var tbodyEl = document.querySelectorAll('tbody');
  for(let table = 0; table < tbodyEl.length; table++){
    tbodyEl[table].innerHTML =' ';
  }
}
