import React from 'react';

import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Sidebar.module.css';

const sidebar = props => {
    let updatedClasses = [classes.SideBar, classes.Close];
    if(props.open){
        updatedClasses = [classes.SideBar, classes.Open];
    }

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={updatedClasses.join(' ')} onClick={props.close}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sidebar;