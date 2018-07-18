module.exports = {
    base: '/blog/',
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/',
            },
            {
                text: '指南',
                link: '/guide/',
            },
            {
                text: '配置参考',
                link: 'http://www.baidu.com'
            }
        ],
        sidebar: {

            '/guide/': genSidebarConfig('指南')
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
            'deploy'
        ]
    }]
}