// Language Toggle Functionality
const langToggle = document.getElementById('lang-toggle');
const langText = langToggle.querySelector('.lang-text');

// Get saved language or default to Chinese
const currentLang = localStorage.getItem('language') || 'zh';
document.documentElement.setAttribute('lang', currentLang);
updateLanguage(currentLang);

langToggle.addEventListener('click', function () {
    const currentLang = document.documentElement.getAttribute('lang');
    const newLang = currentLang === 'zh' ? 'en' : 'zh';

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
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(`data-${lang}`);
        } else {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });

    // Special handling for hero h1 with gradient text
    const heroGreeting = document.querySelector('.hero-greeting');
    if (heroGreeting) {
        const greetingText = heroGreeting.getAttribute(`data-${lang}`);
        const heroH1 = document.querySelector('.hero h1');
        if (heroH1) {
            // Keep the gradient text intact
            const gradientSpan = heroH1.querySelector('.text-gradient');
            if (gradientSpan) {
                const gradientText = gradientSpan.textContent;
                heroH1.innerHTML = greetingText + '<span class="text-gradient">' + gradientText + '</span>';
            }
        }
    }
}
