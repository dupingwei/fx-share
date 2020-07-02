module.exports = {
  title: '分享会记录',
  description: '分享会记录-描述',
  themeConfig: {
    base: '/fx-share/',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: '分享', link: '/share/' },
    ],
    sidebar: {
      '/share/': [
        '/share/',
        {
          title: '分享日记',
          collapsable: false,
          children: [
            { title: '小程序list页面', path: '/share/0625/' },
            { title: '虚拟列表', path: '/share/0626/' },
          ],
        },
      ],
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    '@vuepress/active-header-links',
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
  ],
};
