import React from 'react';
import AuthForm from '../components/auth/AuthForm';

import classes from '../styles/layouts/Auth.module.scss';

const Auth = props => {
    return (
        <div className={classes.Auth}>
            <div className={classes.Header}>Welcome to GraphQL</div>
            <AuthForm />
        </div>
    );
};

export default Auth;
