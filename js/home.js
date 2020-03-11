'use strict';

var headarr = document.getElementsByClassName('heeeed');

for(let i = 0 ; i<headarr.length;i++){
  headarr[i].addEventListener('click',hi);
}

function hi(e){
  localStorage.setItem('header',e.target.id);
}


// eslint-disable-next-line no-undef
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 200,
});

// eslint-disable-next-line no-undef
new WOW().init();

var signBox = document.getElementById('signBox');
var form = document.getElementById('form');
var form2 = document.getElementById('form2');
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
  if( scrollPosition>10){
    signBox.style.opacity='1';
  }else{
    signBox.style.opacity='0.8';
  }
}


form.addEventListener('submit',sign);
form2.addEventListener('submit',sign);
function sign(e){
  e.preventDefault();
  for(let i =0;i<companies.company.length; i++ ){
    for(let j =0 ; j<companies.company[i].users.length;j++){
      if(companies.company[i].users[j].name.includes(e.target.name.value)){
        if(companies.company[i].users[j].password.includes(e.target.password.value)){
          console.log('wooooow signed in');
          localStorage.setItem('user',e.target.name.value);
          window.location.href = 'user.html';
          break;
        }
      }
    }
  }
  form.reset();
  form2.reset();
}



// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }
