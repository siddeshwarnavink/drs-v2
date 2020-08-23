import React from 'react';

import classes from './TripStartedLocation.module.scss';

const tripStartedLocation = props => {
    return (
        <div className={classes.TripStartedLocation}>
            <span className={[classes.TripStartedLocation__Label, 'label'].join(' ')}>{props.label}</span>
            <div className={classes.TripStartedLocation__Location}>
                <span className={[classes.TripStartedLocation__Icon, 'material-icons'].join(' ')}>business</span>
                <span className={[classes.TripStartedLocation__Label, 'location'].join(' ')}>{props.location}</span>
            </div>
            <span className={[classes.TripStartedLocation__Timestamp, 'time'].join(' ')}>{props.timestamp}</span>
        </div>
    )
}

export default tripStartedLocation;