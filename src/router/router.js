import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Post from '../components/Post.vue'
import User from '../components/User.vue'
import UserProfile from '../components/UserProfile.vue'
import UserSchedule from '../components/UserSchedule.vue'
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/post/:id?', component: Post, name: 'post' },
    {
        path: '/user/:id',
        component: User,
        children: [
            { path: 'profile', component: UserProfile },
            { path: 'schedule', component: UserSchedule },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router