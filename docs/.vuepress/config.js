module.exports = {
	dest: 'dist/docs',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Geelato',
            description: '基于Vue、SemanticUI、SpringBoot的开发框架'
        }
        // 打开以下的注释，将会在首页的右方出来多语言的切换开关
        // ,
        // '/en/': {
        //     lang: 'en-US',
        //     title: 'Geelato',
        //     description: 'A admin platform base on Vue + SemanticUI + SpringBoot'
        // }
    },
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // ['link', {rel: 'icon', href: '/favicon.ico'}], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', {rel: 'icon', href: `/logo.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#af0525' }],
        // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    docsDir: 'docs',
    // base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        displayAllHeaders: true, // 显示所有页面的标题链接  默认值：false
        sidebarDepth: 1, // 若为2，则将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        locales: {
            '/en/': {
                nav: [
                    {text: 'Index', link: '/'},
                    {text: 'Guide', link: '/guide/'},
                    {text: 'Config Reference', link: '/config/'},
                    {text: 'Github', link: 'https://github.com/geelato-projects'},
                ],
                sidebar: {
                    '/guide/': genSidebarConfig('Guide')
                }
            },
            '/': {
                nav: [
                    {text: '首页', link: '/'},
                    {text: '指南', link: '/guide/'},
                    {text: '配置', link: '/config/'},
                    {text: '演示', link: '/showcase/'},
                    {text: 'Github', link: 'https://github.com/geelato-projects'},
                ],
                sidebar: {
                    '/guide/': genSidebarConfig('指南')
                }
            }
        },
    }
}

function genSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'getting-started',
                'ui/',
                'backend/',
                'deploy'
            ]
        }
    ]
}
