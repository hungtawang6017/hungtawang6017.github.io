// ============================================================
// Contact.jsx — 聯絡方式區塊元件
//
// 功能：
//   - 顯示可點擊的電子郵件卡片（使用 mailto: 連結）
//   - 顯示可點擊的電話卡片（使用 tel: 連結）
//   - 顯示 GitHub 與 LinkedIn 社群媒體連結（圓形圖示按鈕）
//   - 使用 useIntersectionObserver 實現進場滾動動畫
//
// 互動說明：
//   - 整張 Email / Phone 卡片均為可點擊的 <a> 元素
//     Email 卡片 → 開啟預設郵件客戶端（mailto:）
//     Phone 卡片 → 觸發手機撥號（tel:）
//   - Social Links → 在新分頁開啟外部社群頁面（target="_blank"）
//
// 修改聯絡資訊：
//   修改 src/data/content.js 中 contact.email / contact.phone 即可
//
// 修改社群連結：
//   直接修改下方 <a> 元素的 href 屬性
// ============================================================

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact = () => {
    // 取得語言狀態以選擇對應文字
    const { language } = useLanguage();
    const t = content[language].contact;

    // 進場動畫 Hook：ref 綁定至 container
    const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="contact" id="contact">
            {/* 觀察目標：滾動進入後觸發動畫 */}
            <div className="container" ref={ref}>
                <div className={`contact-content reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
                    {/* 區塊標題 */}
                    <div className="section-header">
                        <h2 className="section-title">{t.title}</h2>
                        <p className="section-subtitle">{t.subtitle}</p>
                    </div>

                    {/* 聯絡資訊卡片 Grid（Email & Phone） */}
                    <div className="contact-info" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        
                        {/* Email 卡片：整張卡片可點擊，觸發 mailto: */}
                        <a href={`mailto:${t.email}`} className="antigravity-card contact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                            <div className="contact-icon" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                                <Mail size={40} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--color-text)' }}>Email</h4>
                            <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>{t.email}</span>
                        </a>

                        {/* Phone 卡片：整張卡片可點擊，觸發 tel: */}
                        <a href={`tel:${t.phone}`} className="antigravity-card contact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                            <div className="contact-icon" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                                <Phone size={40} />
                            </div>
                            {/* 電話標籤根據語言切換顯示 */}
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--color-text)' }}>{language === 'zh' ? '電話' : 'Phone'}</h4>
                            <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>{t.phone}</span>
                        </a>
                    </div>

                    {/* 社群媒體連結（GitHub & LinkedIn）：圓形圖示按鈕 */}
                    <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        {/* GitHub 連結：修改 href 可更換個人頁面 URL */}
                        <a href="https://github.com/HungTaWang" className="social-link" target="_blank" aria-label="GitHub">
                            <Github size={32} />
                        </a>
                        {/* LinkedIn 連結：修改 href 可更換個人頁面 URL */}
                        <a href="https://www.linkedin.com/in/hungtawang/" className="social-link" target="_blank" aria-label="LinkedIn">
                            <Linkedin size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
