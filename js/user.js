'use strict';
// anas page
// var User = new User(userItems);

/*********************************************** Data for testing **************************************************** */
localStorage.setItem('user','ruwaid');

//companies objects
localStorage.setItem('companies',JSON.stringify([
  {name:'ltuc',
    logo:'https://pbs.twimg.com/profile_images/1009039397243801600/ZY_JEMj4.jpg ',
    users:[{name:'ahmad',password:'123',brake:'12',cardId:'7854879',payementMetod:'zainCash'},
      {name:'mohammed',password:'456',brake:'1',cardId:'5487',payementMetod:'visa'},
      {name:'ruwaid',password:'789',brake:'2',cardId:'21365',payementMetod:'masterCard'}],
    restorant:[
      {name:'firefly',logo:'https://www.firefly-burgers.com/wp-content/uploads/2018/07/logo.png',
        menu:['burgerr','meat'],totalVoites:0},
      {name:'batata',logo:'https://pngimage.net/wp-content/uploads/2018/05/batata-png.png',
        menu:['poteto','juice'],totalVoites:9},
      {name:'Kfc',logo:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        menu:['carrot'],totalVoites:12},
      {name:'BurgerMaker',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqwRhlloYzv_UieJ0izfJ7wyqxxr1oLspdnxMJ4ugbU9JaV_w5',
        menu:['chicken','coca'],totalVoites:15},
    ]
  },

  {name:'amazon',
    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfH1ax3tDvXMU9_C4S2BS865aiuFMyE7jdmsFLELqUMPy8R3ec',
    users:[{name:'swsan',password:'123',brake:'12',cardId:'7854879',payementMetod:'zainCash'},
      {name:'rami',password:'456',brake:'1',cardId:'5487',payementMetod:'visa'},
      {name:'zaid',password:'789',brake:'2',cardId:'21365',payementMetod:'masterCard'}],
    restorant:[
      {name:'firefly',logo:'https://www.firefly-burgers.com/wp-content/uploads/2018/07/logo.png',
        menu:['burgerr','meat'],totalVoites:0},
      {name:'batata',logo:'https://pngimage.net/wp-content/uploads/2018/05/batata-png.png',
        menu:['poteto','juice'],totalVoites:7},
      {name:'Kfc',logo:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        menu:['carrot'],totalVoites:0},
      {name:'BurgerMaker',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqwRhlloYzv_UieJ0izfJ7wyqxxr1oLspdnxMJ4ugbU9JaV_w5',
        menu:['chicken','coca'],totalVoites:0},
    ]

  },

  {name:'hyere',
    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQuKThZ70eGV3vUpe53a93qtlUyAwfNwNlBoEQNxdE4L7gOv9L',
    users:[{name:'lama',password:'123',brake:'12',cardId:'7854879',payementMetod:'zainCash'},
      {name:'wendy',password:'456',brake:'1',cardId:'5487',payementMetod:'visa'},
    ],
    restorant:[
      {name:'firefly',logo:'https://www.firefly-burgers.com/wp-content/uploads/2018/07/logo.png',
        menu:['burgerr','meat'],totalVoites:7},
      {name:'batata',logo:'https://pngimage.net/wp-content/uploads/2018/05/batata-png.png',
        menu:['poteto','juice'],totalVoites:0},
      {name:'Kfc',logo:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        menu:['carrot'],totalVoites:2},
      {name:'BurgerMaker',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqwRhlloYzv_UieJ0izfJ7wyqxxr1oLspdnxMJ4ugbU9JaV_w5',
        menu:['chicken','coca'],totalVoites:0},
    ]
  }
]));

/****************************************** User Page Code start here ******************************************** */
// Global variables
var numberOfTopDiv = 4;
// var desc = document.getElementById('desc');
var imgDesc = document.getElementById('imgDesc');
var imgEl = document.createElement('img');
var orderButton = document.getElementById('orderButton');

// var slideShow =document.getElementById('slideShow');
var user ;
var companies ;
var companyIndex = 0;
var restorantIndex;
var bestOne = 0;
// var slideIndex =0;
/********************************************** Calling Functions ************************************************* */

// Event listeners
orderButton.addEventListener('click',ordered);

listenersfun();

function listenersfun(){
  for(let i = 0;i<numberOfTopDiv;i++){
    var containerClass = document.getElementsByClassName('container')[i];
    containerClass.addEventListener('mouseover',hoverEffects);
    containerClass.addEventListener('mouseout',hoverEffectsOut);
  }
  // var containerClass = document.getElementsByClassName('container')[0];
}
// containerClass.addEventListener('mouseover',hoverEffects);
// containerClass.addEventListener('mouseout',hoverEffectsOut);

// Slideshow for restaurants logos
// setInterval(() => {
//   slideShow.src = companies[0].restorant[slideIndex].logo;
//   slideIndex++;
//   if(slideIndex === companies[0].restorant.length){
//     slideIndex =0;
//   }
// }, 1500);

