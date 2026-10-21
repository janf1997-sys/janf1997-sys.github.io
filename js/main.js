document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ==========================================================================
     1. Typewriter Animation (Header Logo)
     ========================================================================== */
  const typewriterElement = document.getElementById('typewriter-text');
  const word = 'janf';
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 160;
  let typewriterTimer = null;

  function typeEffect() {
    if (!typewriterElement || prefersReducedMotion.matches || document.hidden) return;

    if (isDeleting) {
      charIndex--;
      typewriterElement.textContent = word.substring(0, charIndex);
      typingSpeed = 90; // Faster deleting speed for realistic typing feel
    } else {
      charIndex++;
      typewriterElement.textContent = word.substring(0, charIndex);
      typingSpeed = 160;
    }

    // State switching & pause duration
    if (!isDeleting && charIndex === word.length) {
      typingSpeed = 3000; // 3s pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typingSpeed = 600; // Brief pause before retyping
    }

    typewriterTimer = setTimeout(typeEffect, typingSpeed);
  }

  function startTypewriter() {
    if (!typewriterElement) return;
    if (prefersReducedMotion.matches) {
      clearTimeout(typewriterTimer);
      typewriterElement.textContent = word;
      return;
    }
    clearTimeout(typewriterTimer);
    typeEffect();
  }

  if (typewriterElement) {
    startTypewriter();

    // Pause animation when browser tab is in the background
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearTimeout(typewriterTimer);
      } else {
        startTypewriter();
      }
    });

    prefersReducedMotion.addEventListener('change', startTypewriter);
  }

  /* ==========================================================================
     2. Smooth Scroll Navigation
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href');

      // Intercept valid internal anchor links only; guard against bare '#'
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  /* ==========================================================================
     3. Responsive Sidebar Accordion Controller
     ========================================================================== */
  const sidebarSections = document.querySelectorAll('.sidebar-section');
  const mobileBreakpoint = window.matchMedia('(max-width: 767px)');

  /**
   * Toggles the 'open' attribute and keyboard focusability on details elements:
   * - Mobile (<= 767px): Collapsed by default (interactive accordion)
   * - Tablet & Desktop (> 767px): Permanently expanded & removed from tab order
   */
  function updateSidebarState(e) {
    sidebarSections.forEach(section => {
      const summary = section.querySelector('.sidebar-title');
      if (e.matches) {
        section.removeAttribute('open');
        if (summary) summary.removeAttribute('tabindex');
      } else {
        section.setAttribute('open', '');
        if (summary) summary.setAttribute('tabindex', '-1');
      }
    });
  }

  if (sidebarSections.length > 0) {
    // Prevent keyboard or programmatic toggling on Tablet/Desktop (> 767px)
    sidebarSections.forEach(section => {
      const summary = section.querySelector('.sidebar-title');
      if (!summary) return;

      summary.addEventListener('click', event => {
        if (!mobileBreakpoint.matches) {
          event.preventDefault();
        }
      });

      summary.addEventListener('keydown', event => {
        if (!mobileBreakpoint.matches && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
        }
      });
    });

    // Initial execution on DOM load
    updateSidebarState(mobileBreakpoint);

    // Listen for viewport updates (e.g. window resize or device orientation)
    mobileBreakpoint.addEventListener('change', updateSidebarState);
  }
});

