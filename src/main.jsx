// ============================================================
// main.jsx — 應用程式進入點
// 將根元件 <App /> 掛載至 HTML 中 id="root" 的 DOM 節點
// StrictMode 會在開發環境中啟用額外的警告與檢查
// ============================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
