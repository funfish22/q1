import { lazy } from 'react';

export const routes = [
    {
        name: '首頁',
        path: '/',
        component: lazy(() => import(/*webpackChunkName:"Home"*/ /*webpackMode:"lazy"*/ '@page/default/Home')),
        exact: true,
        tags: '',
    },
    {
        name: '登入',
        path: '/login',
        component: lazy(() => import(/*webpackChunkName:"LoginPage"*/ /*webpackMode:"lazy"*/ '@page/default/Login')),
        exact: true,
    },
    {
        name: '註冊',
        path: '/register',
        component: lazy(() =>
            import(/*webpackChunkName:"RegisterPage"*/ /*webpackMode:"lazy"*/ '@page/default/Register')
        ),
        exact: true,
    },
    {
        name: 'Page Not Found',
        path: '*',
        component: lazy(() => import(/*webpackChunkName:"404"*/ /*webpackMode:"lazy"*/ '@page/default/PageNotFound')),
        tags: '',
    },
];
