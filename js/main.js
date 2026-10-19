document.addEventListener('DOMContentLoaded', () => {
  const typewriterElement = document.getElementById('typewriter-text');
  const word = 'janf';
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 160;

  function typeEffect() {
    if (!typewriterElement) return;

    if (isDeleting) {
      charIndex--;
      typewriterElement.textContent = word.substring(0, charIndex);
      typingSpeed = 90;
    } else {
      charIndex++;
      typewriterElement.textContent = word.substring(0, charIndex);
      typingSpeed = 160;
    }

    if (!isDeleting && charIndex === word.length) {
      typingSpeed = 3000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typingSpeed = 600;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typewriterElement) {
    typeEffect();
  }

  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

