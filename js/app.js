'use strict';
//to locate current user
var usernum;
// to locate current company
var companynum;
// this contructor  companies
var Companies = function() {
  // this array contain the copmany object so this is the main that we will use and store , when you take the data from local sorage you should put it here .
  this.company = [];
};


Companies.prototype.addCompany = function(company, logo) {
  // when you add company we call this method with the name of the company and the directory of logo so here we make a company and we push it in company array
  var thiscompany = new Company(company, logo);
  this.company.push(thiscompany );
};

Companies.prototype.saveToLocalStorage = function() {
  // we call this method to store data on local storage
  localStorage.companies = JSON.stringify(this.company);
};

var Company = function(company, logo) {
  //thiss is company fconsructor
  this.companyName = company;
  this.logoDirectory = logo;
  this.user = [];
  this.restorant = [];
};

Company.prototype.addUser = function(name,password,number,breakHour,visaType,visaNumber) {
  // here we add user to company with all data needed and add it to user array ,so when ever we want to add user to company we should call this method
  var thisUser = new Users(name,password,number,breakHour,visaType,visaNumber);
  this.user.push(thisUser );
};

Company.prototype.addRestorants = function(name,password,number,breakHour,visaType,visaNumber) {
  // here we add restorant to company usually we will fill it in the code for now
  var thisRestorant = new Restorant(name,password,number,breakHour,visaType,visaNumber);
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


var Restorant = function(name,logo,totalvoteses) {
  // to store data of every restorant
  this.name = name;
  this.logo = logo;
  this.totalvoteses =totalvoteses;
  this.order =[];
  this.menu = [];
};
Restorant.prototype.votes = function() {
  //this methode we will use when click happen so we will add votes to restorant in company ,and add 1 to total votes
  this.totalvoteses++;
  this.order.push(Companies.company[companynum].user[usernum].name);

};
