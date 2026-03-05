// js/slider.js

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.review-slide');
  let currentSlide = 0;
  const totalSlides = slides.length;

  // Safety check
  if (totalSlides === 0) return;

  function updateSlider() {
    // 1. Hide all slides
    for (let i = 0; i < totalSlides; i++) {
      slides[i].classList.add('hidden');
      slides[i].classList.remove('flex');
    }

    // 2. Show ONLY the current slide
    slides[currentSlide].classList.remove('hidden');
    slides[currentSlide].classList.add('flex');
  }

  // 3. Autoplay: automatically switch slides every 4 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }, 4000);
});