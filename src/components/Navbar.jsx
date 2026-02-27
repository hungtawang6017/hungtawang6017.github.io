// ============================================================
// Navbar.jsx — 頂部導覽列元件
//
// 功能：
//   - 顯示網站 Logo（連結至 #home）
//   - 導覽連結列表（錨點滾動至各區塊）
//   - 語言切換按鈕（ZH ⇔ EN）
//   - 主題切換按鈕（深色 ⇔ 淺色）
//   - 行動裝置漢堡選單（點擊展開/收合）
//
// 狀態：
//   isMenuOpen  → 控制行動裝置選單是否展開
//   language    → 從 LanguageContext 取得，決定顯示語言
//   theme       → 從 ThemeContext 取得，決定圖示（Sun/Moon）
//
// 樣式相關：
//   nav-menu.active → 選單展開時加入此 class
//   glass-pill      → 毛玻璃膠囊效果（定義於 index.css）
// ============================================================

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
    // 從 Context 取得語言與主題狀態
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    // 控制行動裝置漢堡選單的展開/收合
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // 取得當前語言的導覽文字（t.home, t.about, ...）
    const t = content[language].nav;

    // 切換選單開關狀態
    const toggleMenu = (e) => {
        e.stopPropagation(); // 防止點擊按鈕時觸發文件點擊事件導致立刻關起
        setIsMenuOpen(!isMenuOpen);
    };

    // 新增：點擊螢幕任何地方（除 Navbar 外）自動縮回
    useEffect(() => {
        const handleDocumentClick = (e) => {
            // 如果點擊的地方不在 navbar 內
            if (isMenuOpen && !e.target.closest('.navbar')) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleDocumentClick);
        }

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container glass-pill">
                {/* Logo：點擊回到首頁頂部 */}
                <a href="#home" className="nav-logo" style={{fontSize: '1.7rem'}}>Home of Hung-Ta</a>

                {/* 漢堡選單按鈕（僅在行動裝置顯示） */}
                <button 
                    className="mobile-menu-toggle" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {/* 選單開啟時顯示 X，關閉時顯示漢堡圖示 */}
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* 導覽連結列表；行動裝置新增 active class 後展開 */}
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                    {/* 錨點連結：點擊後關閉行動選單 */}
                    <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.home}</a></li>
                    <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.about}</a></li>
                    <li><a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.skills}</a></li>
                    <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.projects}</a></li>
                    <li><a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>{language === 'zh' ? '工作經歷' : 'Experience'}</a></li>
                    <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.contact}</a></li>

                    {/* 視覺分隔線 */}
                    <li className="nav-divider"></li>

                    {/* 語言 & 主題切換按鈕 */}
                    <li className="nav-actions">
                        {/* 語言切換：顯示目前語言對應的「另一個」語言縮寫 */}
                        <button onClick={toggleLanguage} className="theme-toggle" aria-label="Toggle language">
                            <span className="lang-text">{language === 'zh' ? 'EN' : 'ZH'}</span>
                        </button>
                        {/* 主題切換：深色顯示太陽（切換為亮色），亮色顯示月亮（切換為暗色） */}
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
