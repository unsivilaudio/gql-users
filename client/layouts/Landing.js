import React from 'react';
import { useQuery } from '@apollo/client';

import { CURRENT_USER } from '../queries/user';

const Landing = props => {
    const { data, loading, error } = useQuery(CURRENT_USER);

    return (
        <div className='Container'>
            <h1>Welcome to GraphQL Users!</h1>
            <p>
                {data?.user
                    ? 'You are currently signed in.'
                    : 'Please sign in to get started.'}
            </p>
        </div>
    );
};

export default Landing;
