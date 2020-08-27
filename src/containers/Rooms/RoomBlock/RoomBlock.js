import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import classes from './RoomBlock.module.css';

class RoomBlock extends Component{
    render(){
        let extras;
        
        if(this.props.extras){
            extras = Object.values(this.props.extras);
            extras = Object.keys(extras).map((extra, i) => {
                return (
                    <li key={i}>{extras[extra]}</li>
                );
            })
        }
        return (
            <div className={classes.Top}>
            <div className={classes.Hover}>
                <Link 
                    to={{
                        pathname: `${this.props.match.url}/${this.props.slug}`,
                        state: {
                            name: this.props.fullName,
                            breakfast: this.props.breakfast,
                            capacity: this.props.capacity,
                            description: this.props.description,
                            extras: this.props.extras,
                            id: this.props.id,
                            images: this.props.images,
                            pets: this.props.pets,
                            price: this.props.price,
                            slug: this.props.slug,
                            type: this.props.type
                        }
                    }}>
                    <button>More</button>
                </Link>
            </div>
                <div className={classes.Image}>
                    <img src={this.props.roomImg} alt="Room" />
                    <div className={classes.Price}>
                        <p>{this.props.price} $</p>
                    </div>
                </div>
            <div className={classes.Title}>
                <h3>{this.props.fullName}</h3>
            </div>
        </div>
        );
    }
}

export default withRouter(RoomBlock);