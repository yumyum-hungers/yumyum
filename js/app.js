'use strict';
// this contructor  companies
var Companies = function() {
  // this.items is an array of CartItem instances.
  this.company = [];
};


Companies.prototype.addCompany = function(company, logo) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  var thiscompany = new Company(company, logo);
  this.company.push(thiscompany );
};

Companies.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  localStorage.cart = JSON.stringify(this.company);
};

var Company = function(company, logo) {
  this.companyName = company;
  this.logoDirectory = logo;
  this.user = [];
  this.restorant = [];
};

Company.prototype.addUser = function(name,password,number,breakHour,visaType,visaNumber) {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  var thisUser = new Users(name,password,number,breakHour,visaType,visaNumber);
  this.user.push(thisUser );
};

Company.prototype.addRestorants = function(name,password,number,breakHour,visaType,visaNumber) {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  var thisRestorant = new Restorant(name,password,number,breakHour,visaType,visaNumber);
  this.restorant.push(thisRestorant );
};
var Users = function(name,password,number,breakHour,visaType,visaNumber) {
  this.name = name;
  this.password = password;
  this.number =number;
  this.breakHour =breakHour;
  this.visaType = visaType;
  this.visaNumber =visaNumber;
};

Users.prototype.voit = function() {

};
var Restorant = function(name,logo,totalVoites) {
  this.name = name;
  this.logo = logo;
  this.totalVoites =totalVoites;
  this.order =[];
};