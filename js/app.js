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
  this.breakHour = breakHour;
  this.employeesNumber = employeesNumber;
  //   this.visaType = visaType;
  this.visaNumber =visaNumber;
  this.ordered = [];
  this.restorant = [];
};


var Restorant = function(name,logo) {
  // to store data of every restorant
  this.name = name;
  this.logo = logo;
  this.totalvoteses = 0 ;
  this.order =[];
  this.menu ;
  this.menuImage ;
  this.cost=[];
  this.offer=0;
};
Restorant.prototype.votes = function() {
  //this methode we will use when click happen so we will add votes to restorant in company ,and add 1 to total votes
  this.totalvoteses++;
  this.order.push(Companies.company[companynum].user[usernum].name);

};

if(localStorage.getItem('companies') === null){
  console.log('give it data');
  var companyToAdd = ['LTUC','ArabBank','Hikma','JU'];
  var logoToAdd = ['images/LTUC.png','images/bank.png','images/hikma.png','images/jordan-uni.png'];

  var mc = new Restorant('McDonald\'s','images/mac.png');
  mc.menu =['Big Mac Reagular Meal','Chicken McNuggets (6 pcs)','McChiken Regular Meal','Big Teasty Medium Meal'];
  mc.menuImage = ['images/bigmacc.png','images/mcnugget.png','images/McChiken Regular Meal.png','images/Big Teasty Medium Meal.png'];
  mc.cost =['5','4.75','5.5','5.25'];
  mc.offer = 45;
  var pizzaHut = new Restorant('Pizza Hut','images/pizza.png');
  pizzaHut.menu =['HAWAIIAN','HOT STUFF BEEF','MEAT LOVERS','PEPPERONI'];
  pizzaHut.menuImage = ['images/HAWAIIAN.jpg','images/HOTSTUFFBEEF.jpeg','images/meatlovers.jpg','images/PEPPERONI.jpg'];
  pizzaHut.cost =['5.68','4.5','5.45','5.25'];
  pizzaHut.offer = 20;
  var mrPotato = new Restorant('Mr Potato','images/potato.png');
  mrPotato.menu =['Crispy Baked Potato Wedges','Potato With Cheese','Potato without Potato ','Capmer\'s Potato'];
  mrPotato.menuImage = ['images/CrispyBakedPotatoWedges.jpg','images/Potatowithcheese.jpg','images/PotatowithoutPotato.jpg','images/Capmers Potato.jpeg'];
  mrPotato.cost =['6.35','4.75','4.5','5.15'];
  mrPotato.offer = 20;
  var firefly = new Restorant('FireFly','images/firefly.png');
  firefly.menu = ['Angus Burger Sandwich','Wall Street ','Rustic Burger Sandwich ','Red Kamikaze Burger Sandwich'];
  firefly.menuImage = ['images/Angus_Burger_Sandwich_636799688345719763.jpg','images/Wall_Street_Burger_S_636799690678903303.jpg','images/Rustic_Burger_Sandwi_636799690691765646.jpg','images/Red_Kamikaze_Burger__636799690706329626.jpg'];
  firefly.cost =['5.75','4.70','6.5','5.25'];
  firefly.offer = 50;
  var companies = new Companies([]);
  for (var i in companyToAdd) {
    companies.addCompany(companyToAdd[i],logoToAdd[i]);
    companies.company[i].restorant = [mc,pizzaHut,mrPotato,firefly];
  }
  companies.company[0].addUser('anas','anas','0785544665','hi@bye.com','12','015','55');
  companies.company[1].addUser('rowaid','rowaid','0785544665','bye@hi.com','1','015','55');
  companies.company[2].addUser('yamama','yamama','0785544665','yum@hi.com','3','015','55');
  companies.company[3].addUser('samah','samah','0785544665','css@hi.com','10','015','55');
  localStorage.companies = JSON.stringify(companies.company);


}else{
  console.log('do nothing');
}
