import React from 'react';

import classes from './TripStartedStatus.module.scss';
import TripStartedRoadMap from './TripStartedRoadMap/TripStartedRoadMap';
import TruckStatusChip from './TruckStatusChip/TruckStatusChip';

const tripStartedStatus = () => {
    return (
        <div className={classes.TripStartedStatus}>
            <TripStartedRoadMap />
            <div className={classes.TripStartedStatus__StatusChips}>
                <TruckStatusChip icon="local_gas_station" value="2.5L" />
                <TruckStatusChip icon="speed" value="25" />
                <TruckStatusChip icon="description" value="2" />
            </div>
        </div>
    );
}

export default tripStartedStatus;