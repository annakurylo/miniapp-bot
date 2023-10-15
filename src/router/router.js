import { createRouter, createWebHistory } from 'vue-router';
import vNavigation from "./../components/v-navigation"
import vHairdressers from "./../components/v-hairdressers"

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
    ]
})
export default router;