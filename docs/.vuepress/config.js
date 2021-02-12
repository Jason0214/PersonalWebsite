module.exports = {
    base: "/",
    title: 'HOME',
    themeConfig: {
        nav: [
            { text: 'Posts', link: '/' },
            {
                text: 'Misc', type: 'links',
                items: [
                    { text: 'Playlists', link: '/channel-links' },
                    { text: 'Photography', link: '/photos/photos' },
                ]
            }
        ],
        searchPlaceholder: 'Search...',
        lastUpdated: 'Last Updated by lujc',
        nextLinks: false,
        prevLinks: false,
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-168687988-1'
            }
        ],
        'vuepress-plugin-smooth-scroll',
        '@vuepress/plugin-active-header-links',
    ],
    additionalPages: [
        {
            path: "/",
            frontmatter: {
                layout: 'PostsHomePage'
            }
        }
    ],
    markdown: {
        plugins: [
            "markdown-it-image-lazy-loading"
        ]
    }
}
