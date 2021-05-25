import VueRouter from 'vue-router'

import MyInfo from '../pages/info'
import MyAchievements from '../pages/achievements'
import MyGame from '../pages/game'

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: MyInfo
        },
        {
            path: '/achievements',
            component: MyAchievements
        },
        {
            path: '/game',
            component: MyGame
        }
    ]
})
