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
    this.click = false;





  this.class = function(vari){
    if(vari.active==true){
      return "ng-binding ng-scope active";
    }
    else return "ng-binding ng-scope";
  };

    this.btn = function(){
      if(this.click==true){
        this.click=false;
      }
      else this.click=true;
    };

    this.prix = function(){
      res=0;

      for(i=0;i<tab.length;i++){
        if(tab[i].active==true){
          res=res+tab[i].price;
        }
      }
      return res;
    };


    this.count = function(){
      res=0;

      for(i=0;i<tab.length;i++){
        if(tab[i].active==true){
          res=res+1;
        }
      }
      return res;
    };

    this.etat = function(serv){
      if(serv.active==false){
        serv.active=true;
      }
      else {
        serv.active=false;
      }
    };

  })
})();
