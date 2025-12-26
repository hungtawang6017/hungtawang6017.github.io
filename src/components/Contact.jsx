import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact = () => {
    const { language } = useLanguage();
    const t = content[language].contact;
    const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="contact" id="contact">
            <div className="container" ref={ref}>
                <div className={`contact-content reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
                    <div className="section-header">
                        <h2 className="section-title">{t.title}</h2>
                        <p className="section-subtitle">{t.subtitle}</p>
                    </div>

                    <div className="contact-info" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        <a href={`mailto:${t.email}`} className="antigravity-card contact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                            <div className="contact-icon" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                                <Mail size={40} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--color-text)' }}>Email</h4>
                            <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>{t.email}</span>
                        </a>

                        <a href={`tel:${t.phone}`} className="antigravity-card contact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                            <div className="contact-icon" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                                <Phone size={40} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--color-text)' }}>{language === 'zh' ? '電話' : 'Phone'}</h4>
                            <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>{t.phone}</span>
                        </a>
                    </div>

                    <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <a href="https://github.com/HungTaWang" className="social-link" target="_blank" aria-label="GitHub" style={{ padding: '1rem', background: 'var(--color-bg-glass)', borderRadius: '50%', border: '1px solid var(--color-border)', color: 'var(--color-text)', display: 'flex', transition: 'all 0.3s ease' }}>
                            <Github size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/hungtawang/" className="social-link" target="_blank" aria-label="LinkedIn" style={{ padding: '1rem', background: 'var(--color-bg-glass)', borderRadius: '50%', border: '1px solid var(--color-border)', color: 'var(--color-text)', display: 'flex', transition: 'all 0.3s ease' }}>
                            <Linkedin size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
