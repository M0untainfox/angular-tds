var myApp = angular.module('myApp',[]);

myApp.controller('textController', [function() {
    this.prenom="";
    this.TailleRestante = function(value) { return 100-value.length; };

    this.clear = function(){
      this.prenom="";
    };

    this.energ = function(){
      setCookie(text,this.prenom);
    };
}]);
