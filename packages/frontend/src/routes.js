import React from 'react';



const Login = React.lazy(() => import('./views/components/Login/Login'));


const routes = [
     
     { path: '/login', name: 'Login', component: Login },
];

export default routes;
