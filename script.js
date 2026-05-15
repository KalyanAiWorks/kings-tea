// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.style.display = 'none';
        }
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! Raju will get back to you soon. 👑');
        this.reset();
    });
}

// Close mobile menu when window is resized
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu) {
        navMenu.style.display = 'flex';
    }
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.boxShadow = '';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.menu-card, .gallery-card, .highlight-card, .info-card, .contact-method, .about-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// WhatsApp message pre-fill
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    const message = "Hello King's Tea, I'd like to know more about your teas";
    const encodedMessage = encodeURIComponent(message);
    const href = link.getAttribute('href');
    if (!href.includes('text=')) {
        link.setAttribute('href', href + '?text=' + encodedMessage);
    }
});

// Phone click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('User initiated call to: +91 95736 70074');
    });
});

// Google Maps link
document.querySelectorAll('a[href*="maps.google.com"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Opening Google Maps for KING\'S TEA');
    });
});

// Active section highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    console.log('KING\'S TEA Website loaded successfully! 👑');
    console.log('Owner: Raju | Phone: +91 95736 70074');
});

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        const scrollY = window.scrollY;
        const heroTop = document.querySelector('.hero').offsetTop;
        if (scrollY < heroTop + window.innerHeight) {
            hero.style.opacity = 1 - scrollY / (heroTop + window.innerHeight);
            hero.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }
});

// Console message
console.log('%c👑 KING\'S TEA - Taste The Royal Flavour 👑', 'color: #D4AF37; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);');
console.log('%cOwner: Raju | Phone: +91 95736 70074', 'color: #D4AF37; font-size: 14px;');
console.log('%cLocation: Hyderabad, Telangana', 'color: #D4AF37; font-size: 14px;');
