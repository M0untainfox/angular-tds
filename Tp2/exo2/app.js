
(function(){
  var conta = [
        {
            "nom": "Zuckerberg",
            "prenom": "Mark",
            "mail": "Markou@facebook.com"
        },
        {
            "nom": "Gates",
            "prenom": "Bill",
            "mail": "Gates.way@microsoft.com"
        },
        {
            "nom": "Jobs",
            "prenom": "Steve",
            "mail": "Steve.jobs@apple.com"
        }
    ];

  var myApp = angular.module('myApp', []);

  myApp.controller("ContactController",function(){

    var self = this;

    this.add = false;

    this.contact = conta;

    this.tabCont = [];


    this.init = function(){
      for(i = 0;i<this.contact.length;i++){
        this.contact[i].modifia = false;
        this.contact[i].del = false;
      }
    };

    this.modif = function(res){
      for(i = 0;i<this.contact.length;i++){
        this.contact[i].modifia = false;
      }
      this.cancelAjout();
      if(res.modifia==false){
        res.modifia = true;
      }
    };

    this.modif2 = function(res){
      if(res.modifia==true){
        res.modifia = false;
      }
    };

    this.delete = function(res){
      if(res.del==false){
        res.modifia = false;
        res.del = true;
      }
    };

    this.cancel = function(){
      for(i = 0;i<this.contact.length;i++){
        if(this.contact[i].del==true){
          this.contact[i].del=false;
        }
      }
    };


    this.count = function(){
      rep = 0;
      for(i = 0;i<this.contact.length;i++){
        if(this.contact[i].del==false){
          rep++;
        }
      }
      return rep;
    };


    this.countSup = function(){
      return this.contact.length-this.count();
    };

    this.ajouter = function(){
      for(i = 0;i<this.contact.length;i++){
        this.contact[i].modifia = false;
      
      }

      if(this.add==false){
        this.add=true;
      }
    };

    this.cancelAjout = function(){
      this.add=false;

      this.tabCont = null;


    };

    this.submit = function(){
        this.tabCont.modifia = false;
        this.tabCont.del=false;
        console.log(this.tabCont);
        this.contact.push(this.tabCont);
        this.tabCont = null;

        this.add=false;

    };

  })
})();
