# 🌿 Mon Herbier — Guide & Classification Botanique

> **Herbier numérique interactif** conçu pour explorer la richesse du règne végétal, comprendre la classification scientifique moderne et s'initier à la nomenclature binominale.

[![Licence: MIT](https://img.shields.io/badge/Licence-MIT-green.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)

---

## 📌 Présentation du Projet

Ce projet propose une interface pédagogique, moderne et interactive permettant aux étudiants, passionnés de nature et botanistes de :
1. **Comprendre la hiérarchie taxinomique** à travers les 7 rangs fondamentaux (Règne, Embranchement, Classe, Ordre, Famille, Genre, Espèce) avec l'exemple détaillé du **Manguier** (*Mangifera indica*).
2. **Découvrir les quatre grands groupes végétaux** selon leurs innovations évolutives :
   - 🍃 **Bryophytes** (Mousses et hépatiques — non vasculaires, reproduction par spores).
   - 🌿 **Ptéridophytes** (Fougères — vasculaires, sans graines).
   - 🌲 **Gymnospermes** (Conifères — vasculaires à graines nues et cônes).
   - 🌸 **Angiospermes** (Plantes à fleurs et fruits — le groupe dominant).
3. **Explorer un catalogue illustré** de spécimens végétaux avec moteur de recherche instantané, filtrage par groupe et fiches macroscopiques détaillées.

---

## 📸 Fonctionnalités Clés

* 🔍 **Recherche instantanée insensible aux accents** : trouvez une plante par nom commun, nom scientifique binominal, famille ou mot-clé descriptif.
* 🏷️ **Filtres taxonomiques** : triez instantanément les spécimens par grand groupe.
* 🖼️ **Spécimens photographiques réels** : galerie d'images haute résolution pour chaque espèce.
* 🔬 **Modale d'observation détaillée** : cliquez sur n'importe quelle carte pour afficher la fiche complète du spécimen.
* 🌓 **Design responsive & Mode sombre automatique** : s'adapte aux smartphones, tablettes et ordinateurs.
* 💬 **Contact direct WhatsApp** : bouton d'échange pour collaboration botanique ou développement web.

---

## 📁 Structure du Répertoire

```text
Botanique/
├── index.html            # Structure sémantique du site et de l'herbier
├── style.css             # Feuille de style, typographies et mode sombre
├── script.js             # Logique interactive, catalogue de données et recherche
├── package.json          # Métadonnées du projet et commandes npm
├── server.ps1            # Serveur local de développement natif PowerShell
├── start-server.bat      # Lanceur rapide en un double-clic sous Windows
├── README.md             # Documentation officielle du projet
└── images/               # Photographies botaniques haute résolution
    ├── bryophytes.jpg
    ├── pteridophytes.jpg
    ├── gymnospermes.jpg
    ├── angiospermes.jpg
    ├── mangifera_indica.jpg
    ├── adansonia_digitata.jpg
    ├── aloe_vera.jpg
    ├── azadirachta_indica.jpg
    ├── carica_papaya.jpg
    ├── cocos_nucifera.jpg
    ├── elaeis_guineensis.jpg
    ├── hibiscus_rosa_sinensis.jpg
    ├── moringa_oleifera.jpg
    ├── nephrolepis_exaltata.jpg
    ├── ocimum_gratissimum.jpg
    ├── pinus_sylvestris.jpg
    ├── polytrichum_commune.jpg
    ├── zea_mays.jpg
    └── botany_hero.jpg
```

---

## 🚀 Démarrage en Local

### Option 1 : Lanceur rapide (Windows)
Double-cliquez simplement sur le fichier **`start-server.bat`**. Le serveur démarrera automatiquement et vous pourrez ouvrir votre navigateur à l'adresse :
👉 **`http://localhost:8000`**

### Option 2 : PowerShell
Ouvrez PowerShell dans le dossier du projet et exécutez :
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```

### Option 3 : Tout autre serveur HTTP
Vous pouvez également utiliser Python, Node.js ou l'extension *Live Server* de VS Code :
```bash
# Avec Python
python -m http.server 8000

# Avec npx
npx serve .
```

---

## 🌐 Déploiement sur GitHub Pages

Pour héberger gratuitement ce site en ligne avec GitHub Pages :
1. Rendez-vous sur votre dépôt GitHub : `https://github.com/kirikou31953/Botanique`
2. Allez dans **Settings** > **Pages**.
3. Dans la section **Build and deployment** :
   * **Source** : `Deploy from a branch`
   * **Branch** : `main` / `/ (root)`
4. Cliquez sur **Save**. Votre site sera consultable en ligne à l'adresse :
   `https://kirikou31953.github.io/Botanique/`

---

## 👨‍💻 Auteur

* **Samuel** — Développeur Web & Passionné de botanique
* WhatsApp : [+229 01 62 00 05 92](https://wa.me/2290162000592)
