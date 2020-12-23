module.exports = {
  base: '/blogs/',
  title: 'Lvsick', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'Lvsick的前端记录', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      'link',
      { rel: 'icon', href: '/docs/.vuepress/public/home.jpg' }
      // 浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ]
  ],
  themeConfig: {
    logo: '/home.jpg', //网页顶端导航栏左上角的图标
    lastUpdated: 'Last Updated',
    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: '首页', link: '/' },

      //格式二：添加下拉菜单，link指向的文件路径
      { text: '笔记', link: '/pages/artical/artical1.md' },
      { text: '琐碎', link: '/pages/other/other1.md' },
      // {
      //   text: '分类', //默认显示
      //   ariaLabel: '分类', //用于识别的label
      //   items: [
      //     //点击标签会跳转至link的markdown文件生成的页面
      //   ]
      // },

      //格式三：跳转至外部网页，需http/https前缀
      { text: 'Github', link: 'https://github.com/' }
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/artical/': [
        {
          title: '笔记整理', // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['artical1.md', 'HTTP请求'], //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
            ['artical2.md', '从输入URL到页面展示，这中间发生了什么？'],
            ['artical3.md', 'React事件处理函数绑定的相关问题'],
            ['artical4.md', '浅拷贝与深拷贝'],
            ['artical5.md', '请求头与响应头']
          ]
        }
      ],
      '/pages/other/': [
        {
          title: '琐碎', // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['other1.md', '为什么建这个博客'] //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
          ]
        }
      ]

      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
  }
}
