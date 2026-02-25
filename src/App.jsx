// ============================================================
// App.jsx — 根元件，負責整合全域 Context 與路由設定
//
// 架構說明：
//   ThemeProvider    → 提供主題（暗/亮模式）的全域狀態
//   LanguageProvider → 提供語言（中/英文）的全域狀態
//   BrowserRouter    → 啟用 React Router 的 URL 路由功能
//   Routes / Route   → 定義各頁面路徑與對應元件
//
// 路由結構：
//   /           → Home（首頁，同時包含所有區塊）
//   /about      → About（關於我）
//   /skills     → Skills（專業技能）
//   /projects   → Projects（作品集）
//   /contact    → Contact（聯絡方式）
//
// 所有子路由共用 Layout（含 Navbar 與 Footer）
// ============================================================

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    // ThemeProvider & LanguageProvider 包覆整個應用，讓所有子元件都能取得主題與語言狀態
    <ThemeProvider>
      <LanguageProvider>
        {/* BrowserRouter 使用 HTML5 History API 進行路由 */}
        <BrowserRouter>
          <Routes>
            {/* Layout 作為共用外框，內含 Navbar 與 Footer */}
            <Route path="/" element={<Layout />}>
              {/* index route：預設顯示 Home 頁面 */}
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
