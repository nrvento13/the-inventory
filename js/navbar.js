// JavaScript
window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      changeNavbarColorOnScroll(navbar);
    });
  });
  
  function changeNavbarColorOnScroll(navbar) {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }