import React from 'react';

import TruckStatusPreview from '../TruckStatusPreview/TruckStatusPreview';
// import NoPlanStatus from '../NoPlanStatus/NoPlanStatus';
// import DriverPendingStatus from '../DriverPendingStatus/DriverPendingStatus';
// import DriverRejectedStatus from '../DriverRejectedStatus/DriverRejectedStatus';
// import DriverAcceptedStatus from '../DriverAcceptedStatus/DriverAcceptedStatus';
import TripStartedStatus from '../TripStartedStatus/TripStartedStatus';

const truckStatusData = (props) => {
    return (
        <div>
            <TruckStatusPreview label="TN09Q8188" status="No plans" />
            {/* <NoPlanStatus /> */}
            {/* <DriverPendingStatus /> */}
            {/* <DriverRejectedStatus /> */}
            {/* <DriverAcceptedStatus /> */}
            <TripStartedStatus />
        </div>
    );
}

export default truckStatusData;