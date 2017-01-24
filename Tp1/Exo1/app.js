var myApp = angular.module('myApp',[]);

myApp.controller('textController', [function() {
    this.prenom="";
    this.TailleRestante = function(value) { return 100-value.length; };

    this.clear = function(){
      this.prenom="";
    };

    this.energ = function(){
      document.cookie = "text="+this.prenom;
    };

    this.cookie = function(name){
      name = name + "=";
      var cookies = document.cookie.split(';');
      for(var i = 0; i <cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0)==' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length,cookie.length);
        }
    }
    return "";
    }

}]);
