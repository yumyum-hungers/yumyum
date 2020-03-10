'use strict';
var headarr = document.getElementsByClassName('heeeed');

for(let i = 0 ; i<headarr.length;i++){
  headarr[i].addEventListener('click',hi);
}

function hi(e){
  localStorage.setItem('header',e.target.id);
}

