<!DOCTYPE html>
<html lang="en" ng-app="HelloApp">
<head>
    <meta charset="UTF-8">
    <title>Hello</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
</head>
<body>
  <div ng-init="clients=[
{id:1,nom:'Heidi',pays:'Norvège'},
{id:2,nom:'Hans',pays:'Allemagne'},
{id:3,nom:'Maurice',pays:'France'}]">
    <div ng-repeat="client in clients">
        <label><input onclick=" alert('client.id');" type="radio" ng-value="client.id" name="client">{{ client.nom + ', ' + client.pays }}</label>

    </div>


</div>

    <script>
        angular.module("HelloApp",[]).controller("HelloController",function(){this.message="Hello world";});
    </script>
</body>
</html>
