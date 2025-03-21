import VueHome from "@/pages/VueHome.vue";
import VueLogin from "@/pages/VueLogin.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', component: VueHome},
    {path: '/login', component: VueLogin}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;