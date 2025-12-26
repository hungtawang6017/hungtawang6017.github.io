import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Heart } from 'lucide-react';

const Footer = () => {
    const { language } = useLanguage();
    const t = content[language].footer;

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
