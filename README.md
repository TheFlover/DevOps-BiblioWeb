# BiblioWeb

# Outils utilisés

## Utilisation de Git-cz - Commitizen

Dans ce projet, nous utilisons Git-cz (Commitizen) pour faciliter la création de messages de commit cohérents et structurés. En tant que développeur, l'utilisation de cet outil m'apporte plusieurs avantages :

### Uniformité des messages de commit

Git-cz nous permet de nous assurer que tous les membres de l'équipe suivent les mêmes conventions lorsqu'ils créent des messages de commit, ce qui facilite la lecture et la compréhension du code.

### Documentation cohérente

En fournissant des informations structurées et cohérentes sur chaque commit, nous pouvons documenter plus efficacement les changements apportés au code et faciliter la recherche et l'analyse de l'historique des modifications.

### Réduction des erreurs

Git-cz peut nous aider à éviter les erreurs courantes lors de la création de messages de commit, telles que l'oubli de la référence à un ticket ou l'absence de description suffisante des modifications.

### Faciliter la collaboration

Git-cz peut faciliter la collaboration en permettant aux membres de l'équipe de mieux comprendre les modifications apportées par les autres et en fournissant des informations plus précises sur les modifications apportées.

En somme, l'utilisation de Git-cz peut aider à rendre le processus de gestion de version plus efficace et plus collaboratif en fournissant une structure cohérente pour la documentation des modifications apportées au code.

## Utilisation de ESLint

Dans ce projet, nous utilisons ESLint pour améliorer la qualité de notre code et faciliter la collaboration entre les membres de l'équipe. En tant que développeur, l'utilisation de cet outil m'apporte plusieurs avantages :

### Détection rapide des erreurs et des problèmes de style

ESLint nous permet de détecter rapidement les erreurs de syntaxe, les problèmes de style et les pratiques de codage potentiellement dangereuses. Cela nous permet de corriger ces erreurs avant que le code ne soit fusionné dans la branche principale, ce qui réduit le risque d'introduire des bugs et facilite la maintenance du code.

### Cohérence du style de code

En utilisant ESLint, nous pouvons définir et appliquer des règles de style de code cohérentes pour l'ensemble du projet, ce qui facilite la lecture et la compréhension du code. Cela rend également le code plus facile à maintenir, car chaque développeur utilise les mêmes règles pour écrire du code.

### Faciliter la collaboration

ESLint peut faciliter la collaboration en permettant aux membres de l'équipe de mieux comprendre le code écrit par les autres. Les règles de style cohérentes et les messages d'erreur clairs permettent aux développeurs de travailler plus efficacement ensemble.

### Amélioration de la qualité du code

L'utilisation d'ESLint peut contribuer à améliorer la qualité globale du code en identifiant les erreurs et les problèmes de style, ce qui rend le code plus facile à lire, à comprendre et à maintenir. Cela peut également aider à éviter les erreurs courantes et les pratiques de codage dangereuses, ce qui peut contribuer à réduire les coûts de maintenance du code à long terme.

En somme, l'utilisation d'ESLint peut aider à améliorer la qualité et la maintenabilité du code, tout en facilitant la collaboration entre les membres de l'équipe en fournissant une structure cohérente pour la détection rapide des erreurs et des problèmes de style.

## Utilisation d'une CI de déploiement avec Docker

Dans ce projet, nous utilisons une CI de déploiement avec Docker pour automatiser le processus de déploiement de notre application Angular. En tant que développeur, l'utilisation de cet outil m'apporte plusieurs avantages :

### Automatisation du processus de déploiement

En utilisant une CI de déploiement avec Docker, nous pouvons automatiser le processus de déploiement de notre application Angular. Cela réduit le risque d'erreurs humaines et accélère le déploiement du code, ce qui nous permet de livrer plus rapidement de nouvelles fonctionnalités à nos utilisateurs.

### Portabilité de l'application

Docker nous permet de créer des conteneurs portables qui peuvent être déployés sur n'importe quel système d'exploitation. Cela nous permet de déployer notre application sur différents environnements de production, sans avoir à nous soucier des différences entre les systèmes d'exploitation.

### Isolation des dépendances

En utilisant des conteneurs Docker, nous pouvons isoler les dépendances de notre application et garantir que chaque environnement de production a les mêmes versions des bibliothèques et des dépendances. Cela réduit les conflits de dépendances et les erreurs de configuration, ce qui rend notre application plus fiable et plus facile à maintenir.

### Contrôle de version du déploiement

En utilisant une CI de déploiement avec Docker, nous pouvons contrôler le versionnement du déploiement de notre application. Nous pouvons déployer différentes versions de notre application sur différents environnements de production, ce qui nous permet de tester les nouvelles fonctionnalités avant de les déployer pour tous les utilisateurs.

### Meilleure gestion des erreurs

En utilisant une CI de déploiement avec Docker, nous pouvons mieux gérer les erreurs de déploiement. Nous pouvons automatiser la récupération d'erreurs et effectuer des rollback en cas d'échec, ce qui réduit le temps de résolution des problèmes et améliore la qualité de notre application.

