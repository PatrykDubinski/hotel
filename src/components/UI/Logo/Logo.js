import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Logo.module.css';
import Logo from '../../../assets/logo.jpg';

const logo = () => (
    <Link to='/~303147/build/'>
        <div className={classes.Logo}>
            <img src={Logo} alt="Hotel Logo" />
        </div>
    </Link>
);

export default logo;