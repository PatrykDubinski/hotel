import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

    render(){
        return (
            <div>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerTogglerClicked={this.sideDrawerToggleHandler}/>
                <Sidebar 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerCloseHandler} />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    };
};

export default connect(mapStateToProps)(Layout);