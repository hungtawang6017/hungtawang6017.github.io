import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
    const { language } = useLanguage();
    const t = content[language].about;
    const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="about" id="about">
            <div className="container" ref={ref}>
                <div className={`about-content reveal-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="about-image" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                        {/* Placeholder for now, user can replace image path */}
                        <img src="/profile-placeholder.jpg" alt="Profile" id="profile-image" style={{ width: '100%', display: 'block' }} />
                    </div>
                    <div className="about-text">
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>{t.title}</h2>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '2rem' }}>{t.subtitle}</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{t.text1}</p>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{t.text2}</p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{t.text3}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
