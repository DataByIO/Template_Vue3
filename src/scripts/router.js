import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
/*************************************************************
 /* SYSTEM NAME      : scripts
 /* PROGRAM NAME     : router.js
 /* DESCRIPTION      : vue.js에서 페이지 간 이동을 위한 라이브러리
 https://velog.io/@yjyoo/vue.js-Vue-Router-%EC%A0%95%EB%A6%AC
 /* MODIFIVATION LOG :
 /* DATA         AUTHOR          DESC.
 /*--------     ---------    ----------------------
 /*2025.03.21   KIMDONGMIN   INTIAL RELEASE
 /*2025.03.21   KIMDONGMIN   Vue router(페이지 이동) Add
 /*************************************************************/
// ✅ router.js (src/scripts/router.js)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: defineAsyncComponent(() => {
            console.log('[Router] Loading Home')
            return import('../pages/VueHome.vue')
        })
    },
    {
        path: '/login',
        name: 'Login',
        component: defineAsyncComponent(() => {
            console.log('[Router] Loading Login')
            return import('../pages/VueLogin.vue')
        })
    },
    {
        path: '/join',
        name: 'Join',
        component: defineAsyncComponent(() => {
            console.log('[Router] Loading Join')
            return import('../pages/VueJoin.vue')
        })
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

console.log('[Router] initialized')

export default router
