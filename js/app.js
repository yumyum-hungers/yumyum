'use strict';
//to locate current user
var usernum;
// to locate current company
var companynum;
// this contructor  companies
var Companies = function(companies) {
  // this array contain the copmany object so this is the main that we will use and store , when you take the data from local sorage you should put it here .
  this.company = companies;
};


Companies.prototype.addCompany = function(company, logo) {
  // when you add company we call this method with the name of the company and the directory of logo so here we make a company and we push it in company array
  var thiscompany = new Company(company, logo);
  this.company.push(thiscompany );
};

Companies.prototype.saveToLocalStorage = function() {
  // we call this method to store data on local storage
  localStorage.companies = JSON.stringify(this.company);
  localStorage.usernum = usernum;
  localStorage.companynum = companynum;
};

var Company = function(company, logo) {
  //thiss is company fconsructor
  this.companyName = company;
  this.logoDirectory = logo;
  this.users = [];
  this.restorant = [];
};

Company.prototype.addUser = function(name,password,number,email,breakHour,employeesNumber,visaNumber) {
  // here we add user to company with all data needed and add it to user array ,so when ever we want to add user to company we should call this method
  var thisUser = new Users(name,password,number,email,breakHour,employeesNumber,visaNumber);
  this.users.push(thisUser );
};

Company.prototype.addRestorants = function(name,logo) {
  // here we add restorant to company usually we will fill it in the code for now
  var thisRestorant = new Restorant(name,logo);
  this.restorant.push(thisRestorant );
};
var Users = function(name,password,number,email,breakHour,employeesNumber,visaNumber) {
  //this is user constructor just to store data off user
  this.name = name;
  this.password = password;
  this.number =number;
  this.email = email;
  this.breakHour =breakHour;
  this.employeesNumber = employeesNumber;
  //   this.visaType = visaType;
  this.visaNumber =visaNumber;
};


var Restorant = function(name,logo) {
  // to store data of every restorant
  this.name = name;
  this.logo = logo;
  this.totalvoteses = 0 ;
  this.order =[];
  this.menu ;
  this.menuImage ;
};
Restorant.prototype.votes = function() {
  //this methode we will use when click happen so we will add votes to restorant in company ,and add 1 to total votes
  this.totalvoteses++;
  this.order.push(Companies.company[companynum].user[usernum].name);

};
// how to load
// function loadCompanies() {
//     var companiesFromLocalStorage = JSON.parse(localStorage.getItem('companies')) || [];
//     var companies = new Companies(companiesFromLocalStorage);
//   }
if(localStorage.getItem('companies') === null){
  console.log('give it data');
  var companyToAdd = ['LTUC','Arab Bank','Hikma','JU'];
  var logoToAdd = ['images/LUCT-600x400.jpg','images/arabi.jpg','images/hikma.jpg','images/jordan-uni.png'];

  var mc = new Restorant('McDonald\'s','');
  mc.menu =['Big Mac Reagular Meal','Chicken McNuggets (6 pcs)','McChiken Regular Meal','Big Teasty Medium Meal'];
  mc.menuImage = ['https://www.firefly-burgers.com/wp-content/uploads/2018/07/logo.png','','',''];

  var pizzaHut = new Restorant('Pizza Hut','');
  pizzaHut.menu =['HAWAIIAN','HOT STUFF BEEF','MEAT LOVERS','PEPPERONI'];
  pizzaHut.menuImage = ['https://pbs.twimg.com/profile_images/1009039397243801600/ZY_JEMj4.jpg ','','',''];

  var mrPotato = new Restorant('Mr Potato','');
  mrPotato.menu =['Crispy Baked Potato Wedges','Potato With Chees','Potato without Potato ','Capmer\'s Potato'];
  mrPotato.menuImage = ['','','',''];

  var companies = new Companies([]);
  for (var i in companyToAdd) {
    companies.addCompany(companyToAdd[i],logoToAdd[i]);
    companies.company[i].restorant = [mc,pizzaHut,mrPotato];
  }
  localStorage.companies = JSON.stringify(companies.company);

}else{
  console.log('do nothing');
}
