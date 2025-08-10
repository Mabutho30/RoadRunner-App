// script.js

// Opens the modal popup with the clicked image and caption
function openModal(src, caption) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');

  modal.style.display = "block";
  modalImg.src = src;
  modalCaption.textContent = caption;
}

// Closes the modal popup
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = "none";
}

// Optional: Close modal on pressing 'Escape' key
document.addEventListener('keydown', function(event) {
  const modal = document.getElementById('modal');
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// Toggle mobile nav menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('nav .hamburger');
  const navLinks = document.querySelector('nav .nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});
