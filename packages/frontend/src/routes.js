import React from 'react';



const Login = React.lazy(() => import('./views/components/Login/Login'));
const Forgotpassword = React.lazy(() => import('./views/components/Login/Forgotpassword'));
const Emailverify = React.lazy(() => import('./views/components/Login/Forgotpassword'));
const Signup = React.lazy(() => import('./views/components/Signup/Signup'));
const Homepage = React.lazy(() => import('./views/components/Homepage/Homepage'));


const routes = [
     { path: '/login', name: 'Login', component: Login },
     { path: '/forgotpassword', name: 'Forgotpassword', component: Forgotpassword },
     { path: '/emailverify', name: 'Emailverify', component: Emailverify },
     { path: '/signup', name: 'Signup', component: Signup },
     { path: '/homepage', name: 'Homepage', component: Homepage },
];

export default routes;
