import React from 'react';



const Login = React.lazy(() => import('./views/components/Login/Login'));
const Signup = React.lazy(() => import('./views/components/Signup/Signup'));


const routes = [
     
     { path: '/login', name: 'Login', component: Login },
     { path: '/Signup', name: 'Signup', component: Signup },
     
];

export default routes;
