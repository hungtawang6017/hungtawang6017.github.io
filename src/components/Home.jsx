// ============================================================
// Home.jsx — 首頁元件
//
// 作用：
//   作為單頁式首頁（Single Page），依序垂直排列所有區塊元件：
//   Hero → About → Skills → Projects → Contact
//
//   各區塊皆設有錨點 id（如 #hero、#about），
//   使 Navbar 的平滑滾動連結能直接定位到對應區塊
// ============================================================

import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
    return (
        // 單頁式容器，垂直包含所有區塊
        <div className="home-page">
            <Hero />      {/* 英雄主視覺區塊 */}
            <About />     {/* 關於我 */}
            <Skills />    {/* 專業技能 */}
            <Projects />  {/* 專案經歷 */}
            <Experience /> {/* 工作經歷 */}
            <Contact />   {/* 聯絡方式 */}
        </div>
    );
};

export default Home;
