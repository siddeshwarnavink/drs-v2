import React from 'react';

import classes from './TripStartedRoadMap.module.scss';
import TripStartedLocation from './TripStartedLocation/TripStartedLocation';

const tripStartedRoadMap = () => {
    return (
        <div className={classes.TripStartedRoadMap}>
            <TripStartedLocation 
                label="From"
                timestamp="Aug 18, 03:46 pm"
                location="ARIZONA" 
            />
            <span className={['material-icons', classes.TripStartedRoadMap__Arrow].join(' ')}>
                arrow_right_alt
            </span>
            <TripStartedLocation 
                label="To"
                timestamp="Aug 18, 03:46 pm"
                location="ARIZONA" 
            />
        </div>
    );
}

export default tripStartedRoadMap;