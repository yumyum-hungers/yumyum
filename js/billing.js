'use strict';
var headarr = document.getElementsByClassName('heeeed');
for(let i = 0 ; i<headarr.length;i++){
  headarr[i].addEventListener('click',hi);
}
function hi(e){
  localStorage.setItem('header',e.target.id);
}

var registerForm = document.getElementById('/action_page.php');
registerForm.addEventListener('submit', function (event){
  event.preventDefault();

  btnn();
});

function btnn(){
  if (event.target.fname.value){
    localStorage.setItem('header','fourthPage');
    window.location.href='redirect.html';
    document.getElementById('/action_page.php').reset();
  }
}
