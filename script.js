document.addEventListener('DOMContentLoaded', function() {
  // Modal functionality
  const modal = document.getElementById('contactModal');
  const btn = document.getElementById('getLazyBtn');
  const closeBtn = document.getElementsByClassName('close')[0];
  const contactForm = document.getElementById('contactForm');

  btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = 'block';
  }

  closeBtn.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  contactForm.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:rohith.kuruvilla.p@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    modal.style.display = 'none';
  }

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if(this.getAttribute('id') !== 'getLazyBtn') {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
