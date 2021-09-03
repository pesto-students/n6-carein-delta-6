import React from 'react';



const Login = React.lazy(() => import('./views/components/Login/Login'));
const Forgotpassword = React.lazy(() => import('./views/components/Login/Forgotpassword'));
const Emailverify = React.lazy(() => import('./views/components/Login/Forgotpassword'));
const Signup = React.lazy(() => import('./views/components/Signup/Signup'));
const Homepage = React.lazy(() => import('./views/components/Homepage/Homepage'));
const Friends = React.lazy(() => import('./views/components/Homepage/Friends'));
const Events = React.lazy(() => import('./views/components/Homepage/Events'));
const Services = React.lazy(() => import('./views/components/Homepage/Services'));
const Subscription = React.lazy(() => import('./views/components/Homepage/Subscription'));
const ServiceDetails = React.lazy(() => import('./views/components/Homepage/ServiceDetails'));
const Profile = React.lazy(() => import('./views/components/Homepage/Profile'));

const routes = [
     { path: '/login', name: 'Login', component: Login },
     { path: '/forgotpassword', name: 'Forgotpassword', component: Forgotpassword },
     { path: '/emailverify', name: 'Emailverify', component: Emailverify },
     { path: '/signup', name: 'Signup', component: Signup },
     { path: '/homepage', name: 'Homepage', component: Homepage },
     { path: '/Friends', name: 'Friends', component: Friends },
     { path: '/Events', name: 'Events', component: Events },
     { path: '/Services', name: 'Services', component: Services },
     { path: '/Subscription', name: 'Subscription', component: Subscription },
     { path: '/Servicedetails', name: 'Servicedetails', component: ServiceDetails },
     { path: '/Profile', name: 'Profile', component: Profile },
];

export default routes;
