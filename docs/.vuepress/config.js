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
                text: 'JavaScript 学习笔记',
                link: '/js/',
            },
            {
                text: '慕课网学习笔记',
                link: '/imooc/',
            },
        ],
        sidebar: {
            // '/guide/': genSidebarConfig('指南'),
            '/js/': [{
                title: 'JavaScript 学习笔记',
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
                ],
            }],
            '/imooc/': [{
                title: '慕课网学习笔记',
                collapsable: false,
                children: [
                    '',
                    'imooc-list',
                    // '115',
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