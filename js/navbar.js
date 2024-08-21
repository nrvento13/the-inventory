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

document.addEventListener('click', function(event) {
  const isClickInside = document.getElementById('navbarNav').contains(event.target);
  const isNavbarToggler = event.target.classList.contains('navbar-toggler');
  
  if (!isClickInside && !isNavbarToggler) {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).toggle();
      }
  }
});