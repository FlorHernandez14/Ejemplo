import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import { IsAuth } from "../utils/persists";
import Auth from "../views/Auth.vue";
import Dashboard from "../views/Dashboard.vue";
import  User  from "../views/User.vue";
import Rol from "../views/Rol.vue";


const routes: RouteRecordRaw[] = [
    {
        name: "Auth",
        path: "/auth",
        component: Auth,
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        component: Dashboard,
    },
    {
        name: "User",
        path: "/user",
        component: User,
    },
    {
        name: "Rol",
        path: "/rol",
        component: Rol
    }


];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, _, next) =>{
    const publicPages = ["/auth"];
    const authRequired = !publicPages.includes(to.path);

    if (!IsAuth() && to.path !== '/auth'){
        return next("/auth");
    }

    if (authRequired && !IsAuth()) {
        return next("/auth");
    }
    next();

});

export { router };
