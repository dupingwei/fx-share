module.exports = {
  title: 'Bonze',
  description: '分享会记录-描述',
  base: '/fx-share/',
  themeConfig: {
    logo: '/logo.jpg',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
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
