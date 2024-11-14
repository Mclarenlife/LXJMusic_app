import { createRouter, createWebHistory } from 'vue-router'

const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/discovery',
            name: 'discovery',
            component: () => import('../views/DiscoveryView.vue')
        },
        {
            path: '/mine',
            name: 'mine',
            component: () => import('../views/MineView.vue')
        },
        {
            path: '/video',
            name: 'video',
            component: () => import('../views/VideoView.vue')
        }
    ]
})

export default routes
