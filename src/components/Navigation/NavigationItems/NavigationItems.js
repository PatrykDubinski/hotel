import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationitems = (props) => (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/~303147/build/rooms'>Rooms</NavigationItem>
            {props.isAuthenticated ? 
                <NavigationItem link='/~303147/build/logout'>Logout</NavigationItem>
                : <NavigationItem link='/~303147/build/auth'>Login</NavigationItem>}
        </ul>
);

export default navigationitems;