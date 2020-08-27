import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../../components/Modal/Modal';
import BookingSummary from '../../components/BookingSummary/BookingSummary'
import "react-datepicker/dist/react-datepicker.css";
import classes from './Checkout.module.css';

class Checkout extends Component{
    state = {
        startDate: new Date(),
        endDate: null,
        bookingSummary: false
    }

    handleStartDateChange = date => {
        this.setState({
            startDate: date
        })
    }

    handleEndDateChange = date => {
        this.setState({
            endDate: date
        })
    }

    bookingSummaryHandler = (e) => {
        e.preventDefault();
        this.setState({
            bookingSummary: true
        })
    }

    bookingSummaryCancelHandler = () => {
        this.setState({
            bookingSummary: false
        })
    }

    render(){
        
        let images = Object.values(this.props.location.state.images)
        .map((el, i) => (
            <div key={i} className={classes.ImageBlock}>
                <img src={el} alt="Room" />
            </div>
        ));
        
        const startDay = new Date(this.state.startDate).getDate();
        const startMonth = new Date(this.state.startDate).getMonth();
        const startYear = new Date(this.state.startDate).getFullYear();

        const endDay = new Date(this.state.endDate).getDate();
        const endMonth = new Date(this.state.endDate).getMonth();
        const endYear = new Date(this.state.endDate).getFullYear();
        
        const days = endDay - startDay;

        const startDate = `${startDay}/${startMonth}/${startYear}`;
        const endDate = `${endDay}/${endMonth}/${endYear}`;
        const totalPrice = this.props.location.state.price * days;

        let summary = this.state.startDate && this.state.endDate ? <p className={classes.Summary}>Your stay from {`${startDay}/${startMonth}/${startYear}`} to {`${endDay}/${endMonth}/${endYear}`} will cost <strong>{totalPrice}$</strong></p> : null;

        console.log(this.props);
        

        return (
            <React.Fragment>
                <Modal 
                    show={this.state.bookingSummary} 
                    modalClosed={this.bookingSummaryCancelHandler}>
                    <BookingSummary 
                        startDate={startDate}
                        endDate={endDate}
                        price={totalPrice}
                        capacity={this.props.location.state.capacity}
                        name={this.props.location.state.name}
                        pets={this.props.location.state.pets}
                        breakfast={this.props.location.state.breakfast}
                        canceled={this.bookingSummaryCancelHandler}
                    />
                </Modal>
                <div className={classes.Checkout}>
                    <h2>You are trying to book <span>{this.props.location.state.name}</span> room</h2>
                    <div className={classes.ImagesWrapper}>
                        {images}
                    </div>
                    <div>
                        <p className={classes.RoomFor}>Remember this is room for {this.props.location.state.capacity === 1 ? `${this.props.location.state.capacity} person` : `${this.props.location.state.capacity} people`}</p>
                        <p className={classes.Subtitle}>How long will You stay?</p>
                        <div className={classes.Dates}>
                            <div className={classes.DatePicker}>
                                <p>From</p>
                                <DatePicker 
                                    selected={this.state.startDate}
                                    selectsStart
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleStartDateChange}
                                    dateFormat="yyyy/MM/dd"
                                    placeholderText="Click to select a date"
                                    withPortal
                                    showYearDropdown
                                    scrollableYearDropdown
                                />
                            </div>
                            <div className={classes.DatePicker}>
                                <p>To</p>
                                <DatePicker 
                                    selected={this.state.endDate}
                                    onChange={this.handleEndDateChange}
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    dateFormat="yyyy/MM/dd"
                                    placeholderText="Click to select a date" 
                                    minDate={new Date()}
                                    selectsEnd
                                    withPortal
                                    showYearDropdown
                                    scrollableYearDropdown
                                />
                            </div>
                        </div>
                    </div>
                    {summary}
                    <div>
                        
                        {!this.state.endDate ? <button disabled onClick={this.bookingSummaryHandler} className={classes.ContinueBtn}>CONTINUE</button> : !this.props.isAuthenticated ? <Link to='/auth'><button onClick={this.bookingSummaryHandler} className={classes.ContinueBtn}>LOG IN TO CONTINUE</button></Link> : 
                        <button onClick={this.bookingSummaryHandler} className={classes.ContinueBtn}>CONTINUE</button>}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        userId: state.userId,
        isAuthenticated: state.token !== null
    }
};


export default connect(mapStateToProps)(Checkout);