En somme, l'utilisation d'une CI de déploiement avec Docker peut améliorer le processus de déploiement de notre application Angular, en automatisant le processus de déploiement, en rendant l'application plus portable, en isolant les dépendances, en contrôlant le versionnement du déploiement et en améliorant la gestion des erreurs.

## Pourquoi ne pas avoir utilisé Versel ?

Il y a plusieurs raisons pour lesquelles nous avons choisi d'utiliser une CI de déploiement avec Docker plutôt que d'utiliser Versel pour ce projet :

### Contrôle total de l'environnement

En utilisant une CI de déploiement avec Docker, nous avons un contrôle total sur l'environnement de production de notre application. Nous pouvons installer les dépendances que nous voulons et configurer l'infrastructure pour répondre aux besoins spécifiques de notre application. Avec Versel, nous sommes limités à l'environnement fourni par Versel, ce qui peut ne pas répondre à nos besoins.

### Personnalisation de l'infrastructure

En utilisant une CI de déploiement avec Docker, nous pouvons personnaliser l'infrastructure de notre application en fonction de nos besoins. Nous pouvons utiliser différents services de base de données, serveurs de cache, etc., pour répondre aux besoins spécifiques de notre application. Avec Versel, nous sommes limités aux services proposés par Versel.

### Coûts

En utilisant une CI de déploiement avec Docker, nous pouvons déployer notre application sur n'importe quel hébergeur cloud de notre choix, ce qui peut être moins coûteux que d'utiliser les services de Versel. De plus, nous avons un contrôle total sur les ressources utilisées par notre application, ce qui nous permet de mieux optimiser les coûts.

### Flexibilité

En utilisant une CI de déploiement avec Docker, nous avons la flexibilité de déployer notre application sur différentes plateformes, telles que AWS, Google Cloud, Azure, etc. Cela nous permet de choisir la plateforme qui répond le mieux à nos besoins. Avec Versel, nous sommes limités à la plateforme Versel.

### Compétences techniques

En utilisant une CI de déploiement avec Docker, nous avons besoin de compétences techniques pour configurer et déployer notre application. Cela peut être considéré comme un inconvénient, mais cela nous donne également un plus grand contrôle sur notre infrastructure. Avec Versel, nous n'avons pas besoin de compétences techniques pour déployer notre application.

En somme, nous avons choisi d'utiliser une CI de déploiement avec Docker pour avoir un contrôle total sur l'environnement de production, personnaliser l'infrastructure, réduire les coûts, avoir plus de flexibilité et avoir besoin de compétences techniques pour mieux contrôler notre infrastructure.

## Utilisation de Git

Le projet utilise un système de gestion de version Git pour gérer efficacement les modifications du code source. Trois branches principales sont utilisées pour organiser le flux de travail :

- La branche master est la branche principale qui contient la version de production du code source. Cette branche ne doit être mise à jour que lorsqu'une nouvelle version stable est prête à être déployée.

- La branche dev est utilisée pour le développement continu et est la branche sur laquelle les développeurs travaillent au quotidien. Cette branche contient les dernières modifications en cours et peut contenir des bugs et des erreurs.

- La branche rec (pour recette) est utilisée pour les tests de validation avant la mise en production. Cette branche est créée à partir de dev et contient les modifications terminées qui ont été testées et validées.

En plus des branches principales, des branches de fonctionnalités (features) sont également créées pour les développements spécifiques. Chaque branche de fonctionnalité est nommée selon la convention suivante : ft/nom-de-la-fonctionnalité. Lorsqu'une fonctionnalité est terminée, la branche de fonctionnalité est fusionnée dans dev.

Le système de numérotation de version suit le format suivant : MAJOR.MINOR.PATCH. Le numéro majeur (MAJOR) est mis à jour lorsqu'une nouvelle version avec des fonctionnalités majeures est déployée. Le numéro mineur (MINOR) est mis à jour lorsqu'une nouvelle fonctionnalité est ajoutée. Le numéro de correctif (PATCH) est mis à jour pour les correctifs de bugs mineurs et les améliorations de performances.

## Utilisation des tests unitaires

Dans ce projet, l'utilisation de tests unitaires (.spec.ts) a été mise en place dans le cadre de la méthodologie DevOps. Ces tests permettent de vérifier que chaque fonctionnalité du code est opérationnelle et de prévenir les erreurs avant qu'elles ne se propagent à travers le système.

Les tests unitaires ont été ajoutés dans les processus de build et de déploiement en tant que tâches automatisées pour assurer que chaque nouvelle fonctionnalité ou modification de code est testée avant d'être intégrée à la branche de développement (dev) ou de production (master).

En outre, les tests unitaires ont également permis d'assurer la qualité de l'ensemble du code et de faciliter la maintenance du projet en évitant les régressions. En effet, en cas de modification du code, les tests unitaires associés sont automatiquement lancés pour s'assurer que les fonctionnalités existantes ne sont pas impactées par cette modification.

En somme, l'utilisation des tests unitaires a permis de renforcer la qualité et la stabilité du projet dans le cadre de la méthodologie DevOps.

## Autres types de tests utilisés

## Utilisation de Kubernetes

## Mise en place de la CI en fonction de la branche :
### Branch Master
### Branch Dev
### Branch Rec