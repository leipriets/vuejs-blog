import Vue from "vue";
import Router from "vue-router";

// components
import hooks from "./components/basic/hooks";
import methods from "./components/basic/methods";

// pages
import Home from "./components/pages/Home";
import tags from "./components/pages/Tags";

Vue.use(Router);

const routes = [
    // project routes...
    {
        path: '/',
        component: Home
    },
    {
        path: '/tags',
        component: tags
    },

    // routes came from tutorials
    // hooks
    {
        path: '/hooks',
        component: hooks
    },
    // more basics
    {
        path: '/methods',
        component: methods
    },
    

];

export default new Router({
    mode: 'history',
    routes
})