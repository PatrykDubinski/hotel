import React from 'react';

import classes from './SideToggler.module.css';

const sidetoggler = (props) => (
    <div className={classes.SideToggler} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sidetoggler;