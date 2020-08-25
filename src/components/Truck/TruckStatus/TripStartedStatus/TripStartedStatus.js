import React from 'react';

import classes from './TripStartedStatus.module.scss';
import TripStartedRoadMap from './TripStartedRoadMap/TripStartedRoadMap';
import TruckStatusChip from './TruckStatusChip/TruckStatusChip';

const tripStartedStatus = props => {
    return (
        <div className={classes.TripStartedStatus}>
            <TripStartedRoadMap
                startLocation={props.startLocation}
                endLocation={props.endLocation}
                tripStartedTime={props.tripStartedTime}
            />
            <div className={classes.TripStartedStatus__StatusChips}>
                <TruckStatusChip icon="local_gas_station" value={`${Math.floor(parseInt(props.gpsFuel))} L`} />
                <TruckStatusChip icon="speed" value={`${Math.floor(parseInt(props.currentOdo))}`} />
                <TruckStatusChip icon="description" value={props.documents.split(',').length} />
            </div>
        </div>
    );
}

export default tripStartedStatus;