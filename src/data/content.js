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
      subtitle: "我的專長涵蓋多個領域，學習新知是一件很令人興奮的事",
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
      subtitle: "決策科學、深度學習、大數據以及個案分析",
      items: [
        {
          title: "考量市場區隔與參考價格之動態訂價策略 @ NTU",
          desc: "獲傑出論文獎，由 2025 管理創新與作業研究國際研討會主辦。時效性商品需在有限銷售期內，做出精準的需求預測與有效用的訂價，因此我的研究提出同時考量異質價格敏感度與寡占競爭的時效性產品動態訂價模型。",
          tags: ["馬可夫決策過程", "深度學習"],
          image: "/images/project_dp.jpg",
          linkText: "點擊查看貼文",
          url: "https://hungtawang.github.io/2025/01/20/Dynamic_Pricing_Strategy_NTU"
        },
        {
          title: "AI CUP 2025春季賽－桌球智慧球拍資料的精準分析競賽",
          desc: "獲得全國銅牌獎 (633 隊伍中第 3 名)，由教育部人工智慧競賽與標註資料蒐集計畫辦公室主辦。我們先以傅立葉轉換將波型資料轉換為頻譜圖，再使用 LightGBM 與 CNN 混合模型，以提升模型預測準確度。",
          tags: ["深度學習", "影像辨識"],
          image: "/images/project_aicup.jpg",
          linkText: "點擊查看貼文",
          url: "https://hungtawang.github.io/2025/04/10/AI_CUP_2025_Spring"
        },
        {
          title: "雲湧智生｜臺灣生成式AI應用黑客松競賽",
          desc: "我們使用 Linux 操作研華科技提供的工業攝影機捕捉表情與動作，並透過 AWS Kinesis 串流至 AWS S3 儲存，再透過 AWS Bedrock 與 AWS Lambda 進行模型訓練，構建 Agent Workflow 自動生成對應的照護回覆。",
          tags: ["AWS Bedrock", "AWS Kinesis", "AWS Lambda", "Linux Shell Script"],
          image: "/images/project_advantech.jpg",
          linkText: "點擊查看貼文",
          url: "https://hungtawang.github.io/2025/04/20/Generative_AI_Applications_Hackathon"
        },
        {
          title: "AI郵局 智創新局 - 2024 郵政大數據競賽",
          desc: "獲最佳創意獎與數據應用創新獎，由中華郵政主辦。我們使用 AWS 作為工具，建構 ARIMA 模型預測未來 i 郵箱之寄/收件量，再結合赫夫模型與非線性規劃最佳化 i 郵箱設置，以提升新設 i 郵箱之使用率，模型預估之收益較舊有 i 郵箱提升 7.5 倍。",
          tags: ["Amazon S3", "QuickSight", "Sagemaker notebook", "Sagemaker canvas"],
          image: "/images/project_post.jpg",
          linkText: "點擊查看貼文",
          url: "https://hungtawang.github.io/2024/11/29/Chunghwa_Post_Co_Ltd_Big_Data_Competition"
        },
        {
          title: "利用 AHP 結合 LINE Bot 推薦投資組合 @ NCKU",
          desc: "使用 TEJ 資料庫蒐集資料並存入 PostgreSQL，運用 Principal Component Analysis (PCA) 與 Analytic Hierarchy Process (AHP) 模型進行特徵選取與投資漲跌預測，最終準確率達 59%。",
          tags: ["SQL", "AHP", "TEJ", "Linebot"],
          image: "/images/project_tej.jpg",
          linkText: "點擊查看貼文",
          url: "https://hungtawang.github.io/2023/11/20/Investment_Portfolio_Recommendation_NCKU"
        },
        {
          title: "成功盃個案競賽",
          desc: "獲得冠軍，由國立成功大學管理學院舉辦，我們針對日本 AKB48 的海外拓點提供選址建議以及落地方案，此外，我們更提出了詳盡的成本預算估計與財務規劃，創新的行銷策略與縝密的資產分配獲得評審的肯定。",
          tags: ["個案分析", "財務分析", "成本會計", "行銷管理"],
          image: "/images/project_agent.jpg",
          linkText: "點擊查看貼文",
          url: "https://hungtawang.github.io/2021/10/02/NCKU_Business_Competition"
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
      subtitle: "我在實習累積的實務經驗",
      items: [
        {
          company: "PricewaterhouseCoopers (PwC) 資誠聯合會計師事務所",
          position: "審計實習生 (Auditor Intern)",
          duration: "2022年6月 - 2022年7月",
          location: "高雄，台灣",
          desc: "外派至綠能與營造公司進行實地查核。執行會計傳票測試、內部控制測試與稅務抽查，並核對財務報表是否有誤。"
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
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },

    // --- Hero Section ---
    hero: {
      greeting: "Hi, I'm ",
      name: "Hung-Ta Wang",
      subtitle: "M.S., Institute of Industrial Engineering @ NTU",
      description: "Double Degree in Accounting & Industrial and Information Management @ NCKU",
      viewProjects: "My Posts",   // Link to external blog
      contactMe: "Contact Me"
    },

    // --- About Me ---
    about: {
      title: "About Me",
      subtitle: "Interdisciplinary Specialist in Industrial Engineering & Finance",
      text1: "Hello, I am Hung-Ta, Wang. I hold dual bachelor's degrees in Accounting and Industrial and Information Management from National Cheng Kung University, and I am currently pursuing advanced studies at the Institute of Industrial Engineering, National Taiwan University. This interdisciplinary background has shaped my unique mindset: I possess the professional rigor and knowledge of an accountant regarding costs, benefits, and tax regulations, combined with the logical thinking and execution capability of an industrial engineer using data, optimization, and programming to implement management concepts.",
      text2: "My greatest strength is my ability to provide innovative solutions with a holistic perspective. I excel at identifying core issues and solving them with minimal modifications to transform technology into a business advantage. For instance, in addressing ticket pricing in the airline industry, I developed a dynamic pricing model that accounts for customer behavior and reference price effects. This research, which bridges theory and practice, received the Distinguished Paper Award at the 2025 International Conference on Management Innovation and Operations Research (IC-MIOR).",
      text3: "I believe that solid mathematics and logic are the core literacies for problem-solving; programming is the medium for executing that math, while management insight is the core value that unites people to solve problems together in a team. I have trained myself with these goals in mind while continuously learning new fields such as languages, web development, and Generative AI. I look forward to applying this interdisciplinary insight and bold, innovative execution in a professional setting to create value for the company."
    },

    // --- Skills Cards ---
    skills: {
      title: "Professional Skills",
      subtitle: "My expertise spans multiple fields. Learning new knowledge is always fascinating",
      items: [
        { title: "Programming", desc: "C++, C#, Python, Gurobi, Qt Development, Linux Shell Script", icon: "code" },
        { title: "Data Science", desc: "R, SQL, SPSS, TEJ, Oracle Crystal Ball", icon: "chart-bar" },
        { title: "Web Development", desc: "React, Jekyll, HTML, CSS, JavaScript, jQuery, Bootstrap", icon: "laptop-code" },
        { title: "Academic Research", desc: "Deep Learning, Markov Decision Process, Revenue Management, Customer Heterogeneity, Behavior Simulation", icon: "brain" },
        { title: "Financial Management", desc: "Financial Accounting, Cost Accounting, Auditing, Financial Statement Analysis, Engineering Economy, Derivatives of Financial Instruments", icon: "briefcase" },
        { title: "Languages", desc: "Chinese (Native), English (TOEIC 880), Japanese (JLPT N3), German (Basic), Korean (Basic)", icon: "language" }
      ]
    },

    // --- Project Experience ---
    projects: {
      title: "Project Experience",
      subtitle: "Decision Science, Deep Learning, Big Data and Case Studies",
      items: [
        {
          title: "Dynamic Pricing Considering Reference-Price Effects and Segment-Specific Price Sensitivity @ NTU",
          desc: "Awarded Distinguished Paper Award at the 2025 International Conference on Management Innovation and Operations Research. As perishable products require precise demand forecasting and effective pricing, my research proposes a dynamic pricing model for time-sensitive products that considers both heterogeneous price sensitivity and oligopolistic competition.",
          tags: ["Markov Decision Process", "Deep Learning"],
          image: "/images/project_dp.jpg",
          linkText: "Click to view my post",
          url: "https://hungtawang.github.io/2025/01/20/Dynamic_Pricing_Strategy_NTU"
        },
        {
          title: "AI CUP 2025 Spring - Table Tennis Smart Racket Data Precision Analysis",
          desc: "Won National Bronze Medal (3rd place out of 633 teams). Hosted by the Ministry of Education. We converted waveform data into spectrograms using Fourier Transform, then utilized a hybrid LightGBM and CNN model to enhance prediction accuracy.",
          tags: ["Deep Learning", "Computer Vision"],
          image: "/images/project_aicup.jpg",
          linkText: "Click to view my post",
          url: "https://hungtawang.github.io/2025/04/10/AI_CUP_2025_Spring"
        },
        {
          title: "Generative AI Applications Hackathon",
          desc: "Utilized Linux to interface with industrial cameras from Advantech to capture patient expressions. Data was streamed via AWS Kinesis to S3, and processed via AWS Bedrock and Lambda for model training, constructing an Agent Workflow to automatically generate care responses.",
          tags: ["AWS Bedrock", "AWS Kinesis", "AWS Lambda", "Linux Shell Script"],
          image: "/images/project_advantech.jpg",
          linkText: "Click to view my post",
          url: "https://hungtawang.github.io/2025/04/20/Generative_AI_Applications_Hackathon"
        },
        {
          title: "2024 Chunghwa Post Big Data Competition",
          desc: "Received Best Creativity Award and Special Award from Galaxy Software Services. We built ARIMA models on AWS to predict iBox usage, and applied the Huff model with nonlinear programming to optimize iBox placement, projecting a 7.5x revenue increase compared to existing spots.",
          tags: ["Amazon S3", "QuickSight", "Sagemaker notebook", "Sagemaker canvas"],
          image: "/images/project_post.jpg",
          linkText: "Click to view my post",
          url: "https://hungtawang.github.io/2024/11/29/Chunghwa_Post_Co_Ltd_Big_Data_Competition"
        },
        {
          title: "Investment Portfolio Recommendation by AHP and LINE Bot @ NCKU",
          desc: "Collected data using TEJ database into PostgreSQL. Applied Principal Component Analysis (PCA) and Analytic Hierarchy Process (AHP) for feature selection and stock prediction, achieving an accuracy of 59%.",
          tags: ["SQL", "AHP", "TEJ", "Linebot"],
          image: "/images/project_tej.jpg",
          linkText: "Click to view my post",
          url: "https://hungtawang.github.io/2023/11/20/Investment_Portfolio_Recommendation_NCKU"
        },
        {
          title: "NCKU Case Study Competition",
          desc: "Won Championship hosted by NCKU College of Management. We provided location recommendations and localization strategies for Japanese group AKB48's overseas expansion, including detailed cost budgeting and financial planning. Our innovative marketing was highly praised by judges.",
          tags: ["Case Study", "Financial Analysis", "Cost Accounting", "Marketing"],
          image: "/images/project_agent.jpg",
          linkText: "Click to view my post",
          url: "https://hungtawang.github.io/2021/10/02/NCKU_Business_Competition"
        }
      ]
    },

    // --- Contact Information ---
    contact: {
      title: "Contact Me",
      subtitle: "Feel free to reach out anytime!",
      email: "hungta.wang0118@gmail.com",
      phone: "+886 939 815 932"
    },

    // --- Work Experience ---
    experience: {
      title: "Work Experience",
      subtitle: "My professional experience during internship",
      items: [
        {
          company: "PricewaterhouseCoopers (PwC) Taiwan",
          position: "Auditor Intern",
          duration: "Jun. 2022 - Jul. 2022",
          location: "Kaohsiung, Taiwan",
          desc: "Dispatched to green energy and construction firms for on-site audits. Performed journal entry testing, internal control testing, and tax sampling audits while identifying discrepancies in financial statements."
        }
      ]
    },

    // --- Footer ---
    footer: {
      copyright: "© 2026 Hung-Ta Wang. All rights reserved.",
    }
  }
};
