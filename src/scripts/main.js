// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU TOGGLE =====
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ===== SCROLL REVEAL ANIMATION =====
function revealOnScroll() {
    const revealElements = document.querySelectorAll('.service-card, .dest-card, .contact-info, .contact-form');
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}

// ===== ACTIVE NAV LINK HIGHLIGHT =====
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--primary)';
            }
        });
    });
}

// ===== CONTACT FORM HANDLER =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) return;

    // Simulate form submission
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        formSuccess.style.display = 'block';
        contactForm.reset();
        submitBtn.textContent = 'Send Message ✉️';
        submitBtn.disabled = false;

        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 4000);
    }, 1200);
});

// ===== SMOOTH SCROLL FOR ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== NEWSLETTER FORM HANDLER =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        const btn = newsletterForm.querySelector('button');
        if (!emailInput.value) return;
        btn.textContent = 'Subscribing...';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = '✅ Subscribed!';
            emailInput.value = '';
            setTimeout(() => {
                btn.textContent = 'Subscribe';
                btn.disabled = false;
            }, 3000);
        }, 1000);
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    updateActiveLink();
    console.log('PlanTrip website loaded successfully ✈️');
});
