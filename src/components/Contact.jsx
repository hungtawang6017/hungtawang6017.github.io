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

                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <Mail size={24} />
                            </div>
                            <h4>Email</h4>
                            <a href={`mailto:${t.email}`}>{t.email}</a>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <Phone size={24} />
                            </div>
                            <h4>{language === 'zh' ? '電話' : 'Phone'}</h4>
                            <a href={`tel:${t.phone}`}>{t.phone}</a>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/hungtawang0118" className="social-link" target="_blank" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
