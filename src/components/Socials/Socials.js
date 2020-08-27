import React from 'react';

import classes from './Socials.module.css';

const socials = () => (
    <div className={classes.Socials}>
        <div className={classes.IconTw}>
            <i className="fab fa-twitter-square"></i>
        </div>
        <div className={classes.IconFb}>
            <i className="fab fa-facebook-square"></i>
        </div>
        <div className={classes.IconInst}>
            <i className="fab fa-instagram-square"></i>
        </div>
        <div className={classes.IconYt}>
            <i className="fab fa-youtube"></i>
        </div>
    </div>
);

export default socials;