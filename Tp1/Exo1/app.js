var myApp = angular.module('myApp',['ngCookies']);



myApp.controller('textController', ['$cookies',function($cookies) {
    this.prenom="";
    this.etat="0";

    this.TailleRestante = function(value) {
       return 100-value.length;
     };

    this.clear = function(){
      this.prenom=getcookie(CookiesAngular);
    };

    this.energ = function(){
      this.etat="1";
      $cookies.put('CookiesAngular',this.prenom);
    };

    this.change = function(){
      this.etat="2";
    };

    this.getcookie = function(){
      if(this.prenom = $cookies.get('CookiesAngular')){
        this.prenom = $cookies.get('CookiesAngular');s
      }
      else{
        this.prenom ='';
      }

    };

    this.Class = function(){
      if(this.prenom.length>80){
        return "alert alert-danger alert-dismissible" ;
      }
      else{
          if(this.prenom.length>50){
            return "alert alert-warning alert-dismissible" ;
          }
          else return "alert alert-info alert-dismissible" ;
      }


    };
    this.supprCookie = function(){
      this.etat="0";
      this.prenom="";
      return $cookies.remove('CookiesAngular');

    }

}]);
