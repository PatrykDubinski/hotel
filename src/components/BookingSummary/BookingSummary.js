import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import classes from './BookingSummary.module.css';

class BookingSummary extends Component{
    
    
    bookHandler = () => {
        const orderData = {
            name: this.props.name,
            price: this.props.price,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            pets: this.props.pets,
            breakfast: this.props.breakfast,
            capacity: this.props.capacity,
            userId: this.props.userId
        }

        axios.post('https://myhotel-f93a6.firebaseio.com/orders.json?auth=' + this.props.token, orderData)
            .then(response => {
                alert('Booking succesfull');
                this.props.history.push('/');

            })
            .catch(error => {
                alert('Something went wrong :( !');
                alert('Try again later...');
            })
    }

    render(){
        console.log(this.props);
        return(
            <div className={classes.BookingSummary}>
        <h1>{this.props.name} room</h1>
        <div className={classes.FlexWrapper}>
            <div className={classes.ListWrapper}>
                <ul>
                    <li>From: {this.props.startDate}</li>
                    <li>To: {this.props.endDate}</li>
                    <li>Room for {this.props.capacity} people</li>
                    {this.props.pets ? <li>You can take pets with You</li> : null} 
                    {this.props.breakfast ? <li>Free breakfast will be waiting</li> : null} 
                </ul>
                <p>Price: <strong>{this.props.price} $</strong></p>
            </div>
            <div className={classes.ListWrapper}>
                <ul>
                    <li>Check-in: 12<sup>00</sup> - 22<sup>00</sup></li>
                    <li>Check-out: 11<sup>00</sup></li>
                    <li>If you have any questions feel free to contact us through contact form or through this phone number 23512125</li>
                </ul>
            </div>
        </div>
        <div className={classes.Buttons}>
            {this.props.isAuthenticated ? <button onClick={this.bookHandler} className={classes.ContinueBtn}>Book this room</button> : <Link to='/~303147/build/auth'><button className={classes.ContinueBtn}>Log in to continue</button></Link>}
            <button className={classes.CancelBtn} onClick={this.props.canceled}>Cancel</button>
        </div>
    </div>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        token: state.token,
        userId: state.userId,
        isAuthenticated: state.token !== null
    }
}

export default connect(mapStateToProps)(withRouter(BookingSummary));