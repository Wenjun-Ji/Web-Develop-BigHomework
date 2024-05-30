import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/mode1', name: 'Mode1', component: () => import('@/views/Mode1.vue') },
    { path: '/mode2', name: 'Mode2', component: () => import('@/views/Mode2.vue') },
    { path: '/mode3', name: 'Mode3', component: () => import('@/views/Mode3.vue') },
    { path: '/set', name: 'Set', component: () => import('@/views/set.vue') },
    { path: '/question', name: 'question', component: () => import('@/views/question.vue') }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;