import { createRouter, createWebHistory } from 'vue-router';
import vNavigation from "./../components/v-navigation"
import vHairdressers from "./../components/v-hairdressers"
import vServices from "./../components/v-services"

let router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/hairdressers',
            name: 'hairdressers',
            component: vHairdressers
        },
        {
            path: '/',
            name: 'main',
            component: vNavigation
        },
        {
            path: '/services',
            name: 'services',
            component: vServices
        },
    ]
})
export default router;