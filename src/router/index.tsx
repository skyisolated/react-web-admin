import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from '@/pages/main';
import Home from '@/pages/home';
import Mall from '@/pages/mall';
import UserTab from '@/pages/user/user';
import PageOne from '@/pages/others/pageOne';
import PageTwo from '@/pages/others/pageTwo';
import { Component } from 'react';
import Login from '@/pages/login';

const routes = [
  {
    path: '/',
    Component: Main,
    // 注意这里是小写
    children: [
      {
        // 重定向到home
        path: "/",
        element: <Navigate to={'home'}></Navigate>
      },
      // 注意下面的路由不要以/开头
      {
        path: 'home',
        Component: Home
      },
      {
        path: 'mall',
        Component: Mall
      },
      {
        path: 'user',
        Component: UserTab
      },
      {
        path: 'others',
        children:[
          {
            path: 'pageOne',
            Component: PageOne
          },
          {
            path: 'pageTwo',
            Component: PageTwo
          }
        ]
      },
    ]
  },
  {
    path: "/login",
    Component: Login
  }
];

export default createBrowserRouter(routes);