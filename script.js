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
function closeModal(event) {
  // Prevent click inside modal content from closing it
  if (event && event.target.id === 'modal-img') return;
  const modal = document.getElementById('modal');
  modal.style.display = "none";
}

// Close modal on pressing 'Escape' key
document.addEventListener('keydown', function(event) {
  const modal = document.getElementById('modal');
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// Toggle mobile nav menu on click and keyboard for accessibility
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('nav .hamburger');
  const navLinks = document.querySelector('nav .nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Toggle menu on Enter or Space key for accessibility
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navLinks.classList.toggle('show');
      }
    });
  }
});
