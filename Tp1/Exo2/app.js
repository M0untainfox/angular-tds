(function(){
  var tab =[
    {
        "name": "Web Development",
        "price": 300,
        "active":true
    },{
        "name": "Design",
        "price": 400,
        "active":false
    },{
        "name": "Integration",
        "price": 250,
        "active":false
    },{
        "name": "Formation",
        "price": 220,
        "active":false
    }
];

  var myApp = angular.module('myApp', []);

  myApp.controller("ServicesController",function(){

    this.Services = tab;

  })
})();
