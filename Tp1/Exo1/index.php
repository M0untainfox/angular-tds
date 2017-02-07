<header>
	<meta charset="utf-8" />

</header>

<?php
include("../../header.php");

?>

<script type="text/javascript" src="app.js"></script>

<div class="panel panel-primary">
	<div class="panel-heading">Appication 1</div>
	<div class="panel-body">
		<div class="form-group" data-ng-app="myApp" data-ng-controller="textController as text">
		<p><label for="message">Note :</label>
      	<textarea data-ng-init="text.getcookie()" data-ng-change="text.change()" name="message" id="message" data-ng-model="text.prenom" cols="40" rows="5" class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="100" value="f"></textarea>
		</p>
		<p>
		<button data-ng-click="text.energ()" class="btn btn-primary">Enregistrer</button>
		<button data-ng-click="text.supprCookie()" class="btn btn-primary">Effacer</button>
		</p>

		<div class="alert alert-info alert-dismissible" role="alert">Nombre de caractères restant : {{text.TailleRestante(text.prenom)}} </div>
		<div data-ng-show="text.etat=='1'" data-ng-class="text.Class()" role="alert">Note sauvegardée</div>
		<div data-ng-show="text.etat=='2'" data-ng-class="text.Class()" role="alert">Note modifiée</div>

		</div>
	</div>
</div>
