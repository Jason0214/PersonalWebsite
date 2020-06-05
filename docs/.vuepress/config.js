module.exports = {
    base: "/",
    title: 'HOME',
    themeConfig: {
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
