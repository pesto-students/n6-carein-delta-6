import React from 'react';



const Login = React.lazy(() => import('./views/components/Login/Login'));
const Forgotpassword = React.lazy(() => import('./views/components/Login/Forgotpassword'));
const Emailverify = React.lazy(() => import('./views/components/Login/Forgotpassword'));
const Signup = React.lazy(() => import('./views/components/Signup/Signup'));
const Homepage = React.lazy(() => import('./views/components/Homepage/Homepage'));
const Friends = React.lazy(() => import('./views/components/Homepage/Friends'));
const Events = React.lazy(() => import('./views/components/Homepage/Events'));

const routes = [
     
     { path: '/login', name: 'Login', component: Login },
     { path: '/forgotpassword', name: 'Forgotpassword', component: Forgotpassword },
     { path: '/emailverify', name: 'Emailverify', component: Emailverify },
     { path: '/signup', name: 'Signup', component: Signup },
     { path: '/homepage', name: 'Homepage', component: Homepage },
     { path: '/Friends', name: 'Friends', component: Friends },
     { path: '/Events', name: 'Events', component: Events },
];

export default routes;
