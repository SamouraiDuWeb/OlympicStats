# Projet Olympic Graph

Ce projet est une application web Angular pour afficher des graphiques des médailles olympiques par pays.

## Fonctionnalités

- Affichage d'un graphique en secteurs (pie chart) représentant les médailles par pays.
- Collecte des données à partir d'un fichier JSON dans le répertoire `assets`.
- Utilisation de PrimeNG pour le composant de graphique en secteurs.
- Utilisation de Bootstrap pour la mise en page réactive.

## Prérequis

Avant de pouvoir exécuter ce projet, assurez-vous d'avoir les éléments suivants installés :

- Node.js (version 12 ou supérieure)
- Angular CLI

## Installation

1. Clonez ce dépôt de code sur votre machine locale :
  ```shell
  git clone "https://github.com/SamouraiDuWeb/OlympicStats"
  ```
2. Accédez au répertoire du projet :
  ```shell
  cd olympic-graph
  ```
3. Installez les dépendances du projet à l'aide de la commande suivante :
  ```shell
  npm install
  ```

## Utilisation

Pour exécuter l'application en mode développement, utilisez la commande suivante :
  ```shell
  ng serve
  ```

Ouvrez votre navigateur et accédez à l'URL suivante : 'http://localhost:4200'

## Structure du projet

- Le fichier de données JSON est situé dans le répertoire src/assets.
- Les composants Angular se trouvent dans le répertoire src/app.
- Le composant de graphique en secteurs personnalisé est dans le répertoire src/app/components/charts.
- Les styles CSS personnalisés sont dans le répertoire src/app/styles

## Contributions

Les contributions à ce projet sont les bienvenues. Si vous souhaitez apporter des améliorations ou corriger des problèmes, veuillez suivre les étapes suivantes :

1. Forkez ce dépôt de code.
2. Créez une branche pour vos modifications :
  ```shell
  git checkout -b feature/ma-nouvelle-fonctionnalité
  ```
3. Codez !
4. Faites un commit de vos modifications :
  ```shell
  git commit -m "Ajouter ma nouvelle fonctionnalité"
  ```
5. Poussez vos modifications vers votre dépôt distant :
  ```shell
  git push origin feature/ma-nouvelle-fonctionnalité
  ```
6. Ouvrez une demande d'extraction (pull request) vers ce dépôt d'origine.

## Auteur

Ce projet a été développé par [Léo Mouda](https://github.com/SamouraiDuWeb).

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.

