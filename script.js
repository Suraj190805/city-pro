// ── NAVBAR SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

function closeMobile() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

// ── SCROLL REVEAL (Intersection Observer) ──
function createObserver(selector, stagger = 120) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.style.transition = `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s`;
        }, i * stagger);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

createObserver('.service-card', 150);
createObserver('.premium-card', 180);
createObserver('.feature-card', 100);
createObserver('.process-step', 120);
createObserver('.testimonial-card', 130);

// ── COUNTER ANIMATION ──
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 2000;
        const startTime = performance.now();
        const accent = el.querySelector('.accent');

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(eased * target);

          if (target >= 1000) {
            el.textContent = current.toLocaleString('en-IN');
          } else {
            el.textContent = current;
          }
          if (accent) el.appendChild(accent);

          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}
animateCounters();

// ── CONTACT FORM ──
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

// Enhanced form validation
function validateForm() {
  const name = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('serviceType').value;

  let isValid = true;

  // Name validation
  if (!name || name.length < 2) {
    showFieldError('fullName', 'Please enter a valid name (minimum 2 characters)');
    isValid = false;
  } else {
    clearFieldError('fullName');
  }

  // Phone validation (10-15 digits)
  const phoneRegex = /^[0-9\s\-\+\(\)]{10,15}$/;
  if (!phone || !phoneRegex.test(phone.replace(/\s/g, ''))) {
    showFieldError('phone', 'Please enter a valid phone number');
    isValid = false;
  } else {
    clearFieldError('phone');
  }

  // Email validation (if provided)
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFieldError('email', 'Please enter a valid email address');
      isValid = false;
    } else {
      clearFieldError('email');
    }
  } else {
    clearFieldError('email');
  }

  // Service selection validation
  if (!service) {
    showFieldError('serviceType', 'Please select a service');
    isValid = false;
  } else {
    clearFieldError('serviceType');
  }

  return isValid;
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.style.borderColor = '#e53935';
  field.style.boxShadow = '0 0 0 4px rgba(229, 57, 53, 0.12)';
  field.classList.add('error');

  // Show error message
  let errorDiv = field.nextElementSibling;
  if (!errorDiv || !errorDiv.classList.contains('error-message')) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
  }
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
}

function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  field.style.borderColor = '';
  field.style.boxShadow = '';
  field.classList.remove('error');
  const errorDiv = field.nextElementSibling;
  if (errorDiv && errorDiv.classList.contains('error-message')) {
    errorDiv.style.display = 'none';
  }
}

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if (!validateForm()) return;

  // Submit animation
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.textContent = '✓ Quote Requested!';
    submitBtn.classList.add('success');

    // In a real app, you would send data to backend here
    console.log({
      name: document.getElementById('fullName').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      service: document.getElementById('serviceType').value,
      from: document.getElementById('fromCity').value,
      to: document.getElementById('toCity').value,
      message: document.getElementById('message').value
    });

    setTimeout(() => {
      contactForm.reset();
      submitBtn.textContent = 'Get My Free Quote';
      submitBtn.classList.remove('success');
      submitBtn.disabled = false;
    }, 2500);
  }, 1200);
});

// Clear error messages when user starts typing
['fullName', 'phone', 'email', 'serviceType'].forEach(id => {
  const field = document.getElementById(id);
  field.addEventListener('input', () => clearFieldError(id));
  field.addEventListener('change', () => clearFieldError(id));
});

function shakeField(id) {
  const field = document.getElementById(id);
  field.style.animation = 'shake 0.4s ease';
  setTimeout(() => {
    field.style.animation = '';
  }, 600);
}

// Add shake keyframes dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);

// ── SMOOTH SCROLL for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

// ── PARALLAX on hero image ──
const heroImg = document.querySelector('.hero-image-wrapper img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < 800) {
      heroImg.style.transform = `scale(${1 + scrolled * 0.0001}) translateY(${scrolled * 0.05}px)`;
    }
  }, { passive: true });
}
