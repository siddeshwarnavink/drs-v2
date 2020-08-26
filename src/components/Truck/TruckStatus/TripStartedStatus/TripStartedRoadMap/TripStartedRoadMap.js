import React from 'react';
import moment from 'moment';

import classes from './TripStartedRoadMap.module.scss';
import TripStartedLocation from './TripStartedLocation/TripStartedLocation';

const tripStartedRoadMap = props => {
    return (
        <div className={classes.TripStartedRoadMap}>
            <TripStartedLocation 
                label="From"
                timestamp={moment.unix(props.tripStartedTime/1000).format('MMM DD, hh:mm a')}
                location={props.startLocation}
            />
            <span className={['material-icons', classes.TripStartedRoadMap__Arrow].join(' ')}>
                arrow_right_alt
            </span>
            <TripStartedLocation 
                label="To"
                timestamp="-"
                location={props.endLocation}
            />
        </div>
    );
}

export default tripStartedRoadMap;