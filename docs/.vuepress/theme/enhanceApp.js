import VueRouter from 'vue-router'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    router = new VueRouter({
        scrollBehavior(to, from, savedPosition) {
            console.log("lalal")
            return { x: 200, y: 0 }
        },
    })
}
