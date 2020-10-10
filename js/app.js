" use strict";
const formEl=document.getElementById("form");
const tableEl=document.getElementById("table")
let headerEl=["Car Model","Car Year","Price","manufacturer"];
Car.all=[];
getStoragedItem();
function Car(carModel,modelYear,manufacturer){
    this.carModel=carModel;
    this.modelYear=modelYear;
    this.manufacturer=manufacturer;
    this.carPrice=0;
    Car.all.push(this);

}
Car.prototype.calculatePrice=function (){
this.carPrice= getRandomInt(7000, 100000);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function createheader() {
      var headerRow= document.createElement("tr");
      tableEl.appendChild(headerRow);

      for (let i = 0; i < headerEl.length; i++) {
          var tableHeader= document.createElement("th");
          headerRow.appendChild(tableHeader);
          tableHeader.textContent= headerEl[i];
          
      }
  }
  createheader();
  Car.prototype.render=function (){
      var tabelRow= document.createElement("tr");
      tableEl.appendChild(tabelRow);

      var tableData=document.createElement("td");
      tabelRow.appendChild(tableData);
      tableData.textContent=this.carModel;

      var tableData1=document.createElement("td");
      tabelRow.appendChild(tableData1);
      tableData1.textContent=this.modelYear;

      var tableData2=document.createElement("td");
      tabelRow.appendChild(tableData2);
      tableData2.textContent=this.carPrice;

      var tableData3=document.createElement("td");
      tabelRow.appendChild(tableData3);
      tableData3.textContent=this.manufacturer;
  }

  function calculateTotalPrice(){
    var Total=0;
      var totalPrice=document.getElementById("totalPrice");
   
       for (let i = 0; i < Car.all.length; i++) {
         Total += Car.all[i].carPrice;
           
       }
       totalPrice.textContent= "Total price ="+Total;

  }
  calculateTotalPrice();


  for (let i = 0; i < Car.all.length; i++) {
        Car.all[i].calculatePrice();
        Car.all[i].render();
        calculateTotalPrice();
      
  }


  formEl.addEventListener("submit",addCar);
  function  addCar(event) {
      event.preventDefault();

      var carModel=event.target.carModel.value;
      var modelYear=event.target.modelYear.value;
      var manufacturer=event.target.manufacturer.value;
      
      var newCar= new Car (carModel,modelYear,manufacturer);
      newCar.render();
      newCar.calculatePrice();
      calculateTotalPrice();
     storagedItem();
  }

  function   storagedItem(){
      localStorage.setItem("cars",JSON.stringify(Car.all));
  }


  function getStoragedItem(){
      Car.all =[];
      if(localStorage.getItem("cars")){
          var getData= JSON.parse(localStorage.getItem("cars"));
          for (let i = 0; i < getData.length; i++) {
              new Car(getData[i].carModel,getData[i].modelYear,getData[i].manufacturer,getData[i].carPrice);
              
          }
      }
  }
