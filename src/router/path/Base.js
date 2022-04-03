import BaseLayout from 'Components/layout/main-homepage.vue'

const _routers = require.context('./', true, /[\w]+\.router\.js/i)

let routeLists = []

_routers.keys().forEach((item) => {
    const eachRoute =  _routers(item).default

    routeLists.push({...eachRoute})
})

let route = {
    name: 'Homepage',
    path: '/',
    component: BaseLayout,
    meta:{},
    children: routeLists
}

export default route