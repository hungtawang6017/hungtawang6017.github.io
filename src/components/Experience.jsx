import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Experience = () => {
    const { language } = useLanguage();
    const t = content[language].experience;
    const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="experience" id="experience" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div 
                    ref={ref} 
                    className={`section-header reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <h2 className="section-title">{t.title}</h2>
                    <p className="section-subtitle">{t.subtitle}</p>
                </div>

                <div className="experience-list" style={{ marginTop: '3rem' }}>
                    {t.items.map((item, index) => (
                        <div 
                            key={index}
                            className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
                            style={{ 
                                transitionDelay: `${index * 0.2}s`,
                                padding: '0.5rem 0 2rem 2.5rem',
                                marginBottom: '1.5rem',
                                background: 'transparent',
                                borderLeft: '3px solid var(--color-primary)',
                                position: 'relative'
                            }}
                        >
                            <div className="experience-header" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{item.position}</h4>
                                    <div style={{ color: 'var(--color-primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Briefcase size={18} />
                                        <span style={{ fontSize: '1.1rem' }}>{item.company}</span>
                                    </div>
                                </div>
                                <div className="experience-meta" style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', marginBottom: '0.25rem' }}>
                                        <Calendar size={14} />
                                        <span>{item.duration}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                        <MapPin size={14} />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </div>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
