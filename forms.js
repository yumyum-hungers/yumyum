'use strict';
var registerForm = document.getElementById('myForm');
var companynum ;
var userNum ;
var companies;

registerForm.addEventListener('submit', function (event){
  event.preventDefault();

  function btnn(){
    if (event.target.name.value)
      window.location.href='billing.html';
    document.getElementById('myForm').reset();
  }
  btnn();




  for (var i in companies.company) {
    if(companies.company[i].companyName===document.getElementById('breakHours').value){
      companynum = Number(i) ;
      console.log(companynum);
      break;
    }
  }
  console.log(companies.company[companynum]);
  // companies.company[companynum].addUser
  var user1 = new Users(event.target.name.value,event.target.pwd.value,event.target.phonenumber.value
    ,event.target.email.value,event.target.hours.value,event.target.employees.value,0);

  companies.company[companynum].users.push(user1);
  userNum = companies.company[companynum].users.length-1;
  companies.saveToLocalStorage();
  localStorage.companynum=companynum;
  localStorage.userNum=userNum;
}
);


function loadCompanies() {
  var companiesFromLocalStorage = JSON.parse(localStorage.getItem('companies')) || [];
  companies = new Companies(companiesFromLocalStorage);
}
loadCompanies();
var listElement = document.getElementById('companyList');
for (var c = 0; c < companies.company.length; c++){
  companies.company[c].companyName;
  var optgroupElement = document.createElement('option');
  optgroupElement.innerHTML=companies.company[c].companyName;

  optgroupElement.id=c;


  listElement.appendChild(optgroupElement);
}


// companies.company[i].addUser(name,password,number,email,breakHour,employeesNumber,visaNumber);



// console.log (companies.company[0].companyName);


// companies.saved.localStorage();
