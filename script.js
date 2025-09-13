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
