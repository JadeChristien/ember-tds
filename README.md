# Framework - EmberJS

EmberJs est un framework côté client créé en déc 2011 par Yehuda Katz.
C'est un framework single page application.

Principales spécificités d'EmberJs :
* Développement en couche par extension du HTML
* architecture MVC → MRC (Model Route Component)
* data-binding bidirectionnel
* data down action up (DDAU)
* injection de dépendance
* routage
* tests
* Comme tous les frameworks JS : codage en Ecmascript puis transpilation JS

## Installation

* `git clone <repository-url>` this repository
* `cd tds`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).


### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

# Projet
## Présentation

En raison de la crise sanitaire, beaucoup de magasins ou de commerçants ont recours de manière exceptionnelle à la vente à emporter.
Beaucoup d'entre eux n'ont pas à leur disposition une application Web leur permettant de gérer cette activité.
L'objectif de l'application décrite ci-dessous est de répondre à ce nouveau besoin :
* Pour le client : lui permettre de préparer ses commandes en ligne et de convenir d'un moment pour venir les chercher (app full-stack Ubiquity).
* Pour le commerçant : gérer la préparation des commandes et les retraits (app EmberJS).

## Données
### Produits

`Sections`
Les produits sont rangés par section, équivalent d'un rayon de magasin. Chaque section est décrite par un nom et une description. Elle permet de présenter plusieurs produits.
Un produit (avec nom, commentaire, image d'illustration, prix, promotion) ne peut appartenir qu'à une seule section.

`Produits associés`
Chaque produit peut avoir des produits associés, qui apparaîtront dans la zone “produits associés” lorsque le visiteur sera sur la fiche du produit.

`Packs`
Certains produits sont des lots (packs) composés d'autres produits. Il s'agit dans ce cas de promotions.
* La promotion est dans ce cas calculée en faisant la différence entre le prix du lot et la somme des prix des produits inclus dans le lot.
* Le prix du produit tient toujours compte de la promotion, y compris dans le cas où la promotion est calculée.
Les packs feront automatiquement partie des produits associés des produits qu'ils contiennent.

### Commandes

`Clients`
Les clients sont des utilisateurs (User) ayant un nom, une adresse email, un mot de passe

`Employés`
Les employés du magasin possédent les mêmes caractéristiques que les clients.

`Commandes`
Une commande, dont on retient la date de création (automatiquement) ne correspond qu'à un seul client.
Une commande contient des produits, commandés en une certaine quantité.
Le montant total de la commande (amount) et le nombre total de produits commandés (itemsNumber) seront calculés automatiquement.
Chaque commande sera retirée sur une plage (timeSlot) choisie par le client.
* Le timeSlot correspond à une date/heure précise. Il n'est pas sélectionnable par le client s'il est plein (full ⇒ dans ce cas tous les employés sont déjà occupés à cet instant) ou expiré (date-1/2 journée dépassée).
* L'affectation d'un employé sur la préparation d'une commande correspondant à un timeSlot se fait automatiquement à la création de commande.
Lors de la préparation d'une commande, l'employé affecté à sa préparation marque chaque élément de la commande comme 'prepared'.
* Le montant à payer (toPay) et le nombre d'items manquant (missingItems) se mettront à jour automatiquement.
Lors de son retrait, la commande doit afficher automatiquement :
* Le montant total à payer par le client (toPay) (basé sur les produits préparés)
* Le nombre de produits préparés dans la commande, et le nombre d'items manquants

### Paniers

Chaque client peut créer des paniers qui contiennent des produits, en certaines quantités (de la même manière que la commande).
Un panier ne correspond qu'à un seul client, il est décrit par un nom, et sa date de création (automatique).
Lors de la création d'un compte client, un panier vide nommé (Mis de côté) est automatiquement créé pour lui.

# Documentation technique
## Services
`DAO`
Le service DAO -> UserRepository permet de récupérer les données de l'utilisateur en cours sans avoir besoin de faire à chaque fois un DAO dans le controller.

`UI`
Un servie UI permet de délocaliser le code voulu. On peut ainsi instancier par exemple des `UIGroups`.

## Controllers
`Modèle`
Les modèles reprennent les attributs des classes correspondantes ainsi que leurs types

`Vue`
Les vues, accessibles depuis les routes, permettent l'utilisation du TypeScript.
TypeScript est  un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Il s'agit d'un sur-ensemble syntaxique strict de JavaScript.

`Controller`
Je n'ai pas utilisé de controller dans ce projet. 
Les actions ont été réalisées dans les routes. Les actions sont appellées dans les vues.
