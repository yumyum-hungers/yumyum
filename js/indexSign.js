'use strict';

// eslint-disable-next-line no-undef
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 200,
});

// eslint-disable-next-line no-undef
new WOW().init();


var testBox = document.getElementById('testBox');
var form = document.getElementById('form');
var companies ;
window.addEventListener('scroll',scrollingSign);
function loadData() {
  var companiesarr = JSON.parse(localStorage.getItem('companies')) || [];
  // eslint-disable-next-line no-undef
  companies = new Companies(companiesarr);
}

loadData();

function scrollingSign(){
  var scrollPosition = window.scrollY;
  if( scrollPosition>650 ){

    testBox.className = 'signBox';
  }else{
    testBox.className = 'testBox';
  }
}


form.addEventListener('submit',sign);
function sign(e){
  e.preventDefault();
  for(let i =0;i<companies.company.length; i++ ){
    for(let j =0 ; j<companies.company[i].users.length;j++){
      if(companies.company[i].users[j].name.includes(e.target.name.value)){
        if(companies.company[i].users[j].password.includes(e.target.password.value)){
          localStorage.setItem('user',e.target.name.value);
          window.location.href = 'user.html';
          break;
        }
      }
    }
  }
  form.reset();
}
