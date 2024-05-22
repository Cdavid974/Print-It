document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner l'élément conteneur des bullet points
  const dotContainer = document.querySelector(".dots .dot");

  // Compter le nombre d'éléments dans le tableau slides
  const numSlides = slides.length;

  // Créer les bullet points dynamiquement
  for (let i = 0; i < numSlides; i++) {
    // Créer un nouvel élément span pour chaque bullet point
    const dot = document.createElement("span");
    dot.classList.add("dot_selected"); // Ajouter la classe commune à tous les bullet points
    dot.setAttribute("onclick", `currentSlide(${i + 1})`); // Ajouter un attribut onclick pour changer de diapositive
    dotContainer.appendChild(dot); // Ajouter le bullet point au conteneur
  }
  function updateDots(currentIndex) {
    // Supprimer la classe active de tous les bullet points
    dots.forEach((dot) => dot.classList.remove("active"));
    // Ajouter la classe active uniquement au bullet point correspondant à la diapositive actuelle
    dots[currentIndex].classList.add("active");
  }

  // Définir le premier bullet point comme actif
  const dots = dotContainer.querySelectorAll("span");
  dots[0].classList.add("active");

  // Fonction pour mettre à jour les bullet points en fonction de la diapositive actuelle
  function updateDots(currentIndex) {
    // Supprimer la classe active de tous les bullet points
    dots.forEach((dot) => dot.classList.remove("active"));
    // Ajouter la classe active au bullet point correspondant à la diapositive actuelle
    dots[currentIndex].classList.add("active");
  }

  // ...
});
