// ---------- Données des plantes avec images et informations taxonomiques ----------
const plantes = [
  {
    id: "mousse",
    nom: "Mousse commune",
    sci: "Polytrichum commune",
    famille: "Polytrichaceae",
    groupe: "Bryophyte",
    type: "Mousse acrocarpe",
    ico: "🍃",
    image: "images/polytrichum_commune.jpg",
    desc: "Mousse des sous-bois et milieux humides, formant de denses tapis verts et jouant un rôle clé dans la rétention d'eau et la formation des sols."
  },
  {
    id: "fougere",
    nom: "Fougère de Boston",
    sci: "Nephrolepis exaltata",
    famille: "Nephrolepidaceae",
    groupe: "Ptéridophyte",
    type: "Fougère vasculaire",
    ico: "🌿",
    image: "images/nephrolepis_exaltata.jpg",
    desc: "Fougère très élégante aux frondes retombantes, munie de vaisseaux conducteurs mais sans fleur ni graine, se reproduisant par sporanges."
  },
  {
    id: "pin",
    nom: "Pin sylvestre",
    sci: "Pinus sylvestris",
    famille: "Pinaceae",
    groupe: "Gymnosperme",
    type: "Conifère résineux",
    ico: "🌲",
    image: "images/pinus_sylvestris.jpg",
    desc: "Conifère élancé aux graines nues protégées par des cônes lignifiés, adapté aux climats froids et tempérés avec une longévité de plusieurs siècles."
  },
  {
    id: "manguier",
    nom: "Manguier",
    sci: "Mangifera indica",
    famille: "Anacardiaceae",
    groupe: "Angiosperme",
    type: "Dicotylédone",
    ico: "🥭",
    image: "images/mangifera_indica.jpg",
    desc: "Grand arbre fruitier tropical à feuillage persistant, produisant des fleurs odorantes puis des drupes sucrées appréciées dans le monde entier."
  },
  {
    id: "palmier-huile",
    nom: "Palmier à huile",
    sci: "Elaeis guineensis",
    famille: "Arecaceae",
    groupe: "Angiosperme",
    type: "Monocotylédone",
    ico: "🌴",
    image: "images/elaeis_guineensis.jpg",
    desc: "Palmier originaire d'Afrique occidentale, cultivé pour ses régimes de fruits riches en lipides dont on extrait l'huile de palme et l'huile de palmiste."
  },
  {
    id: "cocotier",
    nom: "Cocotier",
    sci: "Cocos nucifera",
    famille: "Arecaceae",
    groupe: "Angiosperme",
    type: "Monocotylédone",
    ico: "🥥",
    image: "images/cocos_nucifera.jpg",
    desc: "Arbre emblématique du littoral tropical, son fruit (noix de coco) est une drupe fibreuse capable de flotter sur l'océan pour coloniser de nouvelles plages."
  },
  {
    id: "mais",
    nom: "Maïs",
    sci: "Zea mays",
    famille: "Poaceae",
    groupe: "Angiosperme",
    type: "Monocotylédone",
    ico: "🌽",
    image: "images/zea_mays.jpg",
    desc: "Grande graminée annuelle originaire du Mexique, base de l'alimentation mondiale, remarquable par son épi femelle enveloppé de spathes."
  },
  {
    id: "baobab",
    nom: "Baobab africain",
    sci: "Adansonia digitata",
    famille: "Malvaceae",
    groupe: "Angiosperme",
    type: "Dicotylédone",
    ico: "🌳",
    image: "images/adansonia_digitata.jpg",
    desc: "Arbre mythique des savanes africaines, capable de stocker des milliers de litres d'eau dans son tronc renflé. Son fruit est surnommé 'pain de singe'."
  },
  {
    id: "hibiscus",
    nom: "Hibiscus de Chine",
    sci: "Hibiscus rosa-sinensis",
    famille: "Malvaceae",
    groupe: "Angiosperme",
    type: "Dicotylédone",
    ico: "🌺",
    image: "images/hibiscus_rosa_sinensis.jpg",
    desc: "Arbuste ornemental aux corolles spectaculaires pourvues d'une longue colonne staminale distinctive, typique de la famille des malvacées."
  },
  {
    id: "moringa",
    nom: "Moringa (Arbre de vie)",
    sci: "Moringa oleifera",
    famille: "Moringaceae",
    groupe: "Angiosperme",
    type: "Dicotylédone",
    ico: "🌱",
    image: "images/moringa_oleifera.jpg",
    desc: "Arbre d'une exceptionnelle valeur nutritive et médicinale, résistant à la sécheresse, dont les feuilles, fleurs et graines sont consommées."
  },
  {
    id: "neem",
    nom: "Neem (Margousier)",
    sci: "Azadirachta indica",
    famille: "Meliaceae",
    groupe: "Angiosperme",
    type: "Dicotylédone",
    ico: "🌳",
    image: "images/azadirachta_indica.jpg",
    desc: "Arbre à feuillage persistant réputé pour ses vertus antiparasitaires, antibactériennes et insecticides biologiques grâce à l'azadirachtine."
  },
  {
    id: "papayer",
    nom: "Papayer",
    sci: "Carica papaya",
    famille: "Caricaceae",
    groupe: "Angiosperme",
    type: "Dicotylédone",
    ico: "🍈",
    image: "images/carica_papaya.jpg",
    desc: "Plante géante à port d'arbre au stipe creux sans bois véritable, produisant la papaye, baie riche en vitamine C et en enzyme papaïne."
  },
  {
    id: "aloe-vera",
    nom: "Aloe vera",
    sci: "Aloe vera",
    famille: "Asphodelaceae",
    groupe: "Angiosperme",
    type: "Monocotylédone",
    ico: "🪴",
    image: "images/aloe_vera.jpg",
    desc: "Plante succulente aux feuilles charnues bordées de petites épines, reconnue mondialement en cosmétique et dermatologie pour son gel hydratant."
  },
  {
    id: "tchiayo",
    nom: "Tchiayo (Basilic africain)",
    sci: "Ocimum gratissimum",
    famille: "Lamiaceae",
    groupe: "Angiosperme",
    type: "Dicotylédone",
    ico: "🌿",
    image: "images/ocimum_gratissimum.jpg",
    desc: "Plante herbacée très aromatique d'Afrique de l'Ouest, riche en eugénol et thymol, incontournable dans les sauces traditionnelles et la pharmacopée."
  }
];

