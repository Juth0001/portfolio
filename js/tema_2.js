let currentIndex = 0;

function moveSlide(direction, carouselClass) {
    const container = document.querySelector(`.${carouselClass}`);
    const slides = container.querySelectorAll(':scope > div');

    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Wrap to the last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Wrap to the first slide
    }

    const offset = -currentIndex * 100; // Each image takes 100% width
    container.style.transform = `translateX(${offset}%)`;
}