module.exports = {
    title: '慢八拍の博客', // 网站标题
    description: '慢八拍的私人博客，仅作为学习成果的记录与总结', // 描述
    base: '/blog/', // 输出目录
    port: 8080, // dev模式的端口
    dest: 'dist',
    themeConfig: { //主题配置
        lastUpdated: '更新时间',
        // 导航栏
        nav: [/*{
                text: '首页',
                link: '/',
            },*/
            {
                text: 'JavaScript 笔记',
                link: '/js/',
            },
            {
                text: 'CSS 笔记',
                link: '/css/',
            },
            {
                text: 'Vue 笔记',
                link: '/vue/',
            },
            {
                text: '慕课网笔记',
                link: '/imooc/',
            },
            {
                text: '杂记',
                link: '/others/',
            },
        ],
        sidebar: {
            // '/guide/': genSidebarConfig('指南'),
            '/js/': [{
                title: 'JavaScript 笔记',
                collapsable: false,
                children: [
                    '',
                    'prototype',
                    'class',
                    'extends',
                    'fibonacci',
                    'bracket',
                    'bind',
                    'debounce',
                    'throttle',
                    'async',
                ],
            }],
            '/css/': [{
                title: 'CSS 笔记',
                collapsable: false,
                children: [
                    '',
                    'modules',
                    'inline-block-space',
                    'vertical-align',
                    'justify',
                    'ellipsis',
                ],
            }],
            '/vue/': [{
                title: 'Vue 笔记',
                collapsable: false,
                children: [
                    '',
                    'hook',
                    'components-communication',
                    'source-analyse-1',
                    'source-analyse-2',
                    'source-analyse-3',
                ],
            }],
            '/imooc/': [{
                title: '慕课网笔记',
                collapsable: false,
                children: [
                    '',
                    'imooc-list',
                    'css-deep-series',
                    '115',
                    '190',
                    '171',
                    '175',
                    '146',
                ],
            }],
            '/others/': [{
                title: '杂记',
                collapsable: false,
                children: [
                    '',
                    'cross',
                    'axios',
                    'summary',
                    'interview',
                    'interview-en',
                    'typescript'
                ],
            }],
        }
    }
}

/*function genSidebarConfig(title) {
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
}*/