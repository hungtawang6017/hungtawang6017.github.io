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
      description: "國立成功大學會計學系、工業與資訊管理學系雙學位",
      viewProjects: "查看作品",
      contactMe: "聯絡我"
    },
    about: {
      title: "關於我",
      subtitle: "打造卓越的數位體驗",
      text1: "我擁有國立成功大學會計學與工業資訊管理雙學位，目前在國立臺灣大學深造工業工程碩士（GPA 4.02/4.3）。我的專業橫跨數據分析、演算法優化與全端開發。",
      text2: "曾於台大決策科學實驗室擔任研究助理，並在 PwC 資誠擔任審計實習生。這些經歷讓我具備結合技術實力與商業邏輯的獨特優勢，能運用 Python、R 與動態規劃解決複雜問題。",
      text3: "在工作之餘，我熱衷於參與 AI 競賽（如 AI CUP 銀牌）與黑客松，持續在數據科學與人工智慧領域精進。"
    },
    skills: {
      title: "專業技能",
      subtitle: "我的專業領域涵蓋多個開發堆疊，從前端到後端，從設計到開發",
      items: [
        { title: "程式語言", desc: "Python (OOP), C++, R, Bash, SQL, Qt Development", icon: "code" },
        { title: "數據科學", desc: "Gurobi, SPSS, TEJ, Oracle Crystal Ball, PostgreSQL", icon: "chart-bar" },
        { title: "網頁開發", desc: "HTML, CSS, JavaScript, jQuery, Bootstrap, Jekyll", icon: "laptop-code" },
        { title: "研究領域", desc: "Dynamic Programming, Operations Research, Machine Learning", icon: "brain" },
        { title: "商業知識", desc: "Accounting, Finance, Management Science, Industrial Mgmt", icon: "briefcase" },
        { title: "語言能力", desc: "English (TOEIC 880), Japanese (JLPT N3), Chinese (Native)", icon: "language" }
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
      viewProjects: "View Projects",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      subtitle: "Crafting Exceptional Digital Experiences",
      text1: "I hold a double degree in Accountancy and Industrial & Information Management from NCKU and am currently pursuing my Master's in Industrial Engineering at NTU (GPA 4.02/4.3). My expertise spans data analysis, algorithm optimization, and full-stack development.",
      text2: "I have served as a Research Assistant at the NTU Decision Science Lab and an Auditor Intern at PwC. These experiences have equipped me with a unique blend of technical skills and business acumen, enabling me to solve complex problems using Python, R, and Dynamic Programming.",
      text3: "Outside of academics, I actively participate in AI competitions (such as winning the Silver Prize at AI CUP) and hackathons, continuously honing my skills in Data Science and AI."
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
