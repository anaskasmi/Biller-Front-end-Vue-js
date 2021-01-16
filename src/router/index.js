import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/customers',
        name: 'Customers',

        component: () =>
            import ('../views/Customers.vue')
    },
    {
        path: '/products',
        name: 'Products',

        component: () =>
            import ('../views/Products.vue')
    },
    {
        path: '/bills',
        name: 'Bills',

        component: () =>
            import ('../views/Bills.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router