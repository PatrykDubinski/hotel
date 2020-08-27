import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';
import Layout from './containers/Layout/Layout';
import HomePage from './containers/HomePage/HomePage'
import Rooms from './containers/Rooms/Rooms';
import RoomDetails from './components/RoomDetails/RoomDetails';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
    return (
        <div>
          <Layout>
            <Switch>
              <Route path='/~303147/build/rooms/:slug' exact component={RoomDetails} />
              <Route path='/~303147/build/rooms' component={Rooms} />
              <Route path='/~303147/build/checkout' component={Checkout} />
              <Route path='/~303147/build/auth' component={Auth} />
              <Route path='/~303147/build/logout' component={Logout} />
              <Route path='/~303147/build' exact component={HomePage} />
              <Redirect to='/~303147/build/' />
            </Switch>
          </Layout>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
