// Smooth scroll animation for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior:'smooth' });
  });
});

// Contact form placeholder functionality
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! I’ll get back to you soon.');
  e.target.reset();
});
// Hamburger menu toggle
const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', () => {
  // --- Smooth scroll for nav links ---
  document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth' });

      // If on small screen, close the mobile menu after clicking a link
      if (window.innerWidth <= 767) {
        navList.classList.remove('show');
        toggleButton.classList.remove('open');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // --- Contact form placeholder functionality ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for reaching out! I’ll get back to you soon.');
      contactForm.reset();
    });
  }

  // --- Hamburger toggle behavior ---
  const toggleButton = document.querySelector('.menu-toggle');
  const navList = document.getElementById('primary-navigation');

  if (toggleButton && navList) {
    toggleButton.addEventListener('click', (e) => {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', String(!isExpanded));
      toggleButton.classList.toggle('open');
      navList.classList.toggle('show');
    });

    // Close when clicking outside the navbar (mobile)
    document.addEventListener('click', (e) => {
      if (window.innerWidth > 767) return; // only on mobile
      if (!e.target.closest('.navbar')) {
        navList.classList.remove('show');
        toggleButton.classList.remove('open');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navList.classList.remove('show');
        toggleButton.classList.remove('open');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
