// ============================================================
// Skills.jsx — 專業技能區塊元件
//
// 功能：
//   - 以卡片 Grid 形式顯示技能列表
//   - 每張卡片包含 Lucide 圖示、技能名稱與描述
//   - 標題與 Grid 分別使用獨立的 IntersectionObserver，實現分段進場
//
// 圖示對應（iconMap）：
//   技能資料中 icon 字串 → 對應的 Lucide React 元件
//   如需新增圖示：
//     1. 在此檔案頂部匯入對應 Lucide 元件
//     2. 在 iconMap 中新增對應 key-value
//     3. 在 content.js 的 skills.items 中使用該 key
//
// 新增技能卡片：
//   修改 src/data/content.js 中 skills.items 陣列即可
// ============================================================

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Code, ChartBar, Laptop, Brain, Briefcase, Languages } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// 將 content.js 中的 icon 字串對應至 Lucide React 元件
// 若 icon 字串找不到對應，預設使用 Code 元件
const iconMap = {
    "code": Code,
    "chart-bar": ChartBar,
    "laptop-code": Laptop,
    "brain": Brain,
    "briefcase": Briefcase,
    "language": Languages
};

const Skills = () => {
    // 取得語言狀態以選擇對應文字
    const { language } = useLanguage();
    const t = content[language].skills;

    // 標題區塊的進場動畫 observer
    const [headerRef, headerVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
    // 技能卡片 Grid 的進場動畫 observer（稍微延遲，詳見 style transitionDelay）
    const [gridRef, gridVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="skills" id="skills">
            <div className="container">
                {/* 標題區塊：滾動進場動畫 */}
                <div 
                    ref={headerRef} 
                    className={`section-header reveal-on-scroll ${headerVisible ? 'is-visible' : ''}`}
                >
                    <h2 className="section-title">{t.title}</h2>
                    <p className="section-subtitle">{t.subtitle}</p>
                </div>

                {/* 技能卡片 Grid：延遲 0.2s 進場，視覺上略晚於標題 */}
                <div 
                    ref={gridRef} 
                    className={`skills-grid reveal-on-scroll ${gridVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: '0.2s' }}
                >
                    {/* 遍歷技能資料，動態生成卡片 */}
                    {t.items.map((skill, index) => {
                        // 根據 icon 字串查找對應元件，找不到時 fallback 為 Code
                        const IconComponent = iconMap[skill.icon] || Code;
                        return (
                            <div className="antigravity-card skill-card" key={index}>
                                {/* 技能圖示（Lucide 元件，帶有強調色） */}
                                <div className="skill-icon" style={{color: 'var(--accent-color)', marginBottom: '1rem'}}>
                                    <IconComponent size={32} />
                                </div>
                                {/* 技能名稱 */}
                                <h4 style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>{skill.title}</h4>
                                {/* 技能描述（工具/語言列表） */}
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
