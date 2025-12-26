import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { ArrowRight } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
    const { language } = useLanguage();
    const t = content[language].projects;
    
    // We can use a single observer for the header or separate ones for delays.
    // For simplicity, let's reveal the whole section or header then grid.
    // However, react hooks rules say we can't call hooks in loops or callbacks unless we setup a list of refs.
    // Easier approach: wrapper component or just detecting the section.
    
    // Let's create a Reveal component? No, I'll just code it inline or keep it simple.
    // To avoid complex ref arrays, I will just fade in the container or use a helper component.
    // Given the constraints, I will create a wrapper component inside this file or just use one ref for the whole section.
    // The user wants "various titles appear with fade-in".
    
    // Changing approach: I'll use the hook for the main container or create a localized helper.
    // But since I cannot create new files easily without overhead, I'll use the hook here.

    const [headerRef, headerVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
    const [gridRef, gridVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div 
                    ref={headerRef} 
                    className={`section-header reveal-on-scroll ${headerVisible ? 'is-visible' : ''}`}
                >
                    <h2 className="section-title">{t.title}</h2>
                    <p className="section-subtitle">{t.subtitle}</p>
                </div>

                <div 
                    ref={gridRef}
                    className={`projects-grid reveal-on-scroll ${gridVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: '0.2s' }}
                >
                    {t.items.map((project, index) => (
                        <div 
                            className="antigravity-card project-card" 
                            key={index} 
                            style={{ 
                                padding: '0', 
                                overflow: 'hidden', 
                                border: '1px solid var(--border-color)',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease' // Ensure hover works
                            }}
                        >
                            <div className="project-image" style={{ height: '240px', overflow: 'hidden' }}>
                                {/* Using placeholder path if image missing */}
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    onError={(e) => e.target.src = 'https://placehold.co/600x400?text=Project'} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                />
                            </div>
                            <div className="project-info" style={{ padding: '2rem' }}>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.desc}</p>
                                <div className="project-tags" style={{ marginBottom: '1.5rem' }}>
                                    {project.tags.map((tag, i) => (
                                        <span className="tag" key={i} style={{ 
                                            background: 'rgba(66, 133, 244, 0.1)', 
                                            color: 'var(--accent-color)',
                                            padding: '0.4rem 1rem', 
                                            borderRadius: '99px',
                                            fontSize: '0.85rem',
                                            fontWeight: '500' 
                                        }}>{tag}</span>
                                    ))}
                                </div>
                                <a href="#" className="project-link" onClick={(e) => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', fontWeight: '600', color: 'var(--text-primary)' }}>
                                    <span>{project.linkText}</span>
                                    <ArrowRight size={18} style={{ marginLeft: '6px' }} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
