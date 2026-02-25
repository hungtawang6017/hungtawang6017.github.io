// ============================================================
// About.jsx — 關於我區塊元件
//
// 功能：
//   - 左側顯示個人照片（從 assets/profile.jpg 匯入）
//   - 右側顯示標題、副標題與三段自介文字
//   - 使用 useIntersectionObserver 實現進場滾動動畫
//
// 版面配置：
//   使用 CSS Grid 兩欄式排版（1fr : 1.5fr），
//   RWD 響應式設計請參考 index.css 中 .about-content 的 media query
//
// 圖片替換：
//   修改 src/assets/profile.jpg 即可替換個人照片
// ============================================================

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import profile from "../assets/profile.jpg";

const About = () => {
    // 取得語言狀態以選擇對應文字
    const { language } = useLanguage();
    const t = content[language].about;

    // 進場動畫 Hook：ref 綁在 container，isVisible 控制 class
    const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="about" id="about">
            {/* 觀察目標：滾動進入可視區域後觸發動畫 */}
            <div className="container" ref={ref}>
                {/* 兩欄 Grid：左側照片 / 右側文字；動畫 class 控制淡入 */}
                <div className={`about-content reveal-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    
                    {/* 左側：個人照片 */}
                    <div className="about-image" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', margin: '0 auto' }}>
                        {/* Placeholder for now, user can replace image path */}
                        <img src={profile} alt="Profile" id="profile-image" style={{ width: '100%', display: 'block' }} />
                    </div>

                    {/* 右側：文字內容 */}
                    <div className="about-text">
                        {/* 區塊主標題 */}
                        <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>{t.title}</h2>
                        {/* 副標題（帶有強調色） */}
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '2rem' }}>{t.subtitle}</h3>
                        {/* 三段自介段落 */}
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
