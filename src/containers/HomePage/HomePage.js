import React, { Component } from 'react';

import classes from './HomePage.module.css';
import WelcomeScreen from '../../components/WelcomeScreen/WelcomeScreen';
import About from '../../components/About/About';
import Socials from '../../components/Socials/Socials';

class HomePage extends Component{

    render(){
        return (
            <React.Fragment>
                <div className={classes.HomePage}>
                    <WelcomeScreen />
                    <About />
                    <Socials />
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;