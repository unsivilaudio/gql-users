import Auth from './layouts/Auth';
import Landing from './layouts/Landing';

export default [
    {
        path: '/',
        label: 'home',
        element: <Landing />,
    },
    {
        path: '/auth',
        label: 'auth',
        children: [
            {
                path: 'signup',
                label: 'Sign Up',
                element: <Auth />,
            },
            {
                path: 'signin',
                label: 'Sign In',
                element: <Auth />,
            },
        ],
    },
];
