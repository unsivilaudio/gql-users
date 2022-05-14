import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { USER_SIGN_IN, USER_SIGN_UP } from '../../mutations/user';
import Input from '../ui/Input';
import Button from '../ui/Button';
import classes from '../../styles/components/AuthForm.module.scss';

const AuthForm = props => {
    const [authType, setAuthType] = useState('signup');
    const [authUser, { data, loading, error }] = useMutation(
        authType === 'signin' ? USER_SIGN_IN : USER_SIGN_UP,
        {
            refetchQueries: ['FetchCurrentUser'],
        }
    );
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const routeType = location.pathname.split('/')[2];
        if (routeType !== authType) {
            setAuthType(routeType);
        } else if (!routeType) {
            navigate('/auth/signup');
        }
    }, [authType, location]);

    let formHeader = 'Sign Up to Users';
    if (authType === 'signin') {
        formHeader = 'Sign In to Users';
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleChangePasswordConfirm(e) {
        setPasswordConfirm(e.target.value);
    }

    function handleSubmitAuth() {
        if (authType === 'signup' && password !== passwordConfirm) {
            return;
        }

        if (email !== '' && password !== '') {
            authUser({
                variables: {
                    email,
                    password,
                },
            }).then(() => {
                navigate('/');
            });
        }
    }

    return (
        <div className={classes.AuthForm}>
            <div className={classes.Header}>{formHeader}</div>
            <div className={classes.Form}>
                <Input
                    label='email'
                    name='email'
                    onChange={handleChangeEmail}
                    value={email}
                />
                <Input
                    label='password'
                    name='password'
                    type='password'
                    onChange={handleChangePassword}
                    value={password}
                />
                {authType === 'signup' && (
                    <Input
                        label='confirm password'
                        name='password'
                        type='password'
                        onChange={handleChangePasswordConfirm}
                        value={passwordConfirm}
                    />
                )}
                <div className={classes.Actions}>
                    <Button
                        theme='primary'
                        label='submit'
                        onClick={handleSubmitAuth}
                    />
                    <p
                        className={classes.HelpText}
                        onClick={navigate.bind(
                            null,
                            `/auth/${
                                authType === 'signup' ? 'signin' : 'signup'
                            }`,
                            { replace: true }
                        )}>
                        Already a member? Switch to{' '}
                        {authType === 'signup' ? 'sign in.' : 'sign up.'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
