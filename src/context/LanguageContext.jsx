// ============================================================
// LanguageContext.jsx — 語言（中/英文）的全域狀態管理
//
// 提供：
//   language       → 目前語言代碼，'zh'（中文）或 'en'（英文）
//   toggleLanguage → 切換語言的函式
//
// 行為說明：
//   - 初始值從 localStorage 讀取，預設為 'zh'（中文）
//   - 語言切換後自動同步至 localStorage，重整頁面後仍保留選擇
// ============================================================

import React, { createContext, useState, useContext, useEffect } from 'react';

// 建立 Context 物件
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // 讀取 localStorage 中儲存的語言偏好，預設為繁體中文 'zh'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'zh';
  });

  // 當 language 狀態改變後，同步儲存至 localStorage
  useEffect(() => {
    // Sync with localStorage whenever language changes
    localStorage.setItem('language', language);
  }, [language]);

  // 在 'zh' 與 'en' 之間切換
  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    // 將 language 與 toggleLanguage 透過 Context 傳遞給所有子元件
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 便利 Hook：子元件可直接呼叫 useLanguage() 取得語言狀態
export const useLanguage = () => useContext(LanguageContext);
