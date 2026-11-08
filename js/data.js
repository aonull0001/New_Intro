
/* ==========================================================
   data.js ― サイトの掲載内容を管理するファイル

   ■ 編集方法
   ・文章は { ja: "日本語", en: "English" } 形式
   ・画像やURLが未設定の場合は空文字 "" にする
   ・配列に項目を追加すると、掲載内容を増やせます
   ・架空の情報は登録しないでください
   ========================================================== */

window.SITE_DATA = {

    /* ==========================================================
       CONTACT EMAIL
       ========================================================== */

    CONTACT_EMAIL: "tansan.microboot@gmail.com",


    /* ==========================================================
       META INFORMATION
       ========================================================== */

    meta: {
        title: {
            ja: "無の部屋。 | Aonull's Personal Space",
            en: "Mu no Heya. | Aonull's Personal Space"
        },

        description: {
            ja: "Aonullの活動・制作物・趣味を紹介するパーソナルサイト。",
            en: "A personal site introducing Aonull's activities, works and interests."
        }
    },


    /* ==========================================================
       COMMON UI TEXT
       ========================================================== */

    ui: {

        ja: {
            "nav.about": "自己紹介",
            "nav.works": "制作物",
            "nav.interests": "好きなもの",
            "nav.skills": "スキル",
            "nav.history": "これまで",
            "nav.activity": "活動記録",
            "nav.links": "リンク",
            "nav.contact": "連絡先",

            "ui.skip": "本文へスキップ",
            "ui.scroll": "Scroll",
            "ui.top": "ページトップへ",

            "hero.lead": "多分学生です。これでも一応受験生です。",

            "contact.lead": "お問い合わせはメールでお願いします。クリックするとメールアプリが開きます。",
            "contact.placeholder": "",
            "contact.spam": "メールアドレスをクリックするとメールアプリが開きます。",

            "p.notset": "未設定（js/data.js で編集）",
            "p.name": "活動名",
            "p.intro": "自己紹介",
            "p.activities": "活動内容",
            "p.interests": "興味・関心",
            "p.history": "経歴・活動の歩み",

            "w.more": "And more...",
            "h.empty": "まだ掲載できる出来事はありません。",
            "w.unpublished": "未公開",
            "w.published": "公開中",
            "w.visit": "作品を見る",
            "w.soon": "公開準備中",
            "w.detail": "詳細を見る",
            "w.noperiod": "時期未設定",
            "w.tech": "使用技術",
            "w.nodesc": "概要は未設定です。",

            "i.nodesc": "説明は未設定です。",
            "s.nodesc": "説明は未設定です。",

            "a.empty": "まだ掲載できる情報はありません。",
            "a.more": "詳細",

            "l.soon": "URL未設定",
            "l.nodesc": "",

            "theme.light": "Light",
            "theme.dark": "Dark",
            "theme.to": "テーマを切り替える",
            "lang.to": "言語を切り替える",
            "menu": "メニュー",
            "top": "ページトップへ戻る",
            "opens": "（新しいタブで開きます）"
        },


        en: {
            "nav.about": "About",
            "nav.works": "Works",
            "nav.interests": "Interests",
            "nav.skills": "Skills",
            "nav.history": "History",
            "nav.activity": "Activity",
            "nav.links": "Links",
            "nav.contact": "Contact",

            "ui.skip": "Skip to content",
            "ui.scroll": "Scroll",
            "ui.top": "Back to top",

            "hero.lead": "Probably a student. And yes, I'm an exam candidate too.",

            "contact.lead": "Please get in touch by email. Clicking the address opens your mail app.",
            "contact.placeholder": "",
            "contact.spam": "Click the email address to open your mail app.",

            "p.notset": "Not set (edit in js/data.js)",
            "p.name": "Name",
            "p.intro": "Introduction",
            "p.activities": "What I do",
            "p.interests": "Interests",
            "p.history": "History",

            "w.more": "And more...",
            "h.empty": "Nothing to show yet.",
            "w.unpublished": "Unpublished",
            "w.published": "Published",
            "w.visit": "View work",
            "w.soon": "Coming soon",
            "w.detail": "Details",
            "w.noperiod": "Period not set",
            "w.tech": "Tech",
            "w.nodesc": "No summary yet.",

            "i.nodesc": "No description yet.",
            "s.nodesc": "No description yet.",

            "a.empty": "Nothing to show yet.",
            "a.more": "Details",

            "l.soon": "URL not set",
            "l.nodesc": "",

            "theme.light": "Light",
            "theme.dark": "Dark",
            "theme.to": "Toggle theme",
            "lang.to": "Switch language",
            "menu": "Menu",
            "top": "Back to top",
            "opens": "(opens in a new tab)"
        }

    },


    /* ==========================================================
       ABOUT / PROFILE
       ========================================================== */

    profile: {

        image: "",

        imageAlt: {
            ja: "Aonullのプロフィール画像",
            en: "Profile image of Aonull"
        },

        name: "Aonull",

        intro: {
            ja: "Robloxを主に活動しています。あおぬるです。",
            en: "I'm Aonull, mainly active in Roblox development."
        },

        activities: {
            ja: "Robloxを中心に、システム開発やWeb制作などをしています。",
            en: "I mainly work on Roblox systems and web development."
        },

        interests: {
            ja: "ゲーム開発、Web制作、鉄道、音楽、VTuberなど。",
            en: "Game development, web design, railways, music and VTubers."
        }

    },


    /* ==========================================================
       WORKS / 制作物
       ========================================================== */

    works: [

        {
            title: {
                ja: "Roblox関連の開発",
                en: "Roblox Development"
            },

            desc: {
                ja: "Roblox「総武鉄道」などにおけるシステム類の提供・開発。",
                en: "Providing and developing systems for Roblox games such as \"Sobu Railway\"."
            },

            tech: [
                "Luau",
                "Roblox Studio"
            ],

            url: ""
        },


        {
            title: {
                ja: "Discord Bot開発",
                en: "Discord Bot Development"
            },

            desc: {
                ja: "身内の方向けに、Discordサーバーの管理・運営などを補助するBotを制作。",
                en: "Building bots that help manage and run Discord servers for friends and acquaintances."
            },

            tech: [
                "Python",
                "discord.py"
            ],

            url: ""
        },


        {
            title: {
                ja: "Web制作",
                en: "Web Development"
            },

            desc: {
                ja: "HTML / CSS / JavaScriptなどを使用したWebページの企画・制作。",
                en: "Planning and building web pages with HTML / CSS / JavaScript and more."
            },

            tech: [
                "HTML",
                "CSS",
                "JavaScript"
            ],

            url: ""
        }

    ],


    /* ==========================================================
       INTERESTS / 好きなもの
       ========================================================== */

    interests: [

        {
            category: {
                ja: "MUSIC",
                en: "MUSIC"
            },

            items: [
                {
                    ja: "シンデレラ・マジック / 紫咲シオン",
                    en: "シンデレラ・マジック / Murasaki Shion"
                }
            ]
        },


        {
            category: {
                ja: "VTUBER",
                en: "VTUBER"
            },

            items: [
                {
                    ja: "Hololive Gen6 (holoX)",
                    en: "Hololive Gen6 (holoX)"
                },

                {
                    ja: "風真いろは さん",
                    en: "Kazama Iroha"
                }
            ]
        }

    ],



    /* ==========================================================
       HISTORY / これまで
    
       古い出来事から順番に掲載。
       同じ月に複数の出来事があっても、それぞれ独立して表示。
       ========================================================== */

    history: [

        /* 2022年 */

        {
            date: "2022-05",
            dateLabel: {
                ja: "2022年05月",
                en: "May 2022"
            },
            title: {
                ja: "Robloxでの開発を開始",
                en: "Started Roblox Development"
            },
            body: {
                ja: "Robloxでの開発に興味を持ち、モデリングを中心に開発を始める。",
                en: "Became interested in Roblox development and started creating, mainly focusing on 3D modeling."
            }
        },


        /* 2023年 */

        {
            date: "2023-11",
            dateLabel: {
                ja: "2023年11月",
                en: "November 2023"
            },
            title: {
                ja: "尾羽急電鉄 入社",
                en: "Joined Obakyu Electric Railway"
            },
            body: {
                ja: "23年11月組のモデレーターとして尾羽急電鉄に入社。",
                en: "Joined Obakyu Electric Railway as a moderator in the November 2023 cohort."
            }
        },

        {
            date: "2023-11",
            dateLabel: {
                ja: "2023年11月",
                en: "November 2023"
            },
            title: {
                ja: "尾羽急電鉄 開発部に昇格",
                en: "Promoted to the Development Department"
            },
            body: {
                ja: "推薦昇格により、尾羽急電鉄の開発部に昇格。",
                en: "Promoted to the Development Department through a recommendation."
            }
        },

        {
            date: "2023-11",
            dateLabel: {
                ja: "2023年11月",
                en: "November 2023"
            },
            title: {
                ja: "尾羽急電鉄 ゲーム訪問数50万人突破",
                en: "Obakyu Railway Game Reached 500,000 Visits"
            },
            body: {
                ja: "尾羽急電鉄のゲーム訪問数が50万人を突破。",
                en: "The Obakyu Railway game surpassed 500,000 visits."
            }
        },

        {
            date: "2023-11",
            dateLabel: {
                ja: "2023年11月",
                en: "November 2023"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー22K突破",
                en: "Obakyu Railway Group Reached 22K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が22,000人を突破。",
                en: "The Obakyu Railway group surpassed 22,000 members."
            }
        },

        {
            date: "2023-12",
            dateLabel: {
                ja: "2023年12月",
                en: "December 2023"
            },
            title: {
                ja: "意匠権問題によるゲーム封鎖・復帰",
                en: "Game Closure Due to Design Rights Issues and Return"
            },
            body: {
                ja: "鉄道各社において「意匠権」の問題が発生し、ゲームが封鎖される。その後、年末に復帰。",
                en: "Games across several railway groups were closed due to design rights issues. The game returned at the end of the year."
            }
        },


        /* 2024年 */

        {
            date: "2024-01",
            dateLabel: {
                ja: "2024年01月",
                en: "January 2024"
            },
            title: {
                ja: "尾羽急電鉄 ゲーム訪問数100万人突破",
                en: "Obakyu Railway Game Reached 1 Million Visits"
            },
            body: {
                ja: "尾羽急電鉄のゲーム訪問数が100万人を突破。",
                en: "The Obakyu Railway game surpassed 1 million visits."
            }
        },

        {
            date: "2024-01",
            dateLabel: {
                ja: "2024年01月",
                en: "January 2024"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー30K突破",
                en: "Obakyu Railway Group Reached 30K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が30,000人を突破。",
                en: "The Obakyu Railway group surpassed 30,000 members."
            }
        },

        {
            date: "2024-08",
            dateLabel: {
                ja: "2024年08月",
                en: "August 2024"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー50K突破",
                en: "Obakyu Railway Group Reached 50K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が50,000人を突破。",
                en: "The Obakyu Railway group surpassed 50,000 members."
            }
        },

        {
            date: "2024-12",
            dateLabel: {
                ja: "2024年12月",
                en: "December 2024"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー60K突破",
                en: "Obakyu Railway Group Reached 60K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が60,000人を突破。",
                en: "The Obakyu Railway group surpassed 60,000 members."
            }
        },


        /* 2025年 */

        {
            date: "2025-07",
            dateLabel: {
                ja: "2025年07月",
                en: "July 2025"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー70K突破",
                en: "Obakyu Railway Group Reached 70K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が70,000人を突破。",
                en: "The Obakyu Railway group surpassed 70,000 members."
            }
        },

        {
            date: "2025-11",
            dateLabel: {
                ja: "2025年11月",
                en: "November 2025"
            },
            title: {
                ja: "横浜鉄道 入社",
                en: "Joined Yokohama Railway"
            },
            body: {
                ja: "2025年11月組として、横浜鉄道に運転士として入社。",
                en: "Joined Yokohama Railway as a train driver with the November 2025 cohort."
            }
        },

        {
            date: "2025-11",
            dateLabel: {
                ja: "2025年11月",
                en: "November 2025"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー100K突破",
                en: "Obakyu Railway Group Reached 100K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が100,000人を突破し、Roblox鉄道のトップへ。",
                en: "The Obakyu Railway group surpassed 100,000 members, reaching the top of Roblox railway groups."
            }
        },


        /* 2026年 */

        {
            date: "2026-02",
            dateLabel: {
                ja: "2026年02月",
                en: "February 2026"
            },
            title: {
                ja: "横浜鉄道 運輸司令に昇格",
                en: "Promoted to Transportation Control"
            },
            body: {
                ja: "横浜鉄道にて、運輸司令に昇格。",
                en: "Promoted to Transportation Control at Yokohama Railway."
            }
        },

        {
            date: "2026-02",
            dateLabel: {
                ja: "2026年02月",
                en: "February 2026"
            },
            title: {
                ja: "総武鉄道 上層部兼開発部として推薦入社",
                en: "Joined Sobu Railway as a Recommended Senior Staff Member and Developer"
            },
            body: {
                ja: "総武鉄道に上層部兼開発部として推薦を受け、入社。",
                en: "Joined Sobu Railway through a recommendation as a senior staff member and developer."
            }
        },

        {
            date: "2026-03",
            dateLabel: {
                ja: "2026年03月",
                en: "March 2026"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー150K突破",
                en: "Obakyu Railway Group Reached 150K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が150,000人を突破。",
                en: "The Obakyu Railway group surpassed 150,000 members."
            }
        },

        {
            date: "2026-04",
            dateLabel: {
                ja: "2026年04月",
                en: "April 2026"
            },
            title: {
                ja: "尾羽急電鉄 ゲーム訪問数777万人突破",
                en: "Obakyu Railway Game Reached 7.77 Million Visits"
            },
            body: {
                ja: "尾羽急電鉄のゲーム訪問数が7,770,000回を突破。",
                en: "The Obakyu Railway game surpassed 7,770,000 visits."
            }
        },

        {
            date: "2026-06",
            dateLabel: {
                ja: "2026年06月",
                en: "June 2026"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー200K突破",
                en: "Obakyu Railway Group Reached 200K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が200,000人を突破。",
                en: "The Obakyu Railway group surpassed 200,000 members."
            }
        },

        {
            date: "2026-07",
            dateLabel: {
                ja: "2026年07月",
                en: "July 2026"
            },
            title: {
                ja: "横浜鉄道 インストラクターに昇格",
                en: "Promoted to Instructor"
            },
            body: {
                ja: "横浜鉄道にて、インストラクターに昇格。",
                en: "Promoted to Instructor at Yokohama Railway."
            }
        },

        {
            date: "2026-08",
            dateLabel: {
                ja: "2026年08月",
                en: "August 2026"
            },
            title: {
                ja: "尾羽急電鉄 ゲーム訪問数1,000万人突破",
                en: "Obakyu Railway Game Reached 10 Million Visits"
            },
            body: {
                ja: "尾羽急電鉄のゲーム訪問数が1,000万人を突破。",
                en: "The Obakyu Railway game surpassed 10 million visits."
            }
        },

        {
            date: "2026-08",
            dateLabel: {
                ja: "2026年08月",
                en: "August 2026"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー250K突破",
                en: "Obakyu Railway Group Reached 250K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が250,000人を突破。",
                en: "The Obakyu Railway group surpassed 250,000 members."
            }
        },

        {
            date: "2026-10",
            dateLabel: {
                ja: "2026年10月",
                en: "October 2026"
            },
            title: {
                ja: "尾羽急電鉄 グループメンバー293K突破",
                en: "Obakyu Railway Group Reached 293K Members"
            },
            body: {
                ja: "尾羽急電鉄のグループメンバー数が293,000人を突破。",
                en: "The Obakyu Railway group surpassed 293,000 members."
            }
        }

    ],



    /* ==========================================================
       SKILLS / スキル・使用技術
       ========================================================== */

    skills: [

        {
            group: "Web Development",

            items: [

                {
                    name: "HTML",

                    desc: {
                        ja: "基本的なWebページの制作。",
                        en: "Basic web page development."
                    },

                    level: {
                        ja: "基本的な制作が可能",
                        en: "Basic proficiency"
                    }
                },


                {
                    name: "CSS",

                    desc: {
                        ja: "Webページのデザイン・レイアウト調整。",
                        en: "Web design and layout."
                    },

                    level: {
                        ja: "基本的な制作が可能",
                        en: "Basic proficiency"
                    }
                },


                {
                    name: "JavaScript",

                    desc: {
                        ja: "Webページへの動きや機能の実装。",
                        en: "Adding interactions and functionality to web pages."
                    },

                    level: {
                        ja: "基本的な制作が可能",
                        en: "Basic proficiency"
                    }
                }

            ]
        },


        {
            group: "Roblox Development",

            items: [

                {
                    name: "Luau",

                    desc: {
                        ja: "Roblox内のシステムや機能の開発。",
                        en: "Developing systems and features in Roblox."
                    },

                    level: {
                        ja: "",
                        en: ""
                    }
                },


                {
                    name: "Roblox Studio",

                    desc: {
                        ja: "Robloxゲームの制作・開発環境。",
                        en: "Roblox game creation and development environment."
                    },

                    level: {
                        ja: "",
                        en: ""
                    }
                }

            ]
        },


        {
            group: "Bot Development",

            items: [

                {
                    name: "Python",

                    desc: {
                        ja: "現在勉強中。",
                        en: "Currently learning."
                    },

                    level: {
                        ja: "勉強中",
                        en: "Learning"
                    }
                }

            ]
        }

    ],


    /* ==========================================================
       ACTIVITY / 活動記録・お知らせ
  
       新しい順に表示されます。
       追加例:
       {
         date: "2026-08-01",
         title: { ja: "お知らせ", en: "Announcement" },
         body: { ja: "本文", en: "Description" },
         category: { ja: "お知らせ", en: "News" },
         url: ""
       }
       ========================================================== */

    activity: [],


    /* ==========================================================
       LINKS / SNS・外部リンク
  
       URLが空の場合はリンク先未設定として扱います。
       ========================================================== */

    links: [

        {
            name: "YouTube",
            account: "@Aonull000",
            url: "",
            icon: "",

            desc: {
                ja: "",
                en: ""
            }
        },


        {
            name: "X",
            account: "@aonull_",
            url: "",
            icon: "",

            desc: {
                ja: "",
                en: ""
            }
        },


        {
            name: "GitHub",
            account: "",
            url: "",
            icon: "",

            desc: {
                ja: "",
                en: ""
            }
        }

    ]

};
