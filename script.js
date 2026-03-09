/* ============================================
   Anna Josephson Website — Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Mobile Nav Toggle ----
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ---- Scroll Fade-In Animations ----
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show everything
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // ---- Publication Filtering ----
  const filterButtons = document.querySelectorAll('.pub-filter');
  const pubCards = document.querySelectorAll('.pub-card[data-tags]');

  if (filterButtons.length > 0 && pubCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active state
        filterButtons.forEach(b => b.classList.remove('pub-filter--active'));
        btn.classList.add('pub-filter--active');

        // Filter cards
        pubCards.forEach(card => {
          if (filter === 'all') {
            card.dataset.hidden = 'false';
            card.style.display = '';
          } else {
            const tags = card.dataset.tags.split(',').map(t => t.trim());
            if (tags.includes(filter)) {
              card.dataset.hidden = 'false';
              card.style.display = '';
            } else {
              card.dataset.hidden = 'true';
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // ---- Active Nav Link Highlighting ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    link.classList.remove('nav__link--active');
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // ---- Smooth Nav Shadow on Scroll ----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
      } else {
        navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
      }
      lastScroll = scrollY;
    }, { passive: true });
  }
});
