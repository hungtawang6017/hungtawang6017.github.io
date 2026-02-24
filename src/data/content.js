export const content = {
  zh: {
    nav: {
      home: "首頁",
      about: "關於我",
      skills: "專業技能",
      projects: "作品集",
      contact: "聯絡方式"
    },
    hero: {
      greeting: "嗨，我是 ",
      name: "王泓達",
      subtitle: "國立臺灣大學工業工程學研究所 碩士生",
      description: "國立成功大學會計學系、工業與資訊管理學系雙學位學士",
      viewProjects: "我的貼文",
      contactMe: "聯絡我"
    },
    about: {
      title: "關於我",
      subtitle: "對知識充滿熱忱的跨領域學習者",
      text1: "我是王泓達，擁有國立成功大學會計學與工業資訊管理雙學士學位，目前於國立臺灣大學工業工程學研究所攻讀碩士。會計背景培養了我縝密的問題解決能力與對商業運作的深刻理解，而工資管的訓練則結合了工業實務與資訊管理，使我能將規劃轉化為具體成果。目前在台大決策科學實驗室研究動態定價，專注於馬可夫決策過程、動態規劃、時間序列分析與深度神經網絡等方法。",
      text2: "除了學術知識，我也致力於將理論應用於解決實際問題。大學時期，我曾帶領團隊在成大商管競賽中以 AKB48 海外拓展策略獲得冠軍。碩士期間，我參加了中華郵政大數據競賽，並獲得創意獎與 Galaxy Software Services 特別獎。我們的專案利用時間序列分析與非線性規劃優化郵筒設置，預期能為新設點帶來 7.5 倍的營收增長。",
      text3: "我期許自己能在團隊中扮演積極與激勵的角色，透過跨部門協作激發創意。憑藉我的分析專業與人際溝通能力，我有信心能帶來嶄新觀點、推動創新並提升團隊績效。我相信，堅持不懈與清晰的思維是追求卓越與持續自我精進的關鍵。"
    },
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
    projects: {
      title: "作品集",
      subtitle: "探索我最新的專案作品與創意實踐",
      items: [
        {
          title: "投資組合推薦 LINE Bot",
          desc: "整合 TEJ 資料庫與 PostgreSQL，運用 PCA 與 AHP 模型進行特徵選取，打造準確率達 59% 的投資預測與推薦系統。",
          tags: ["Python", "SQL", "AHP Model"],
          image: "/images/project1.jpg",
          linkText: "查看專案"
        },
        {
          title: "羽球拍瑕疵檢測 AI 模型",
          desc: "AI CUP 2025 春季賽銀牌作品。結合 LightGBM 與 CNN 混合模型，應用傅立葉轉換處理不平衡資料，精準識別生產瑕疵。",
          tags: ["Deep Learning", "Computer Vision", "LightGBM"],
          image: "/images/project2.jpg",
          linkText: "查看專案"
        },
        {
          title: "動態定價策略研究",
          desc: "於台大決策科學實驗室開發。運用動態規劃 (Dynamic Programming) 與機器學習模擬顧客行為，優化航空業定價策略。",
          tags: ["Dynamic Programming", "Machine Learning", "Optimization"],
          image: "/images/project3.jpg",
          linkText: "查看專案"
        }
      ]
    },
    contact: {
      title: "聯絡我",
      subtitle: "歡迎隨時與我聯繫！",
      email: "hungta.wang0118@gmail.com",
      phone: "+886 939 815 932"
    },
    footer: {
      copyright: "© 2025 Hung-Ta Wang. All rights reserved.",
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm ",
      name: "Hung-Ta Wang",
      subtitle: "Institute of Industrial Engineering (M.S.) Student",
      description: "Double degree in Accounting(B.B.A) & Industrial and Information Management(B.M.S) at National Cheng Kung University",
      viewProjects: "View My Posts",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      subtitle: "I am a passionate interdisciplinary learner",
      text1: "I am Hung-Ta Wang. I hold dual bachelor’s degrees in Accounting and Industrial and Information Management from National Cheng Kung University (NCKU), and I am currently pursuing a master’s degree in Industrial Engineering at National Taiwan University (NTU). My undergraduate training in accounting has instilled in me a meticulous approach to problem-solving and a solid understanding of business operations. At NTU, I am conducting research on dynamic pricing at the Decision Science Laboratory, focusing on methodologies such as Markov Decision Processes, Dynamic Programming, Time Series Analysis, and Deep Neural Networks.",
      text2: "Beyond academic knowledge, I have applied theoretical frameworks to real-world challenges. During my undergraduate studies, my team won the championship in the NCKU Business Competition. As a master’s student, I competed in the Chunghwa Post Co., Ltd. Big Data Competition, winning the Creativity Award and Special Award. Our project centered on using Time Series Analysis and Nonlinear Programming to optimize mailbox placement, achieving a projected revenue growth of 7.5 times.",
      text3: "I aspire to play a positive and motivating role within a team, fostering creativity through collaboration. With my expertise in analytics and strong interpersonal communication skills, I am confident in my ability to bring fresh perspectives, drive innovation, and enhance overall team performance. I believe that persistence and clarity of thought are key to achieving excellence and continuous self-improvement."
    },
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
    projects: {
      title: "Portfolio",
      subtitle: "Explore my latest projects and creative practices",
      items: [
        {
          title: "Investment Portfolio LINE Bot",
          desc: "Integrated TEJ database with PostgreSQL, using PCA and AHP models for feature selection to build an investment prediction system with 59% accuracy.",
          tags: ["Python", "SQL", "AHP Model"],
          image: "/images/project1.jpg",
          linkText: "View Project"
        },
        {
          title: "Badminton Racket Defect Detection AI",
          desc: "Silver Prize at AI CUP 2025 Spring. Developed a hybrid model (LightGBM + CNN) using Fourier transform for imbalanced data to detect manufacturing defects.",
          tags: ["Deep Learning", "Computer Vision", "LightGBM"],
          image: "/images/project2.jpg",
          linkText: "View Project"
        },
        {
          title: "Dynamic Pricing Strategy Research",
          desc: "Developed at NTU Decision Science Lab. Utilized Dynamic Programming and ML to simulate customer behavior and optimize airline pricing strategies.",
          tags: ["Dynamic Programming", "Machine Learning", "Optimization"],
          image: "/images/project3.jpg",
          linkText: "View Project"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Feel free to contact me!",
      email: "hungta.wang0118@gmail.com",
      phone: "+886 939 815 932"
    },
    footer: {
      copyright: "© 2025 Hung-Ta Wang. All rights reserved.",
    }
  }
};
