module.exports = {
    base: "/manmu/",
    title: '满目',
    description: '前端技术博客',
    theme: "reco",
    themeConfig: {
        // 导航
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '基础技术',
                items: [{
                        text: "Css&Html",
                        link: ""
                    },
                    {
                        text: "JavaScript",
                        link: ""
                    },
                    {
                        text: 'Vue',
                        link: ''
                    },
                    {
                        text: 'React',
                        link: ''
                    },
                    {
                        text: "Node",
                        link: ""
                    },
                    {
                        text: "Webpack",
                        link: ""
                    },
                    {
                        text: "TypeScript",
                        link: ""
                    },
                ]
            },
            {
                text: '算法',
                items: [{
                        text: "栈",
                        link: "",
                    },
                    {
                        text: "队列&双端队列",
                        link: ""
                    }
                ]
            },
            {
                text: "读书笔记",
                link: "/readbook/book-list"
            }
        ],
        // 侧边栏
        sidebar: {
            '/readbook/': [
                'book-list',
                'book-list-world'
            ],
            '/javascript/': [],
        },
        locales: {
            '/': {
                lang: "zh_CN"
            }
        }
    }
}