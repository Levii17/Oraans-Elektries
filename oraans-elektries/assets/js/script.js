  document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });

      document.querySelectorAll('.nav-links a, .nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
        });
      });
    }

    // Remove loading class to show content (if using loading state)
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');

    // Animate service and testimonial cards on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
      observer.observe(card);
    });

    // Navbar background change on scroll
    const header = document.querySelector('header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(255, 255, 255, 0.95)';
          header.style.backdropFilter = 'blur(10px)';
        } else {
          header.style.background = 'var(--white)';
          header.style.backdropFilter = 'none';
        }
      });
    }

    // Optional: highlight nav links by scroll position
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  });

  // Scroll to top function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Language toggle function
  function changeLang(lang) {
    document.querySelectorAll('[data-af]').forEach(el => {
      const translation = el.getAttribute(`data-${lang}`);
      if (translation) {
        el.textContent = translation;
      }
    });
  }

  // Service details modal simulation
  function showServiceDetails(service) {
    alert(`${service.charAt(0).toUpperCase() + service.slice(1)} details would be shown here.`);
  }

  // Add floating animation to buttons
  setInterval(() => {
    document.querySelectorAll('.floating-btn').forEach(btn => {
      btn.style.animation = 'float 2s ease-in-out infinite';
    });
  }, 3000);