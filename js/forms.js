/* eslint-disable no-undef */
'use strict';

var headarr = document.getElementsByClassName('heeeed');

for(let i = 0 ; i<headarr.length;i++){
  headarr[i].addEventListener('click',hi);
}

function hi(e){
  localStorage.setItem('header',e.target.id);
}

var registerForm = document.getElementById('myForm');
var companynum ;
var userNum ;
var companies;

loadCompanies();

var listElement = document.getElementById('companyList');
for (var c = 0; c < companies.company.length; c++){
  companies.company[c].companyName;
  var optgroupElement = document.createElement('option');
  optgroupElement.innerHTML=companies.company[c].companyName;
  optgroupElement.id=c;
  listElement.appendChild(optgroupElement);
}

registerForm.addEventListener('submit', reg);




function reg(event){
  event.preventDefault();

  for (var i in companies.company) {
    if(companies.company[i].companyName===document.getElementById('companyid').value){
      companynum = Number(i) ;
      break;
    }
  }
  var user1 = new Users(event.target.name.value,event.target.pwd.value,event.target.phonenumber.value
    ,event.target.email.value,event.target.hours.value,event.target.employees.value,0);
  companies.company[companynum].users.push(user1);
  userNum = companies.company[companynum].users.length-1;
  companies.saveToLocalStorage();
  localStorage.companynum=companynum;
  localStorage.userNum=userNum;

  btnn();
}
function loadCompanies() {
  var companiesFromLocalStorage = JSON.parse(localStorage.getItem('companies')) || [];
  companies = new Companies(companiesFromLocalStorage);
}

function btnn(){
  if (event.target.name.value){
    localStorage.setItem('user',event.target.name.value);
    document.getElementById('myForm').reset();
    window.location.href='billing.html';
  }
}

