import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { CURRENT_USER } from '../queries/user';
import routes from '../routes';
import classes from '../styles/components/App.module.scss';
import NavHeader from './nav';

const App = props => {
    const { data, loading, error, refetch } = useQuery(CURRENT_USER);
    const rootRoutes = useRoutes(routes);

    console.log(data);

    return (
        <>
            <NavHeader user={data?.user} />
            <div className={classes.App}>{rootRoutes}</div>
        </>
    );
};

export default App;
