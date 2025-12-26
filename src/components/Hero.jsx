import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Hero = () => {
    const { language } = useLanguage();
    const t = content[language].hero;
    const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="hero" id="home">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
                <div 
                    ref={ref} 
                    className={`hero-content reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <h1 style={{ marginBottom: '1.5rem' }}>
                        <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '500', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{t.greeting}</span>
                        <span className="text-gradient" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.1' }}>{t.name}</span>
                    </h1>
                    <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: '400', maxWidth: '600px', margin: '0 auto 1rem' }}>{t.subtitle}</p>
                    <p className="hero-description" style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        {t.description}
                    </p>
                    <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/projects" className="btn btn-primary">{t.viewProjects}</Link>
                        <Link to="/contact" className="btn btn-secondary">{t.contactMe}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
