// ============================================================
// Layout.jsx — 頁面共用外框元件
//
// 作用：
//   所有路由頁面共用的結構骨架，包含：
//   - Navbar（頂部導覽列）
//   - <Outlet />（React Router 的子頁面渲染插槽）
//   - Footer（底部版權列）
//
//   在 App.jsx 中，Layout 被指定為 path="/" 的 element，
//   所有子路由（Home、About 等）都會渲染在 <Outlet /> 的位置
// ============================================================

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="layout-wrapper">
            {/* 頂部固定導覽列 */}
            <Navbar />

            {/* 主要內容區塊：子路由元件渲染於此 */}
            <main className="main-content">
                <Outlet />
            </main>

            {/* 底部版權列 */}
            <Footer />
        </div>
    );
};

export default Layout;
