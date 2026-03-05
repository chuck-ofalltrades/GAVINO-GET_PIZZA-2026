// js/slider.js

document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const track = document.getElementById('review-track');
  const dots = document.getElementById('review-dots').querySelectorAll('button');
  const totalSlides = dots.length;

  // Make goToSlide available globally so the HTML buttons can use it
  window.goToSlide = function(index) {
    currentSlide = index;
    updateSlider();
  };

  function updateSlider() {
    // Slide the track left or right based on the current index
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dot colors
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('bg-primary');
        dot.classList.remove('bg-gray-300');
      } else {
        dot.classList.add('bg-gray-300');
        dot.classList.remove('bg-primary');
      }
    });
  }

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }, 5000);
});