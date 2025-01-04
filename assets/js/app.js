import utils from './utils.js';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Initialize lazy loading
  utils.lazyLoadImages();

  // Setup smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      utils.scrollTo(anchor.getAttribute('href'));
    });
  });

  // Setup form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (utils.validateForm(form)) {
        // Handle form submission
        console.log('Form submitted');
      }
    });
  });

  // Setup responsive menu
  const menuToggle = document.querySelector('.menuToggle');
  const menu = document.querySelector('#menu');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      document.body.classList.toggle('is-menu-visible');
    });
  }

  // Setup scroll animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  });

  animatedElements.forEach(el => observer.observe(el));
});