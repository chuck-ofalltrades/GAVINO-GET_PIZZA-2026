// js/accordion.js

document.addEventListener("DOMContentLoaded", () => {
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      // Find the content div right next to the clicked button
      const content = this.nextElementSibling;
      // Find the chevron icon inside the clicked button
      const icon = this.querySelector(".chevron");

      // Toggle the 'hidden' class to show/hide the content
      content.classList.toggle("hidden");
      
      // Rotate the chevron 180 degrees (from Up to Down, or Down to Up)
      icon.classList.toggle("rotate-180");
    });
  });
});