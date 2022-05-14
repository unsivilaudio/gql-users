import React from 'react';

import routes from '../../routes';
import classes from '../../styles/components/NavHeader.module.scss';
import NavItem from './NavItem';

const NavHeader = props => {
    function renderRouteItem(item) {
        return <NavItem path={item.path} label={item.label} />;
    }

    const navRoutes = routes.reduce((acc, root) => {
        if (root.children) {
            root.children.map(child => {
                const childRoute = renderRouteItem({
                    path: `${root.path}/${child.path}`,
                    label: child.label,
                });

                acc.push(childRoute);
            });
        } else {
            acc.push(renderRouteItem(root));
        }
        return acc;
    }, []);

    return (
        <div className={classes.NavHeader}>
            <div className={classes.Brand}>
                GQL<span>users</span>
            </div>
            <ul className={classes.NavList}>{navRoutes}</ul>
        </div>
    );
};

export default NavHeader;
