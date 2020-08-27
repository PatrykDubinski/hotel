import React from 'react';

import classes from './About.module.css';

const about = props => (
    <div className={classes.About}>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero neque, vehicula ut dui at, luctus accumsan quam. In quis odio consequat, molestie dui quis, pellentesque eros. Vestibulum vitae diam rutrum tortor venenatis efficitur. Sed ullamcorper sit amet sem sed ullamcorper. Etiam scelerisque eros a justo imperdiet venenatis. Donec at rhoncus augue. Integer id odio dui. Fusce volutpat velit nisl, aliquet faucibus diam placerat non. Suspendisse convallis metus eget est sodales, ut luctus ante posuere. Donec condimentum urna metus, eget feugiat purus scelerisque rutrum. Donec accumsan nisi ante, id ullamcorper felis porta non.
            </p>
        </div>
        <div className={classes.Grid}>
            <div className={classes.GridItem}>
                <i className="fas fa-swimming-pool"></i>
                <h3>Swimming Pool</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero neque, vehicula ut dui at, luctus accumsan quam. In quis odio consequat, molestie dui quis, pellentesque eros.
                </p>
            </div>
            <div className={classes.GridItem}>
                <i className="fas fa-dumbbell"></i>
                <h3>Gym</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero neque, vehicula ut dui at, luctus accumsan quam. In quis odio consequat, molestie dui quis, pellentesque eros.
                </p>
            </div>
            <div className={classes.GridItem}>
                <i className="fas fa-glass-martini-alt"></i>
                <h3>Drinks</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero neque, vehicula ut dui at, luctus accumsan quam. In quis odio consequat, molestie dui quis, pellentesque eros.
                </p>
            </div>
            <div className={classes.GridItem}>
                <i className="fas fa-parking"></i>
                <h3>Free Parking</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero neque, vehicula ut dui at, luctus accumsan quam. In quis odio consequat, molestie dui quis, pellentesque eros.
                </p>
            </div>
        </div>
    </div>
);

export default about;