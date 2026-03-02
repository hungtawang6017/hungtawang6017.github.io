// ============================================================
// content.js — 多語言靜態文字內容
//
// 結構：
//   content.zh → 繁體中文版本的所有文字
//   content.en → 英文版本的所有文字
//
// 每個語言物件包含以下區塊：
//   nav      → 導覽列連結文字
//   hero     → 首頁英雄區塊的問候語、姓名、學歷等
//   about    → 關於我頁面的標題與三段自介文字
//   skills   → 技能卡片列表（title, desc, icon）
//              icon 字串對應 Skills.jsx 中的 iconMap
//   projects → 作品集卡片列表（title, desc, tags, image, linkText）
//              image 路徑相對於 public/ 資料夾 (如 /images/project1.jpg)
//   contact  → 電子郵件與電話號碼
//   footer   → 版權聲明文字
//
// 修改方式：
//   - 更新個人資訊或文字：直接修改對應語言物件中的值
//   - 新增技能卡片：在 skills.items 陣列中新增物件
//   - 新增作品：在 projects.items 陣列中新增物件，並將圖片放至 public/images/
// ============================================================

export const content = {
  zh: {
    // --- 導覽列 ---
    nav: {
      home: "首頁",
      about: "關於我",
      skills: "專業技能",
      projects: "專案經歷",
      contact: "聯絡方式"
    },

    // --- 英雄區塊（首頁主視覺） ---
    hero: {
      greeting: "嗨，我是 ",
      name: "王泓達",
      subtitle: "國立臺灣大學工業工程學研究所 碩士生",
      description: "國立成功大學會計學系、工業與資訊管理學系雙學位學士",
      viewProjects: "我的貼文",   // 連結至外部部落格
      contactMe: "聯絡我"
    },

    // --- 關於我 ---
    about: {
      title: "關於我",
      subtitle: "工業工程與財務會計跨領域碩士生",
      text1: "您好，我是王泓達，擁有國立成功大學會計學系與工業與資訊管理學系雙學位 ，目前在國立臺灣大學工業工程學研究所深造 。這樣的跨領域背景塑造了我獨特的思維模式：我既具備財會人對成本、效益與稅務法規的嚴謹態度與專業知識，同時又擁有工工人利用數據、最佳化與程式實現管理構想的邏輯思維與執行力。",
      text2: "我最大的特質是具全局觀的創新解決能力。我擅長找出問題，並利用最小的改動解決問題，並將技術轉化為商業優勢。如航空業的機票訂價問題，我將顧客行為與參考價格效應納入考量，開發出動態訂價模型，這項兼具理論與實務價值的研究，也在 2025 年國際研討會獲得傑出論文獎。",
      text3: "我深信堅實的數學與邏輯是解決問題的核心素養，程式能力是執行數學的媒介，而管理意涵則是在團隊合作時凝聚眾人一同解決問題的核心價值。我一直以此為目標訓練自己，同時不斷學習新知，如語言、網頁與生成式AI等，期待能將這種跨領域的洞察力與大膽創新的執行力應用於職場中，為公司創造價值。"
    },

    // --- 技能卡片列表 ---
    skills: {
      title: "專業技能",
      subtitle: "我的專業領域涵蓋多個開發堆疊，從前端到後端，從設計到開發",
      items: [
        { title: "程式設計", desc: "C++, C#, Python, Gurobi, Qt Development, Linux Shell Script", icon: "code" },
        { title: "數據科學", desc: "R, SQL, SPSS, TEJ, Oracle Crystal Ball", icon: "chart-bar" },
        { title: "網頁開發", desc: "React, Jekyll, HTML, CSS, JavaScript, jQuery, Bootstrap", icon: "laptop-code" },
        { title: "學術研究", desc: "深度學習, 馬可夫決策過程, 收益管理, 顧客異質性, 客戶行為模擬", icon: "brain" },
        { title: "財務管理", desc: "財務會計, 成本會計, 審計學, 財務報表分析, 工程經濟, 衍生性金融商品", icon: "briefcase" },
        { title: "語言能力", desc: "中文 (母語), 英語 (TOEIC 880), 日語 (JLPT N3), 德語 (入門),韓語 (入門)", icon: "language" }
      ]
    },

    // --- 專案經歷 ---
    projects: {
      title: "專案經歷",
      subtitle: "探索我參與的各項專案，包含 AI 應用、決策科學與大數據競賽",
      items: [
        {
          title: "考量市場區隔與參考價格之動態訂價策略",
          desc: "獲 2025 管理創新與作業研究國際研討會「傑出論文獎」。運用動態規劃與機器學習模擬航空業顧客行為，優化定價效益。",
          tags: ["Markov Decision Process", "Deep Learning"],
          image: "/images/project_dp.jpg",
          linkText: "查看摘要"
        },
        {
          title: "利用 AHP 結合 LINE Bot 推薦投資組合",
          desc: "整合 TEJ 資料庫與 PostgreSQL，運用 PCA 與 AHP 模型進行特徵選取，打造準確率達 59% 的投資預測與推薦系統。",
          tags: ["SQL", "AHP", "TEJ", "Linebot"],
          image: "/images/project_tej.jpg",
          linkText: "查看摘要"
        },
        {
          title: "AI CUP 2025 春季賽: 桌球選手分類",
          desc: "榮獲全國銅牌。開發 LightGBM 與 CNN 混合模型，應用傅立葉轉換處理不平衡資料，解決製造業視覺辨識痛點。",
          tags: ["Deep Learning", "Computer Vision"],
          image: "/images/project_aicup.jpg",
          linkText: "查看摘要"
        },
        {
          title: "AI 行銷認證：基礎實務應用",
          desc: "利用 GenAI 工具與進階提示工程 (Prompt Engineering)，實現跨平台 (FB, IG, LINE) 的社群媒體自動化發文工作流。",
          tags: ["Make", "Automatic Workflow"],
          image: "/images/project_agent.jpg",
          linkText: "查看摘要"
        },
        {
          title: "雲湧智生｜臺灣生成式AI應用黑客松競賽",
          desc: "開發病患照護系統。串接 Linux 工業攝影機捕捉表情，並構建 Agent 工作流自動生成對應的照護回覆。",
          tags: ["AWS Bedrock", "AWS S3", "Linux Shell Script"],
          image: "/images/project_advantech.jpg",
          linkText: "查看摘要"
        },
        {
          title: "AI郵局 智創新局 - 2024 郵政大數據競賽",
          desc: "獲創意獎與 GSS 特別獎。使用 ARIMA 模型與非線性規劃優化郵筒設置，預期為新設點提升 7.5 倍營收增量。",
          tags: ["Time Series Analysis", "Nonlinear Programming"],
          image: "/images/project_post.jpg",
          linkText: "查看摘要"
        }
      ]
    },

    // --- 聯絡資訊 ---
    contact: {
      title: "聯絡我",
      subtitle: "歡迎隨時與我聯繫！",
      email: "hungta.wang0118@gmail.com",
      phone: "+886 939 815 932"
    },

    // --- 工作經歷 ---
    experience: {
      title: "工作經歷",
      subtitle: "我在實習與在校期間的實務經驗",
      items: [
        {
          company: "PricewaterhouseCoopers (PwC) 資誠聯合會計師事務所",
          position: "審計實習生 (Auditor Intern)",
          duration: "2022年6月 - 2022年7月",
          location: "高雄，台灣",
          desc: "對綠能與營造公司進行實地查核。執行會計傳票測試、控制測試與稅務抽查，並核對財務報表跨期差異。"
        }
      ]
    },

    // --- 頁尾 ---
    footer: {
      copyright: "© 2026 Hung-Ta Wang. All rights reserved.",
    }
  },

  en: {
    // --- Navigation ---
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Project Experience",
      contact: "Contact"
    },

    // --- Hero Section ---
    hero: {
      greeting: "Hi, I'm ",
      name: "Hung-Ta Wang",
      subtitle: "Institute of Industrial Engineering (M.S.) Student",
      description: "Double degree in Accounting(B.B.A) & Industrial and Information Management(B.M.S) at National Cheng Kung University",
      viewProjects: "View My Posts",
      contactMe: "Contact Me"
    },

    // --- About Me ---
    about: {
      title: "About Me",
      subtitle: "I am a passionate interdisciplinary learner",
      text1: "I am Hung-Ta Wang. I hold dual bachelor's degrees in Accounting and Industrial and Information Management from National Cheng Kung University (NCKU), and I am currently pursuing a master's degree in Industrial Engineering at National Taiwan University (NTU). My undergraduate training in accounting has instilled in me a meticulous approach to problem-solving and a solid understanding of business operations. At NTU, I am conducting research on dynamic pricing at the Decision Science Laboratory, focusing on methodologies such as Markov Decision Processes, Dynamic Programming, Time Series Analysis, and Deep Neural Networks.",
      text2: "Beyond academic knowledge, I have applied theoretical frameworks to real-world challenges. During my undergraduate studies, my team won the championship in the NCKU Business Competition. As a master's student, I competed in the Chunghwa Post Co., Ltd. Big Data Competition, winning the Creativity Award and Special Award. Our project centered on using Time Series Analysis and Nonlinear Programming to optimize mailbox placement, achieving a projected revenue growth of 7.5 times.",
      text3: "I aspire to play a positive and motivating role within a team, fostering creativity through collaboration. With my expertise in analytics and strong interpersonal communication skills, I am confident in my ability to bring fresh perspectives, drive innovation, and enhance overall team performance. I believe that persistence and clarity of thought are key to achieving excellence and continuous self-improvement."
    },

    // --- Skills Cards ---
    skills: {
      title: "Professional Skills",
      subtitle: "My expertise spans multiple development stacks, from front-end to back-end, from design to development",
      items: [
        { title: "Programming", desc: "Python (OOP), C++, R, Bash, SQL, Qt Development", icon: "code" },
        { title: "Data Science", desc: "Gurobi, SPSS, TEJ, Oracle Crystal Ball, PostgreSQL", icon: "chart-bar" },
        { title: "Web Development", desc: "HTML, CSS, JavaScript, jQuery, Bootstrap, Jekyll", icon: "laptop-code" },
        { title: "Research Areas", desc: "Dynamic Programming, Operations Research, Machine Learning", icon: "brain" },
        { title: "Business Domain", desc: "Accounting, Finance, Management Science, Industrial Mgmt", icon: "briefcase" },
        { title: "Languages", desc: "English (TOEIC 880), Japanese (JLPT N3), Chinese (Native)", icon: "language" }
      ]
    },

    // --- Project Experience ---
    projects: {
      title: "Project Experience",
      subtitle: "Explore my projects involving AI, Decision Science, and Big Data Competitions",
      items: [
        {
          title: "Dynamic Pricing @ NTU Decision Science Lab",
          desc: "Awarded Distinguished Paper Award at 2025 IC-MIOR. Utilized DP and ML to simulate customer behavior and optimize airline pricing.",
          tags: ["Dynamic Programming", "Machine Learning", "Optimization"],
          image: "/images/project_dp.jpg",
          linkText: "View Abstract"
        },
        {
          title: "Investment Portfolio LINE Bot",
          desc: "Integrated TEJ database and PostgreSQL, using PCA and AHP for feature selection to build a system with 59% prediction accuracy.",
          tags: ["Python", "PostgreSQL", "Data Science"],
          image: "/images/project_tej.jpg",
          linkText: "View Abstract"
        },
        {
          title: "AI CUP 2025 Spring: AI Defect Detection",
          desc: "Bronze Medalist. Developed a hybrid model (LightGBM + CNN) using Fourier transforms for imbalanced data in manufacturing.",
          tags: ["Deep Learning", "Computer Vision", "LightGBM"],
          image: "/images/project_aicup.jpg",
          linkText: "View Abstract"
        },
        {
          title: "Agentic Workflow Automation @ Dentsu",
          desc: "Implemented cross-platform (FB, IG, LINE) social media automation workflows using GenAI tools and advanced prompt engineering.",
          tags: ["Agentic LLM", "Automation", "GenAI"],
          image: "/images/project_agent.jpg",
          linkText: "View Abstract"
        },
        {
          title: "Generative AI Hackathon @ Advantech",
          desc: "Developed a patient care system. Interfaced industrial cameras to capture expressions and built an agent for automated replies.",
          tags: ["AWS", "Linux", "AI Agent"],
          image: "/images/project_advantech.jpg",
          linkText: "View Abstract"
        },
        {
          title: "Big Data Competition @ Chunghwa Post",
          desc: "Received Creativity Award and GSS Special Award. Used ARIMA and Nonlinear Programming to optimize mailbox placement.",
          tags: ["Time Series", "Optimization", "Python"],
          image: "/images/project_post.jpg",
          linkText: "View Abstract"
        }
      ]
    },

    contact: {
      title: "Contact Me",
      subtitle: "Feel free to contact me!",
      email: "hungta.wang0118@gmail.com",
      phone: "+886 939 815 932"
    },

    // --- Work Experience ---
    experience: {
      title: "Work Experience",
      subtitle: "My professional and internship experiences",
      items: [
        {
          company: "PricewaterhouseCoopers (PwC)",
          position: "Auditor Intern",
          duration: "Jun. 2022 - Jul. 2022",
          location: "Kaohsiung, Taiwan",
          desc: "Conducted invoice audits during on-site visits to renewable energy and construction companies. Performed journal entry testing and financial statement reviews."
        }
      ]
    },

    footer: {
      copyright: "© 2026 Hung-Ta Wang. All rights reserved.",
    }
  }
};
