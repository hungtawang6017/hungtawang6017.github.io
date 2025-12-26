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
                    <p>{t.copyright}</p>
                    <p>
                        {t.designedWith} 
                        <Heart size={16} fill="#f093fb" color="#f093fb" style={{ display: 'inline', margin: '0 4px' }} /> 
                        and crafted with precision
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
