'use strict';

// eslint-disable-next-line no-undef
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 200,
});

new WOW().init();
<<<<<<< HEAD

var testBox = document.getElementById('testBox');
var signBox = document.getElementById('signBox');
var form = document.getElementById('form');
var form2 = document.getElementById('form2');
var companies ;
window.addEventListener('scroll',scrollingSign);
function loadData() {
  // get array of objects for the companies
  companies = JSON.parse(localStorage.getItem('companies')) || [];

}

loadData();

function scrollingSign(){
  var scrollPosition = window.scrollY;
  if( scrollPosition>650){
    testBox.style.width= '20px';
    testBox.style.opacity='0';
    testBox.style.right= '0px';
    testBox.style.height = '0px';
    signBox.style.opacity='1';
  }else{
    signBox.style.opacity='0';
    testBox.style.opacity='1';
    testBox.style.width= '200px';
    testBox.style.right='50px';
    testBox.style.height = '200px';
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
<<<<<<< HEAD
=======
>>>>>>> e854fb111de675e4c585fc98ac4aac36b0289436
=======

// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }
>>>>>>> 6e0bdcb3aab118e2734cae7e4b8bb9a9c24cde0b
