// ===================================
// Personal Portfolio Website
// Interactive JavaScript Features
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // Theme Toggle (Dark/Light Mode)
    // ===================================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', function () {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // ===================================
    // Language Toggle (中文/English)
    // ===================================
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');

    // Get saved language or default to Chinese
    const currentLang = localStorage.getItem('language') || 'zh';
    document.documentElement.setAttribute('lang', currentLang);
    updateLanguage(currentLang);

    langToggle.addEventListener('click', function () {
        const lang = document.documentElement.getAttribute('lang');
        const newLang = lang === 'zh' ? 'en' : 'zh';

        document.documentElement.setAttribute('lang', newLang);
        localStorage.setItem('language', newLang);
        updateLanguage(newLang);
    });

    function updateLanguage(lang) {
        // Update button text
        langText.textContent = lang === 'zh' ? 'EN' : '中文';

        // Update all elements with data-zh and data-en attributes
        const elements = document.querySelectorAll('[data-zh][data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
    }

    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileMenuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // ===================================
    // Smooth Scrolling for Navigation Links
    // ===================================
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Active Navigation Link Highlighting
    // ===================================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navbarHeight = document.getElementById('navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ===================================
    // Scroll Reveal Animation
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // ===================================
    // Parallax Effect for Hero Section
    // ===================================
    // Disabled to prevent layout issues during scroll
    /*
    const hero = document.querySelector('.hero');
    
    function handleParallax() {
        const scrolled = window.pageYOffset;
        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
    */

    // ===================================
    // Scroll Event Listener (Optimized)
    // ===================================
    let ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleNavbarScroll();
                updateActiveNavLink();
                // handleParallax(); // Disabled
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial calls
    handleNavbarScroll();
    updateActiveNavLink();

    // ===================================
    // Generate Placeholder Images
    // ===================================
    function createPlaceholderImage(elementId, width, height, text, gradient) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Create gradient background
        const grd = ctx.createLinearGradient(0, 0, width, height);
        if (gradient === 'profile') {
            grd.addColorStop(0, '#667eea');
            grd.addColorStop(1, '#764ba2');
        } else if (gradient === 'project1') {
            grd.addColorStop(0, '#4facfe');
            grd.addColorStop(1, '#00f2fe');
        } else if (gradient === 'project2') {
            grd.addColorStop(0, '#f093fb');
            grd.addColorStop(1, '#f5576c');
        } else if (gradient === 'project3') {
            grd.addColorStop(0, '#667eea');
            grd.addColorStop(1, '#f093fb');
        }

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, width, height);

        // Add text
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = 'bold 24px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, width / 2, height / 2);

        // Set as image source
        element.src = canvas.toDataURL();
    }

    // Create placeholder images with different gradients
    createPlaceholderImage('profile-image', 400, 400, '個人照片', 'profile');
    createPlaceholderImage('project-1-image', 600, 400, '專案 1', 'project1');
    createPlaceholderImage('project-2-image', 600, 400, '專案 2', 'project2');
    createPlaceholderImage('project-3-image', 600, 400, '專案 3', 'project3');

    // ===================================
    // Typing Effect for Hero Title (Optional)
    // ===================================
    /*
    const heroTitle = document.querySelector('.hero h1 .text-gradient');
    const text = 'Your Name';
    let index = 0;
     
    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
     
    // Uncomment to enable typing effect
    // typeWriter();
    */

    // ===================================
    // Console Message
    // ===================================
    console.log('%c👋 歡迎來到我的個人網站！', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%c如果你對這個網站的程式碼感興趣，歡迎到我的 GitHub 了解更多！', 'font-size: 14px; color: #764ba2;');
});
