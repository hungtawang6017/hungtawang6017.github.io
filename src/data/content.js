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
      subtitle: "對知識充滿熱忱的跨領域學習者",
      text1: "我是王泓達，擁有國立成功大學會計學與工業資訊管理雙學士學位，目前於國立臺灣大學工業工程學研究所攻讀碩士。會計背景培養了我縝密的問題解決能力與對商業運作的深刻理解，而工資管的訓練則結合了工業實務與資訊管理，使我能將規劃轉化為具體成果。目前在台大決策科學實驗室研究動態定價，專注於馬可夫決策過程、動態規劃、時間序列分析與深度神經網絡等方法。",
      text2: "除了學術知識，我也致力於將理論應用於解決實際問題。大學時期，我曾帶領團隊在成大商管競賽中以 AKB48 海外拓展策略獲得冠軍。碩士期間，我參加了中華郵政大數據競賽，並獲得創意獎與 Galaxy Software Services 特別獎。我們的專案利用時間序列分析與非線性規劃優化郵筒設置，預期能為新設點帶來 7.5 倍的營收增長。",
      text3: "我期許自己能在團隊中扮演積極與激勵的角色，透過跨部門協作激發創意。憑藉我的分析專業與人際溝通能力，我有信心能帶來嶄新觀點、推動創新並提升團隊績效。我相信，堅持不懈與清晰的思維是追求卓越與持續自我精進的關鍵。"
    },

    // --- 技能卡片列表 ---
    skills: {
      title: "專業技能",
      subtitle: "我的專業領域涵蓋多個開發堆疊，從前端到後端，從設計到開發",
      items: [
        { title: "程式設計", desc: "Python, C++, Gurobi, Qt Development, Linux", icon: "code" },
        { title: "數據科學", desc: "R, SQL, SPSS, TEJ, Oracle Crystal Ball", icon: "chart-bar" },
        { title: "網頁開發", desc: "Node.js, Jekyll, HTML, CSS, JavaScript, jQuery, Bootstrap", icon: "laptop-code" },
        { title: "學術研究", desc: "動態規劃, 深度學習", icon: "brain" },
        { title: "財務管理", desc: "財務會計, 財務報表分析, 衍生性金融商品", icon: "briefcase" },
        { title: "語言能力", desc: "英語 (TOEIC 880), 日語 (JLPT N3), 德語 (入門),韓語 (入門)", icon: "language" }
      ]
    },

    // --- 專案經歷 ---
    projects: {
      title: "專案經歷",
      subtitle: "探索我參與的各項專案，包含 AI 應用、決策科學與大數據競賽",
      items: [
        {
          title: "動態定價策略研究 @ 台大決策科學實驗室",
          desc: "獲 2025 管理創新與作業研究國際研討會「傑出論文獎」。運用動態規劃與機器學習模擬航空業顧客行為，優化定價效益。",
          tags: ["Dynamic Programming", "Machine Learning", "Optimization"],
          image: "/images/project_dp.jpg",
          linkText: "查看摘要"
        },
        {
          title: "投資組合推薦 LINE Bot",
          desc: "整合 TEJ 資料庫與 PostgreSQL，運用 PCA 與 AHP 模型進行特徵選取，打造準確率達 59% 的投資預測與推薦系統。",
          tags: ["Python", "PostgreSQL", "Data Science"],
          image: "/images/project_tej.jpg",
          linkText: "查看摘要"
        },
        {
          title: "AI CUP 2025 春季賽：羽球拍瑕疵檢測",
          desc: "榮獲全國銅牌。開發 LightGBM 與 CNN 混合模型，應用傅立葉轉換處理不平衡資料，解決製造業視覺辨識痛點。",
          tags: ["Deep Learning", "Computer Vision", "LightGBM"],
          image: "/images/project_aicup.jpg",
          linkText: "查看摘要"
        },
        {
          title: "Agentic 工作流自動化 @ Dentsu / AI Academy",
          desc: "利用 GenAI 工具與進階提示工程 (Prompt Engineering)，實現跨平台 (FB, IG, LINE) 的社群媒體自動化發文工作流。",
          tags: ["Agentic LLM", "Automation", "GenAI"],
          image: "/images/project_agent.jpg",
          linkText: "查看摘要"
        },
        {
          title: "Generative AI 應用黑客松 @ 研華科技",
          desc: "開發病患照護系統。串接 Linux 工業攝影機捕捉表情，並構建 Agent 工作流自動生成對應的照護回覆。",
          tags: ["AWS", "Linux", "AI Agent"],
          image: "/images/project_advantech.jpg",
          linkText: "查看摘要"
        },
        {
          title: "郵務大數據競賽 @ 中華郵政",
          desc: "獲創意獎與 GSS 特別獎。使用 ARIMA 模型與非線性規劃優化郵筒設置，預期為新設點提升 7.5 倍營收增量。",
          tags: ["Time Series", "Optimization", "Python"],
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
