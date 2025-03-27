import VueHome from "@/pages/VueHome.vue";
import VueLogin from "@/pages/VueLogin.vue";
import {createRouter, createWebHistory} from "vue-router";

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

const routes = [
    {path: '/', component: VueHome},
    {path: '/loginpage', component: VueLogin}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;