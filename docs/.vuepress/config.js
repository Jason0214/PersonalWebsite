module.exports = {
    base: "/",
    // title: 'HOME',
    themeConfig: {
        nav: [
            { text: 'Posts', link: '/#posts' },
            { text: 'Readings', link: '/#readings' },
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
                layout: 'HomePage'
            }
        }
    ],
    markdown: {
        plugins: [
            "markdown-it-image-lazy-loading"
        ]
    }
}
