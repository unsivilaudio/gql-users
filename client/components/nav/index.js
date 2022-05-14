import React from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { USER_SIGN_OUT } from '../../mutations/user';
import routes from '../../routes';
import NavItem from './NavItem';
import classes from '../../styles/components/NavHeader.module.scss';

const NavHeader = ({ user }) => {
    const navigate = useNavigate();
    const [signOutUser] = useMutation(USER_SIGN_OUT, {
        update(cache, { data: { signOutUser } }) {
            cache.modify({
                fields: {
                    user: () => null,
                },
            });
        },
    });

    function renderRouteItem(item) {
        return <NavItem key={item.label} path={item.path} label={item.label} />;
    }

    function handleLogout() {
        signOutUser().then(() => {
            navigate('/', { replace: true });
        });
    }

    const navRoutes = routes.reduce((acc, root) => {
        if (root.label === 'auth' && user) {
            const CurrentUser = (
                <li key='usertext' className={classes.UserText}>
                    Signed in as: <span>{user.email}</span>
                </li>
            );
            const Logout = (
                <li
                    key='userlogout'
                    className={classes.UserLogout}
                    onClick={handleLogout}>
                    Logout
                </li>
            );
            acc.push(CurrentUser);
            acc.push(Logout);
            return acc;
        }

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
