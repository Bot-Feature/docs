// https://raw.githubusercontent.com/LIVCK/livck-docs/main/README.md

module.exports = {
    title: 'Bot-Feature - Documentation',
    description: 'Here\'s how the bot feature works and how to install the bot',
    dest: './dist',

    // async additionalPages() {
    //     const rp = require('request-promise');
    //
    //     const readme = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/README.md')
    //     const changelog = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/changelog.md')
    //     return [
    //         {
    //             path: '/',
    //             content: readme
    //         },
    //         {
    //             path: '/changelog/',
    //             content: changelog
    //         }
    //     ]
    // },

    themeConfig: {
        sidebarDepth: 1,
        search: false,
        nav: [
            {text: 'Bot-Feature', link: 'https://bot-feature.com'},
            {text: 'Github', link: 'https://github.com/BOT-FEATURE'},
            {text: 'Twitter', link: 'https://twitter.com/bot_feature'},
        ],
        sidebar: [

            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    ['/', 'Installation & Usage'],
                ],
            },
            // {
            //     title: 'Changelog',
            //     collapsable: false,
            //     children: [
            //         ['/changelog/', 'Changelog'],
            //     ],
            // },

        ],
    },
    head: [
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'}],
        ['link', {rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link', {rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
        ['style', {}, 'img + .icon.outbound {display: none;}'],
    ],
    plugins: [
        [
            'sitemap',
            {
                hostname: 'https://help.bot-feature.com',
            },
        ],
    ],
}


