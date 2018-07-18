module.exports = {
    title: '慢八拍の博客', // 网站标题
    description: '慢八拍的私人博客，仅作为学习成果的记录与总结', // 描述
    base: '/blog/', // 输出目录
    port: 8080, // dev模式的端口
    themeConfig: { //主题配置
        // 导航栏
        nav: [{
                text: '首页',
                link: '/',
            },
            {
                text: '指南',
                link: '/guide/',
                items: [ // 下拉列表展示
                    { text: 'item1', link: '/guide/basic-config' },
                    { text: 'item2', link: '/guide/getting-started' },
                ],
            },
            {
                text: '配置参考',
                link: 'http://www.baidu.com',
            }
        ],
        sidebar: {
            '/guide/': genSidebarConfig('指南'),
        }
    }
}

function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'getting-started',
            'basic-config',
            'assets',
            'markdown',
            'using-vue',
            'custom-themes',
            'i18n',
            'deploy',
            'array-method'
        ],
    }]
}