# TP1 Exercice 2


# Objectifs



- Créer un module et un contrôleur
- Utiliser des directives Angular
- Mettre en oeuvre le Data-binding


# Fonctionnalités a implémentées

- Sélectionner/désélectionner des services
- Calculer le montant dû
- Afficher le nombre de services sélectionnés

# Resenti et difficultés rencontrées
 L'exercice etait assez simple en lui même la difficulté principale résidée en l'importation des divers codes promo contenue dans un fichier json, pour cela il a fallu injecter le service $http afin de récuperer les données et les stocker dans une variable apres cela l'application etait assez simple avec des :
 - ng-class
 - ng-click
 - ng-repeat

Une nouveauté a etait le **ng-pluralize** qui permet d'afficher differentes information en fonction de la valeur retourner par une fonction ou une variable javascript

# Résultats
![RES 1](https://image.noelshack.com/fichiers/2017/13/1490701142-capture-d-ecran-2017-03-28-a-13-37-07.png)
![RES 2](https://image.noelshack.com/fichiers/2017/13/1490701145-capture-d-ecran-2017-03-28-a-13-37-18.png)
*Divers affichages en fonction des services séléctionnés*

![RES 3](https://image.noelshack.com/fichiers/2017/13/1490701148-capture-d-ecran-2017-03-28-a-13-38-01.png)
*Affichage avec le code promo **B22** défini dans le fichier promo.json qui confere 5%*

