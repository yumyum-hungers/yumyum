'use strict';
// function Resturant(name, phoneNumber, company, employees, breakHours, email){
//   this.name = name;
//   this.phoneNumber = phoneNumber;
//   this.company = company;
//   this.employees = employees;
//   this.breakHours = breakHours;
//   this.email = email;
// }


//   var nameInput = event.target.name.value;
//   var phoneInput = event.target.phoneNumber.value;
//   var companyInput = event.target.company.value;
//   var employeeInput = event.target.employees.value;
//   var breakInput = event.target.breakHours.value;
//   var emailInput = event.target.email.value;
//   var newStore = new Resturant(nameInput, phoneInput, companyInput, employeeInput, breakInput, emailInput);

//   newStore();

// }
// );














// function myForm(){
//   var no1=document.getElementById('name').value;
//   var no2=document.getElementById('phonenumber').value;
//   var no3=document.getElementById('company').value;
//   var no4=document.getElementById('employees').value;
//   var no5=document.getElementById('breakHours').value;
//   var no6=document.getElementById('email').value;
//   var no7=document.getElementById('pwd').value;


//   alert('Name: ' + no1 +'\n Phone Number: ' + no2 +'\n company: ' + no3+ '\n Number of Employees: ' +no4
//   + '\n Break Hour: ' + no5 + '\n Email: ' + no6 + '\n password: ********');
// }


var registerForm = document.getElementById('myForm');
registerForm.addEventListener('submit', function (event){
  event.preventDefault();});