// Get data from local storage
loadData();

// Display name and logo for the company
printCompany();

// Display User Name
printUser();

// calculate best one according to number of votes
votesCalc();

// Display best resturant
// resturantDataFunction( bestOne.name,bestOne.totalVoites,bestOne.menu);

// Display other resturants
topp(restorantIndex);

/*********************************************** Functions ******************************************************* */


// Display User Name
function printUser(){
  var userName = document.getElementById('userName');
  userName.textContent = `Welcome ${user}`;
}

// Display name and logo for the company
function printCompany(){
  var companyName = document.getElementById('companyName');
  var companyLogo = document.getElementById('companyLogo');
  for(let i =0;i<companies.length; i++ ){
    for(let j =0 ; j<companies[i].users.length;j++){
      if(companies[i].users[j].name.includes(user)){
        companyIndex = i;
        companyName.textContent = companies[i].name;
        companyLogo.src = companies[i].logo;
        companyLogo.alt = companies[i].name;
        break;
      }
    }
  }
}

// calculate best one according to number of votes
function votesCalc(){
  bestOne = companies[companyIndex].restorant[0].totalVoites;
  restorantIndex = 0;
  for(let i = 1; i<companies[companyIndex].restorant.length;i++){
    if( bestOne < companies[companyIndex].restorant[i].totalVoites){
      restorantIndex =i;
      bestOne = companies[companyIndex].restorant[i].totalVoites;
    }
  }
  bestOne = companies[companyIndex].restorant[restorantIndex];
}

// Display best resturant
// function resturantDataFunction(resturantNamee,votess,description){
//   // var resturantName = document.getElementById('resturantName');
//   // var votes = document.getElementById('votes');

//   resturantName.textContent = resturantNamee;
//   votes.textContent = `Number of votes until now ${votess}`;
//   desc.textContent = `The menu for ${resturantNamee} is ${description}`;
// }



// Display other resturants
function topp(){
  var restorantClass = document.getElementsByClassName('resturantName');
  var votesClass = document.getElementsByClassName('votes');
  var discClass = document.getElementsByClassName('desc');
  var logoClass = document.getElementsByClassName('imgLogo');
  var topDiv =1;
  console.log(bestOne);

  restorantClass[0].textContent = bestOne.name;
  logoClass[0].src= bestOne.logo;
  votesClass[0].textContent = `Number of votes until now ${bestOne.totalVoites}`;
  discClass[0].textContent = `The menu for ${bestOne.name} is ${bestOne.menu}`;

  for (let i =0;i<=numberOfTopDiv;i++){
    if(i !== restorantIndex){
      restorantClass[topDiv].textContent = companies[companyIndex].restorant[i].name;
      logoClass[topDiv].src= companies[companyIndex].restorant[i].logo;
      votesClass[topDiv].textContent = `Number of votes until now ${companies[companyIndex].restorant[i].totalVoites}`;
      discClass[topDiv].textContent = `The menu for ${companies[companyIndex].restorant[i].name} is ${companies[companyIndex].restorant[i].menu}`;
      topDiv++;
    }
  }
}

// Event listeners function for hover effects
function hoverEffects(e){
  console.log(e.target.id);
  imgDesc.appendChild(imgEl);
  imgEl.src =companies[companyIndex].restorant[restorantIndex].logo;
  imgDesc.style.opacity ='1';
}

// Event listeners function for hover effects
function hoverEffectsOut(){
  imgDesc.removeChild(imgEl);
  imgDesc.style.opacity ='0';
}


function ordered(){
  companies[companyIndex].restorant[restorantIndex].totalVoites +=1;
  popalert();
  localStorage.setItem('companies',JSON.stringify(companies));
  // Companies.saveToLocalStorage();
  // resturantDataFunction( bestOne.name,bestOne.totalVoites,bestOne.menu);
}


// Get data from local storage
function loadData() {
  // string that have the user name from sign in or sign up
  user = localStorage.getItem('user') || [];

  // get array of objects for the companies
  companies = JSON.parse(localStorage.getItem('companies')) || [];
}

// Display alert after ordering
function popalert(){
  // alert(`Thank you ${user} for your order from ${companies[companyIndex].restorant[restorantIndex].name}
  // and the total votes for the resturant ${companies[companyIndex].restorant[restorantIndex].totalVoites}`);
  var msg = document.getElementById('msg');
  msg.innerHTML=(`Thank you ${user} for your order from ${companies[companyIndex].restorant[restorantIndex].name}
  and the total votes for the resturant ${companies[companyIndex].restorant[restorantIndex].totalVoites}`);
  msg.style.opacity=1;
  setTimeout(() => {
    msg.style.opacity=0;
  }, 4000);
}
