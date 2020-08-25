import React from 'react';

import TruckStatusPreview from '../TruckStatusPreview/TruckStatusPreview';
import NoPlanStatus from '../NoPlanStatus/NoPlanStatus';
import DriverPendingStatus from '../DriverPendingStatus/DriverPendingStatus';
import DriverRejectedStatus from '../DriverRejectedStatus/DriverRejectedStatus';
import DriverAcceptedStatus from '../DriverAcceptedStatus/DriverAcceptedStatus';
import TripStartedStatus from '../TripStartedStatus/TripStartedStatus';

const truckStatusData = props => {
    let dataCmp;
    if (!props.vehicleStatus) {
        dataCmp = (
            <NoPlanStatus />
        );
    } else if (props.driverStatus === 'PENDING' || props.driverStatus === 'ACKNOWLEDGED') {
        dataCmp = (
            <DriverPendingStatus />
        );
    } else if (props.driverStatus === 'ACCEPTED' && props.vehicleStatus !== 'Trip Completed') {
        dataCmp = (
            <DriverAcceptedStatus />
        );
    }
    else if (props.driverStatus === 'REJECTED') {
        dataCmp = (
            <DriverRejectedStatus />
        );
    } if (props.vehicleStatus === 'Trip Started') {
        dataCmp = (
            <TripStartedStatus
                startLocation={props.startLocation}
                endLocation={props.endLocation}
                tripStartedTime={props.tripStartedTime}
                gpsFuel={props.gpsFuel}
                currentOdo={props.currentOdo}
                documents={props.documents}
            />
        );
    }

    return (
        <div>
            <TruckStatusPreview
                label={props.vehicleId}
                status={props.vehicleStatus || "No plan"}
                isYellowTruck={props.truckAxleType === 'Single'}
                driverStatus={props.driverStatus}
            />
            {dataCmp}
        </div>
    );
}

export default truckStatusData;