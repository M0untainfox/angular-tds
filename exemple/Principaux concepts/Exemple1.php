<!DOCTYPE html>
<html lang="en" ng-app="HelloApp">
<head>
    <meta charset="UTF-8">
    <title>Hello</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
</head>
<body>
  <div ng-app="" ng-init="prenom='Maurice'">

  <p>Prénom : <input type="text" ng-model="prenom"></p>
  <p>Vous avez saisi : {{ prenom }}</p>

  </div>

    <script>
        angular.module("HelloApp",[]).controller("HelloController",function(){this.message="Hello world";});
    </script>
</body>
</html>
