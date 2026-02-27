// ============================================================
// Projects.jsx — 作品集區塊元件
//
// 功能：
//   - 以卡片 Grid 形式展示作品集
//   - 每張卡片包含：封面圖、作品名稱、描述、技術標籤（tags）與連結
//   - 標題與 Grid 分別使用獨立 IntersectionObserver 實現分段進場動畫
//
// 圖片處理：
//   - 圖片路徑來自 content.js project.image（對應 public/images/）
//   - onError fallback：圖片載入失敗時顯示 placehold.co 預覽圖
//
// 新增作品：
//   修改 src/data/content.js 中 projects.items 陣列，
//   並將圖片檔案放至 public/images/ 資料夾
//
// 連結說明：
//   目前 linkText 連結為 href="#" 並阻止預設行為（e.preventDefault()），
//   如需加入真實連結，修改 project.link 欄位並更新此元件即可
// ============================================================

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { ArrowRight } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
    // 取得語言狀態以選擇對應文字
    const { language } = useLanguage();
    const t = content[language].projects;
    
    // 注意：React Hooks 規則不允許在迴圈/條件中呼叫 Hook，
    // 因此使用兩個獨立的 observer（標題 & Grid），而非為每張卡片建立 observer

    // 標題區塊的進場動畫 observer
    const [headerRef, headerVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
    // 作品 Grid 的進場動畫 observer（延遲 0.2s）
    const [gridRef, gridVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="projects" id="projects">
            <div className="container">
                {/* 標題區塊：滾動進場動畫 */}
                <div 
                    ref={headerRef} 
                    className={`section-header reveal-on-scroll ${headerVisible ? 'is-visible' : ''}`}
                >
                    <h2 className="section-title">{t.title}</h2>
                    <p className="section-subtitle">{t.subtitle}</p>
                </div>

                {/* 作品卡片 Grid：延遲 0.2s 進場 */}
                <div 
                    ref={gridRef}
                    className={`projects-grid reveal-on-scroll ${gridVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: '0.2s' }}
                >
                    {/* 遍歷作品資料，動態生成卡片 */}
                    {t.items.map((project, index) => (
                        <div 
                            className="antigravity-card project-card" 
                            key={index} 
                            style={{ 
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                border: '1px solid var(--color-border)',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                            }}
                        >
                            {/* 卡片文字資訊區 */}
                            <div className="project-info" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                {/* 作品名稱 */}
                                <h4 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>{project.title}</h4>
                                {/* 作品描述 */}
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '0.95rem', flex: '1' }}>{project.desc}</p>

                                {/* 技術標籤列 */}
                                <div className="project-tags" style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.tags.map((tag, i) => (
                                        <span className="tag" key={i} style={{ 
                                            background: 'rgba(139, 92, 246, 0.1)', 
                                            color: 'var(--color-primary)',
                                            padding: '0.3rem 0.8rem', 
                                            borderRadius: '99px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            border: '1px solid rgba(139, 92, 246, 0.2)'
                                        }}>{tag}</span>
                                    ))}
                                </div>

                                {/* 查看連結 */}
                                <a href="#" className="project-link" onClick={(e) => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', fontWeight: '600', color: 'var(--color-primary)', fontSize: '0.9rem' }}>
                                    <span>{project.linkText}</span>
                                    <ArrowRight size={16} style={{ marginLeft: '4px' }} />
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
