angular.module('myApp').controller("ContactController",function($scope, $http){


  var self = this;


  $http.get('app/data/currencymap.json').
  then(function(response) {
      self.currencies = response.data;
      console.log(self.currencies["EUR"]);
      self.to = self.currencies.EUR;
      self.from = self.currencies.USD;

      //this.from = self.currencies["EUR"];
  },
  function(response) {
      console.log("Erreur avec le statut Http : "+response.status);
  });

  this.what= 1;
  this.from = null;
  this.to = null;
  this.res=null;
  this.interval = 3000;
  this.histo=true



  this.swap = function(){

    var tmp = this.from;

    this.from = this.to;
    this.to = tmp;
  };

  this.getResult = function(){

    //console.log(this.currencies["EUR"]);
    //this.result = this.valeur*(this.to.val/this.from.val);
    console.log('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+this.from.code+'_'+this.to.code);
    $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+this.from.code+'_'+this.to.code, {jsonpCallbackParam: 'callback'})
    .then(function(response) {
      self.result= self.what * response.data[self.from.code+'_'+self.to.code].val;
      console.log("result :" + self.result);
    });

  };


})
