module.exports = {
    base: "/",
    title: 'HOME',
    themeConfig: {
        nav: [
            { text: 'Posts', link: '/' },
            { text: 'Photos', link: '/photos/photos' },
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
        ]
    ]
}
