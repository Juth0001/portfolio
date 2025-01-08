let currentIndex = 0; // Startposition

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-slide_1, .carousel-slide_2, .carousel-slide_3'); // Alle slides
  const totalSlides = slides.length; // Antal slides

  currentIndex += direction; // Justér indeks afhængigt af retningen

  // Hvis vi er før første slide, gå til sidste
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  // Hvis vi er efter sidste slide, gå til første
  else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Skift positionen af carouselen
  document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}