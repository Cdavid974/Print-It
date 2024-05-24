
  const arrowLeft = document.querySelector(".arrow_left");
  const arrowRight = document.querySelector(".arrow_right");
  const dotContainer = document.querySelector(".dots ");

  const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  let currentSlideIndex = 0;

  function showSlide(index) {
    const slide = slides[index];
    const bannerImg = document.querySelector(".banner-img");
    const bannerText = document.querySelector(".banner-text");

    bannerImg.src = "./assets/images/slideshow/" + slide.image;
    bannerText.innerHTML = slide.tagLine;
  }

  showSlide(currentSlideIndex);

  arrowLeft.addEventListener("click", function () {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
    updateDots(currentSlideIndex);
  });

  arrowRight.addEventListener("click", function () {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
    updateDots(currentSlideIndex);
  });

  // Créer les bullet points dynamiquement
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", function () {
      currentSlideIndex = i;
      showSlide(currentSlideIndex);
      updateDots(currentSlideIndex);
    });
    dotContainer.appendChild(dot);
  }

  // Fonction pour mettre à jour les bullet points en fonction de la diapositive actuelle
  function updateDots(currentIndex) {
    const dots = dotContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
        dot.classList.add("dot_selected"); // Ajouter la classe dot_selected à l'élément actif
      } else {
        dot.classList.remove("active");
        dot.classList.remove("dot_selected"); // Supprimer la classe dot_selected des autres éléments
      }
    });
  }
;
