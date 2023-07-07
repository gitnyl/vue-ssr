import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "@/views/Home";
import NotFound from "@/views/NotFound";
import TestList from "@/views/TestList";

Vue.use(VueRouter);

export default function createRouter () {
    return new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: "*",
                name: "NotFound",
                component: NotFound,
            },
            {
                path: '/test-list',
                name: 'TestList',
                component: TestList,
            }
        ]
    });
}