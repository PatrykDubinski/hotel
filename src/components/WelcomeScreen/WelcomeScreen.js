import React from 'react';
import { Link } from 'react-router-dom';

import Bg from '../../assets/welcome.jpg';
import classes from './WelcomeScreen.module.css';

const welcomeScreen = props => (
    <div className={classes.Welcome} style={{backgroundImage: `url(${Bg})`}}>
        <div className={classes.Button}>
            <Link to='/~303147/build/rooms'>Rooms</Link>
        </div>
    </div>
);

export default welcomeScreen;