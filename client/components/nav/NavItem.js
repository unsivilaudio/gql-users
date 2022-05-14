import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../../styles/components/NavItem.module.scss';

const NavItem = props => {
    return (
        <li className={classes.NavItem}>
            <NavLink
                to={props.path}
                className={({ isActive }) => (isActive ? classes.Active : '')}>
                {props.label}
            </NavLink>
        </li>
    );
};

export default NavItem;
