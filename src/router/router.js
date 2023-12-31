import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
]

const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router