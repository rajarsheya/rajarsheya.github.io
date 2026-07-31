/* ==================== MOBILE NAVIGATION ==================== */
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');

function openMenu() {
    if (!navMenu) return;
    navMenu.classList.add('show');
    document.body.classList.add('menu-open');
    navToggle?.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    if (!navMenu) return;
    navMenu.classList.remove('show');
    document.body.classList.remove('menu-open');
    navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', openMenu);
navClose?.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
});

/* ==================== HEADER ON SCROLL ==================== */
const header = document.getElementById('site-header');

function updateHeader() {
    if (!header) return;
    header.classList.toggle('header-scrolled', window.scrollY > 12);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* ==================== ACTIVE SECTION LINK ==================== */
const sections = document.querySelectorAll('section[id]');
const sectionLinks = document.querySelectorAll('.nav__link[href*="#"]');

function scrollActive() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
        const id = section.getAttribute('id');
        if (!id) return;

        const link = document.querySelector(`.nav__link[href*="#${id}"]`);
        if (!link) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        link.classList.toggle('active-link', scrollPosition >= top && scrollPosition < bottom);
    });
}

window.addEventListener('scroll', scrollActive, { passive: true });
scrollActive();

/* ==================== SCROLL REVEAL ==================== */
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '28px',
        duration: 850,
        delay: 80,
        interval: 70,
        opacity: 0,
        easing: 'cubic-bezier(.2,.8,.2,1)',
        reset: false,
        mobile: true
    });

    sr.reveal('.reveal');
}

/* ==================== IMAGE / IFRAME SAFETY ==================== */
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.style.opacity = '0.35';
    });
});
