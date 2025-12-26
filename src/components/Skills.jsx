import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Code, ChartBar, Laptop, Brain, Briefcase, Languages } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// Map icon strings to components
const iconMap = {
    "code": Code,
    "chart-bar": ChartBar,
    "laptop-code": Laptop,
    "brain": Brain,
    "briefcase": Briefcase,
    "language": Languages
};

const Skills = () => {
    const { language } = useLanguage();
    const t = content[language].skills;
    const [headerRef, headerVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
    const [gridRef, gridVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="skills" id="skills">
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
                    className={`skills-grid reveal-on-scroll ${gridVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: '0.2s' }}
                >
                    {t.items.map((skill, index) => {
                        const IconComponent = iconMap[skill.icon] || Code;
                        return (
                            <div className="antigravity-card skill-card" key={index}>
                                <div className="skill-icon" style={{color: 'var(--accent-color)', marginBottom: '1rem'}}>
                                    <IconComponent size={32} />
                                </div>
                                <h4 style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>{skill.title}</h4>
                                <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>{skill.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
