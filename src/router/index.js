import VueRouter from 'vue-router'

import MyInfo from '../pages/myInfo'
import MyAchievements from '../pages/myAchievements'
import MyGame from '../pages/myGame'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MyInfo
        },
        {
            path: '/myachievements',
            component: MyAchievements
        },
        {
            path: '/mygame',
            component: MyGame
        }
    ]
})
