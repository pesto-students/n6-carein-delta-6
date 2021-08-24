import React from 'react';



const Login = React.lazy(() => import('./views/components/Login/Login'));
const Forgotpassword = React.lazy(() => import('./views/components/Login/Forgotpassword'));
const Signup = React.lazy(() => import('./views/components/Signup/Signup'));
const Homepage = React.lazy(() => import('./views/components/Homepage/Homepage'));


const routes = [
     
     { path: '/Login', name: 'Login', component: Login },
     { path: '/Forgotpassword', name: 'Forgotpassword', component: Forgotpassword },
     { path: '/Signup', name: 'Signup', component: Signup },
     { path: '/Homepage', name: 'Homepage', component: Homepage },
     
];

export default routes;
