// ============================================================
// ThemeContext.jsx — 主題（暗/亮模式）的全域狀態管理
//
// 提供：
//   theme       → 目前主題字串，'dark' 或 'light'
//   toggleTheme → 切換主題的函式
//
// 行為說明：
//   - 初始值從 localStorage 讀取，預設為 'dark'
//   - 主題套用方式：在 <html> 元素設定 data-theme 屬性
//     CSS 中透過 [data-theme="dark"] / [data-theme="light"] 選擇器套用變數
//   - 每次切換時同步更新 localStorage，確保重新整理後保留設定
// ============================================================

import React, { createContext, useState, useContext, useEffect } from 'react';

// 建立 Context 物件
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 初始化主題時同步套用至 <html>，避免首次渲染時閃爍
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    // Apply theme immediately on init
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', saved);
    }
    return saved;
  });

  // 當 theme 狀態改變後，同步儲存至 localStorage 並更新 HTML 屬性
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // 切換深/淺色模式
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    // 將 theme 與 toggleTheme 透過 Context 傳遞給所有子元件
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 便利 Hook：子元件可直接呼叫 useTheme() 取得主題狀態
export const useTheme = () => useContext(ThemeContext);
