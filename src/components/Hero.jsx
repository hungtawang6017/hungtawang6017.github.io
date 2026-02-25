// ============================================================
// Hero.jsx — 首頁英雄主視覺區塊
//
// 功能：
//   - 顯示問候語、姓名（漸層文字效果）、學歷副標題與學院描述
//   - 提供兩個 CTA 按鈕：「我的貼文」（外部連結）與「聯絡我」（錨點）
//   - 使用 useIntersectionObserver 實現進場滾動動畫
//
// 進場動畫說明：
//   - triggerOnce: true → 動畫只播放一次
//   - CSS class reveal-on-scroll + is-visible 控制 opacity/transform 過渡
//
// 外部連結：
//   「我的貼文」按鈕連結至 GitHub Pages 部落格（target="_blank"）
// ============================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Hero = () => {
    // 取得當前語言狀態
    const { language } = useLanguage();

    // 取得英雄區塊的多語言文字
    const t = content[language].hero;

    // 進場動畫 Hook：ref 綁定至內容容器，isVisible 控制 class 切換
    const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="hero" id="home">
            {/* 全螢幕高度容器，垂直水平置中 */}
            {/* 降低最小高度並調整對齊，讓內容稍微靠上 */}
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '85vh', textAlign: 'center', paddingTop: '60px' }}>
                {/* 動畫容器：進入可視區域後加入 is-visible class 觸發 CSS 過渡 */}
                <div 
                    ref={ref} 
                    className={`hero-content reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <h1 style={{ marginBottom: '1.5rem' }}>
                        {/* 問候語（小字） */}
                        <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '500', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{t.greeting}</span>
                        {/* 姓名（大字漸層效果，clamp 做響應式字體） */}
                        <span className="text-gradient" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '750', letterSpacing: '0.03em' }}>{t.name}</span>
                    </h1>

                    {/* 學歷副標題 */}
                    <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: '400', maxWidth: '600px', margin: '0 auto 1rem' }}>{t.subtitle}</p>

                    {/* 學院描述 */}
                    <p className="hero-description" style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        {t.description}
                    </p>

                    {/* CTA 按鈕組 */}
                    <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        {/* 主要按鈕：連結至外部部落格，開新分頁 */}
                        <a href="https://hungtawang.github.io/" className="btn btn-primary" target="_blank">{t.viewProjects}</a>
                        {/* 次要按鈕：錨點滾動至聯絡區塊 */}
                        <a href="#contact" className="btn btn-secondary">{t.contactMe}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
