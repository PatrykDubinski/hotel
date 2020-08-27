import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './RoomDetails.module.css';
import Socials from '../Socials/Socials';

class RoomDetails extends Component{
    render(){
        console.log(this.props.location);
        let extras = Object.values(this.props.location.state.extras)
            .map((el, i) => (
                <li key={i}>{el}</li>
            ));
        let images = Object.values(this.props.location.state.images)
            .map((el, i) => (
                <div key={i} className={classes.ImageBlock}>
                    <img src={el} alt="Room" />
                </div>
            ));
            console.log(this.props.location.state.capacity);
            
        let tooltip = <div className={classes.Tooltiptext}>
                Book this room for <strong>{this.props.location.state.price}$</strong>/night
            </div>;

        return (
            <div className={classes.RoomDetails}>
                <div>
                    <img src={this.props.location.state.images.room} alt="Room" />
                    <Link to={{
                        pathname: '/~303147/build/checkout',
                        state: {
                            name: this.props.location.state.name,
                            price: this.props.location.state.price,
                            type: this.props.location.state.type,
                            images: this.props.location.state.images,
                            capacity: this.props.location.state.capacity,
                            pets: this.props.location.state.pets,
                            breakfast: this.props.location.state.breakfast
                        }
                    }}>
                       {tooltip}
                    </Link>
                </div>
                <h1>{this.props.location.state.name}</h1>
                <div className={classes.Description}>
                    <p>{this.props.location.state.description}</p>
                </div>
                <div className={classes.Info}>
                    <div>
                        <ul className={classes.List}>
                            <li>{this.props.location.state.breakfast ? 'Free breakfast' : 'Breakfast not included'}</li>
                            <li>{this.props.location.state.pets ? 'Pets are allowed' : 'Pets are not allowed'}</li>
                            <li>Capacity: {this.props.location.state.capacity}</li>
                            <li>Type: {this.props.location.state.type}</li>
                            <li>Price: <strong>{this.props.location.state.price} $</strong></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Extras: </h3>
                        <ul className={classes.Extras}>
                          {extras}  
                        </ul>
                    </div>
                </div>
                <h2>Images</h2>
                <div className={classes.ImagesWrapper}>
                    {images}
                </div>
                <Socials />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

export default connect(mapStateToProps)(withRouter(RoomDetails));