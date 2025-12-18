// Translations
const translations = {
    en: {
        tagline: "Designer, Animator & Visual Storyteller",
        intro: "Crafting digital experiences that blend motion, color, and texture. Specializing in brand identity, web design, and experimental animation.",
        contact: "hello@tnzs.design",
        projects: "projects",
        cta: "View Projects ↓",
        back: "← Back to Projects",
        translate: "Translate",
        menuHome: "Home",
        menuShop: "Shop",
        menuAbout: "About",
        menuContact: "Contact",
    },
    es: {
        tagline: "Diseñador, Animador y Narrador Visual",
        intro: "Creando experiencias digitales que combinan movimiento, color y textura. Especializado en identidad de marca, diseño web y animación experimental.",
        contact: "hola@tnzs.design",
        projects: "proyectos",
        cta: "Ver Proyectos ↓",
        back: "← Volver a Proyectos",
        translate: "Traducir",
        menuHome: "Inicio",
        menuShop: "Tienda",
        menuAbout: "Acerca de",
        menuContact: "Contacto"
    }
};

// State
let currentLang = 'en';
let currentPage = 'home';
let projects = [];

// DOM Elements
const logo = document.getElementById('logo');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const homePage = document.getElementById('home-page');
const projectPage = document.getElementById('project-page');
const projectsGrid = document.getElementById('projects-grid');
const projectContent = document.getElementById('project-content');
const backBtn = document.getElementById('back-btn');

// Initialize
async function init() {
    await loadProjects();
    renderProjects();
    setupEventListeners();
    handleScroll();
}

// Load projects from JSON
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        projects = await response.json();
    } catch (error) {
        console.error('Error loading projects:', error);
        projects = getDefaultProjects();
    }
}

// Default projects if JSON fails
function getDefaultProjects() {
    return [
        { id: 1, slug: "ethereal-dreams", title: "Ethereal Dreams", description: "A visual exploration of surreal landscapes.", images: ["https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800"], tags: ["Branding", "Motion"], colors: { primary: "#FF6B9D" } },
        { id: 2, slug: "urban-pulse", title: "Urban Pulse", description: "A dynamic web experience.", images: ["https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800"], tags: ["Web", "UI/UX"], colors: { primary: "#6C5CE7" } },
        { id: 3, slug: "botanical-series", title: "Botanical Series", description: "Illustrated collection.", images: ["https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800"], tags: ["Illustration"], colors: { primary: "#00B894" } },
        { id: 4, slug: "neon-nights", title: "Neon Nights", description: "Retro-futuristic animation.", images: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800"], tags: ["Motion"], colors: { primary: "#FD79A8" } },
        { id: 5, slug: "minimal-luxury", title: "Minimal Luxury", description: "High-end e-commerce.", images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"], tags: ["Web"], colors: { primary: "#2D3436" } },
        { id: 6, slug: "sound-waves", title: "Sound Waves", description: "Music platform identity.", images: ["https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800"], tags: ["UI/UX"], colors: { primary: "#0984E3" } },
        { id: 7, slug: "earth-tones", title: "Earth Tones", description: "Sustainable fashion brand.", images: ["https://images.unsplash.com/photo-1558769132-cb1aea41c2a1?w=800"], tags: ["Branding"], colors: { primary: "#A0522D" } },
        { id: 8, slug: "digital-garden", title: "Digital Garden", description: "Interactive portfolio.", images: ["https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800"], tags: ["Web"], colors: { primary: "#55EFC4" } }
    ];
}

// Render projects grid
function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-slug="${project.slug}">
            <div class="project-shadow"></div>
            <div class="project-image-wrapper">
                <img src="${project.images[0]}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    <h3 class="project-title">${project.title}</h3>
                </div>
            </div>
        </div>
    `).join('');

    // Add click listeners
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const slug = card.dataset.slug;
            navigateToProject(slug);
        });
    });
}

// Navigate to project page
function navigateToProject(slug) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return;

    currentPage = 'project';
    homePage.classList.remove('active');
    projectPage.classList.add('active');
    
    projectContent.innerHTML = `
        <div class="project-detail" style="background: ${project.colors.primary}">
            <img src="${project.images[0]}" alt="${project.title}">
            <h1>${project.title}</h1>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    window.scrollTo(0, 0);
    updateNav();
}

// Navigate to home
function navigateToHome() {
    currentPage = 'home';
    projectPage.classList.remove('active');
    homePage.classList.add('active');
    window.scrollTo(0, 0);
    updateNav();
}

// Setup event listeners
function setupEventListeners() {
    // Burger menu
    burger.addEventListener('click', toggleMenu);
    
    // Logo click
    logo.addEventListener('click', navigateToHome);
    
    // Menu logo click
    document.querySelector('.menu-logo').addEventListener('click', () => {
        toggleMenu();
        navigateToHome();
    });
    
    // Menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
            if (currentPage !== 'home') {
                navigateToHome();
            }
        });
    });
    
    // Back button
    backBtn.addEventListener('click', navigateToHome);
    
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    
    // Footer language toggle
    document.querySelectorAll('.footer-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'es' : 'en');
        });
    });
    
    // Scroll handler
    window.addEventListener('scroll', handleScroll);
    
    // Smooth scroll for CTA
    document.querySelector('.hero-cta').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
}

// Toggle menu
function toggleMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}

// Handle scroll
function handleScroll() {
    if (currentPage === 'home') {
        const scrollY = window.scrollY;
        const showNav = scrollY > window.innerHeight / 2;
        
        if (showNav) {
            logo.classList.remove('hidden');
            burger.classList.remove('hidden');
        } else {
            logo.classList.add('hidden');
            burger.classList.add('hidden');
        }
    } else {
        logo.classList.remove('hidden');
        burger.classList.remove('hidden');
    }
}

// Update nav visibility
function updateNav() {
    if (currentPage === 'project') {
        logo.classList.remove('hidden');
        burger.classList.remove('hidden');
    } else {
        handleScroll();
    }
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    
    // Update active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update footer toggle text
    document.querySelectorAll('.footer-lang-btn').forEach(btn => {
        btn.textContent = lang === 'en' ? 'Español' : 'English';
    });
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}