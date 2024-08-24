window.addEventListener('scroll', function() {
    const dividers = document.querySelectorAll('hr');
    const navLinks = document.querySelectorAll('.nav-link');
  
    let current = 'home'; // Default to "home" section
  
    dividers.forEach(divider => {
      const dividerTop = divider.offsetTop;
      const dividerHeight = divider.offsetHeight;
      
      // If the scroll position is below the divider, update the current section
      if (pageYOffset >= dividerTop - dividerHeight / 3) {
        current = divider.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      } else if (current === 'home' && link.getAttribute('href') === '#home') {
        link.classList.add('active');
      }
    });
  });
  