// ============================================================
// Footer.jsx — 頁尾版權元件
//
// 功能：
//   - 顯示版權聲明文字（從 content.js footer.copyright 取得）
//   - 文字根據當前語言自動切換（中/英）
//
// 修改版權文字：
//   修改 src/data/content.js 中 footer.copyright 的值
// ============================================================

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Heart } from 'lucide-react';

const Footer = () => {
    // 取得語言狀態以選擇對應版權文字
    const { language } = useLanguage();
    const t = content[language].footer;

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    {/* 版權聲明（字體大小單位有空格：'0.8 rem' → 若要修正請改為 '0.8rem'） */}
                    <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>{t.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
