import VueRouter from 'vue-router'

import Info from '../pages/info'
import Achievements from '../pages/achievements'
import Game from '../pages/game'

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: Info
        },
        {
            path: '/achievements',
            component: Achievements
        },
        {
            path: '/game',
            component: Game
        }
    ]
})
