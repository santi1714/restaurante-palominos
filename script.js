let currentRating = 0;
let currentSlide = 0;
let slideInterval;

function openMenu() {
  document.getElementById('sideNav').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeMenu() {
  document.getElementById('sideNav').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }

  const links = document.querySelectorAll('.side-nav-links a');
  links.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(sectionId)) {
      link.classList.add('active-link');
    }
  });

  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setRating(rating) {
  currentRating = rating;
  const stars = document.querySelectorAll('.star-rating span');
  stars.forEach((star, idx) => {
    if (idx < rating) {
      star.classList.add('active-star');
    } else {
      star.classList.remove('active-star');
    }
  });
}

function startSlider() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;

  slideInterval = setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  startSlider();
});