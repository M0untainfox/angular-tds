
# TP1 exercice 1


# Objectifs

- Créer un module et un contrôleur
- Utiliser des directives Angular
- Mettre en oeuvre le Data-binding
- Utiliser un service ($cookies)

# Fonctionnalités à implémentées

- Saisir une note (message textuel) et afficher le nombre de caractères restants (le message  est limité à 100 caractères saisis)
- Enregistrer (côté client en JS)
- Effacer le contenu
- Afficher les messages d'info (sauvegarde, modification…)
- Gérer les changements de classe CSS sur l'affichage d'info

# Resenti et difficultés rencontrées
   Grâce a l'introduction sur AngularJS que nous avons eu les semaines précédentes, l'exercice 1 s'est dérouler assez facilement, la seul chose que m'a poser probleme a etait la mise en place du systeme de cookie afin de sauvegarder les informations saisies par l'utilisateur.
   L'injection du service ngCookies a été assez compliquée car ce fut le premier service que j'ai injecter.

# Résultats
![RES 1](https://image.noelshack.com/fichiers/2017/13/1490696339-capture-d-ecran-2017-03-28-a-12-17-04.png)
    *Présentation de la page, note modifiée apparait lorsque la note ne correspond plus a celle présente lors du chargement de la page*
    
![RES 2](https://image.noelshack.com/fichiers/2017/13/1490696339-capture-d-ecran-2017-03-28-a-12-17-41.png)
 *Les <div> d'information se colorent en fonction du nombre de caracteres réstants ici <50*
 
![RES 3](https://image.noelshack.com/fichiers/2017/13/1490696339-capture-d-ecran-2017-03-28-a-12-18-21.png)
 *Les <div> d'information se colorent en fonction du nombre de caracteres réstants ici <20 de plus in n'est pas possible de terminer le mot "bien" car il ne reste plus de caractères disponible*
 
 ![RES 3](https://image.noelshack.com/fichiers/2017/13/1490697008-capture-d-ecran-2017-03-28-a-12-29-53.png)
 *Lors de l'appuie sur Enregistrer la note est sauvegarder dans un cookie, ce dernier et directement ouvert lors du chargement de la page si il existen il est possible de le supprimer en appuyant sur effacer*
 

