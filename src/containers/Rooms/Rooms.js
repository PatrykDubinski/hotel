import React, { Component } from 'react';
import axios from 'axios';

import classes from './Rooms.module.css';
import RoomBlock from './RoomBlock/RoomBlock';
import Socials from '../../components/Socials/Socials';
import data from '../../data';

class Rooms extends Component{
    state = {
        rooms: [],
    }
    
    componentDidMount(){
        console.log(data);
        this.setState({
            rooms: data.rooms
        })
        console.log(this.state);
        // await axios.get('https://myhotel-f93a6.firebaseio.com/rooms.json')
        //     .then(response => {
        //         this.setState({
        //             rooms: response.data
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    render(){
        let myRooms;
        let images;
        
        if(Object.keys(this.state.rooms).length === 0){
            myRooms = <h1>Loading...</h1>
        } else {
            myRooms = Object.values(this.state.rooms);
            
            myRooms = Object.keys(myRooms).map(key => {
                return [key, myRooms[key]]
            })
            images = myRooms.map((room, i) => {
                return room[1].images
            })
            images = Object.keys(images).map(key => {
                return [key, images[key]]
            })
            
            myRooms = myRooms.map((rooms, i) => {
                    return (
                        <RoomBlock 
                            key={i}
                            fullName={rooms[1].fullName}
                            images={rooms[1].images}
                            price={rooms[1].price}
                            breakfast={rooms[1].breakfast}
                            capacity={rooms[1].capacity}
                            description={rooms[1].description}
                            extras={rooms[1].extras}
                            id={rooms[1].id}
                            pets={rooms[1].pets}
                            type={rooms[1].type}
                            slug={rooms[1].slug}
                            roomImg={rooms[1].images.room}
                        />
                    );
                })
        }
        return(
            <React.Fragment>
                <div className={classes.RoomsWrapper}>
                    <h1>Our Rooms</h1>
                    <div className={classes.Rooms}>
                        {myRooms}
                    </div>
                </div>
                <Socials />
            </React.Fragment>
        );
    }
}

export default Rooms;