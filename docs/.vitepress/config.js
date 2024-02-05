module.exports = {
  base: "/manmu/",
  title: "manmu",
  description: "Just playing around.",
  // 主题配置
  themeConfig: {
    siteTitle: "manmu",
    nav: [
      { text: "感想", link: "/" },
      {
        text: "前端",
        items: [{ text: "Vue", link: "/front/vue/" }],
      },
      {
        text: "后端",
        items: [],
      },
      {
        text: "部署相关",
        items: [],
      },
    ],
    sidebar: {
      "/front/vue/": [
        {
          text: "Vue",
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present manmu",
    },
  },
};
