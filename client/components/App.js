import React from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '../routes';
import classes from '../styles/components/App.module.scss';
import NavHeader from './nav';

const App = props => {
    const rootRoutes = useRoutes(routes);

    return (
        <>
            <NavHeader />
            <div className={classes.App}>{rootRoutes}</div>
        </>
    );
};

export default App;
