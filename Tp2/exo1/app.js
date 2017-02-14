(function(){


  var myApp = angular.module('myApp', []);

  myApp.controller("DispController",function($scope, $http){

    var self = this;


    this.current = null;

    this.step=1;

    this.dispoItems = null;



    $http.get("data.json")
    .then(function(response) {
        $scope.var = response.data;
        //alert($scope.myWelcome);
        self.dispoItems = $scope.var;


    });



    this.addToIncluded = function(Var){
console.log(this.dispoItems[1]);
      for(i=0;i<Var.length;i++){
        Var[i].select=true;
      }

    };


    this.removeFromIncluded = function(Var){
      for(i=0;i<Var.length;i++){
        Var[i].select=false;
      }
    };

    this.addAllToIncluded = function(){
        for(i=0;i<this.dispoItems.length;i++){
          this.dispoItems[i].select = true;
        }
    };

    this.removeAllFromIncluded = function(){
      for(i=0;i<this.dispoItems.length;i++){
        this.dispoItems[i].select = false;
      }
    };

    this.count = function(){
      res=0;
      for(i=0;i<this.dispoItems.length;i++){
        if(this.dispoItems[i].select == true){
          res = res +1;
        }

      }
      return res;
    };

    this.page = function(){
      if(self.step==1){
        self.step=2;
      }
      else{
        self.step=1;
      }
    };



  })
})();