// ---------- Éléments du DOM ----------
const grille = document.getElementById("grille");
const recherche = document.getElementById("recherche");
const filtre = document.getElementById("filtre");
const vide = document.getElementById("vide");
const compteur = document.getElementById("compteur");
const btnReinit = document.getElementById("btn-reinit");

// Modal
const modalPlante = document.getElementById("modal-plante");
const modalFermer = document.getElementById("modal-fermer");
const modalImg = document.getElementById("modal-img");
const modalNom = document.getElementById("modal-nom");
const modalSci = document.getElementById("modal-sci");
const modalGroupe = document.getElementById("modal-groupe");
const modalTags = document.getElementById("modal-tags");
const modalDesc = document.getElementById("modal-desc");

// ---------- Normalisation de texte (sans accents) ----------
function normaliser(texte) {
  if (!texte) return "";
  return texte.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// ---------- Affichage des fiches ----------
function afficher() {
  const terme = normaliser(recherche.value.trim());
  const groupeSelectionne = filtre.value;

  const resultats = plantes.filter(function (p) {
    const correspondGroupe = groupeSelectionne === "tous" || p.groupe === groupeSelectionne;
    const contenuIndexe = normaliser(`${p.nom} ${p.sci} ${p.famille} ${p.type} ${p.desc}`);
    const correspondTerme = !terme || contenuIndexe.includes(terme);
    return correspondGroupe && correspondTerme;
  });

  // Mise à jour de la grille
  grille.innerHTML = resultats.map(function (p, index) {
    return `
      <article class="plante" data-id="${p.id}" tabindex="0" title="Cliquer pour voir la fiche détaillée de ${p.nom}">
        <div class="plante-media">
          <img src="${p.image}" alt="${p.nom}" loading="lazy" class="plante-img" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'plante-ico-fallback\\'>${p.ico}</div>';">
          <span class="plante-badge-groupe">${p.groupe}</span>
        </div>
        <div class="plante-corps">
          <div class="plante-entete">
            <h3>${p.nom}</h3>
            <span class="plante-ico-mini">${p.ico}</span>
          </div>
          <div class="sci"><em>${p.sci}</em></div>
          <p class="plante-desc">${p.desc}</p>
          <div class="tags">
            <span class="tag tag-famille"><i class="fa-solid fa-folder-tree"></i> ${p.famille}</span>
            <span class="tag tag-type"><i class="fa-solid fa-seedling"></i> ${p.type}</span>
          </div>
          <button class="btn-consulter" type="button">
            <i class="fa-solid fa-eye"></i> Voir le spécimen
          </button>
        </div>
      </article>
    `;
  }).join("");

  // Affichage / masquage du message "vide"
  vide.style.display = resultats.length === 0 ? "block" : "none";

  // Compteur
  if (compteur) {
    const total = plantes.length;
    if (resultats.length === total) {
      compteur.textContent = `Affichage de toutes les plantes (${total} espèces répertoriées)`;
    } else {
      compteur.textContent = `${resultats.length} plante(s) trouvée(s) sur ${total}`;
    }
  }

  // Écouteur de clic sur les cartes pour ouvrir la modale
  grille.querySelectorAll(".plante").forEach(function (card) {
    card.addEventListener("click", function () {
      const id = card.getAttribute("data-id");
      const plante = plantes.find(p => p.id === id);
      if (plante) ouvrirModal(plante);
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// ---------- Gestion de la modale ----------
function ouvrirModal(plante) {
  modalImg.src = plante.image;
  modalImg.alt = plante.nom;
  modalNom.textContent = plante.nom;
  modalSci.innerHTML = `<em>${plante.sci}</em>`;
  modalGroupe.textContent = plante.groupe;
  modalDesc.textContent = plante.desc;

  modalTags.innerHTML = `
    <span class="tag tag-famille"><i class="fa-solid fa-folder-tree"></i> Famille : ${plante.famille}</span>
    <span class="tag tag-groupe"><i class="fa-solid fa-layer-group"></i> Groupe : ${plante.groupe}</span>
    <span class="tag tag-type"><i class="fa-solid fa-seedling"></i> Type : ${plante.type}</span>
  `;

  modalPlante.style.display = "flex";
  modalPlante.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function fermerModal() {
  modalPlante.style.display = "none";
  modalPlante.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Écouteurs de fermeture modale
if (modalFermer) {
  modalFermer.addEventListener("click", fermerModal);
}
if (modalPlante) {
  modalPlante.addEventListener("click", function (e) {
    if (e.target === modalPlante) fermerModal();
  });
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modalPlante.style.display === "flex") {
    fermerModal();
  }
});

// ---------- Réinitialisation des filtres ----------
if (btnReinit) {
  btnReinit.addEventListener("click", function () {
    recherche.value = "";
    filtre.value = "tous";
    afficher();
  });
}

// ---------- Événements de recherche et filtrage ----------
recherche.addEventListener("input", afficher);
filtre.addEventListener("change", afficher);

// ---------- Année dynamique dans le pied de page ----------
const anneeSpan = document.getElementById("annee");
if (anneeSpan) {
  anneeSpan.textContent = new Date().getFullYear();
}

// ---------- Initialisation au chargement ----------
afficher();