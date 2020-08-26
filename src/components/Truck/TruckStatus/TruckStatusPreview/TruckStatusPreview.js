import React from 'react';

import blueTruck from '../../../../images/trucks/truck-blue.png';
import yellowTruck from '../../../../images/trucks/truck-yellow.png';
import classes from './TruckStatusPreview.module.scss';
import { getStatusColorClass } from './TruckStatusPreview.utils';

const truckStatusPreview = props => {
    return (
        <div className={classes.TruckStatusPreview}>
            <img src={props.isYellowTruck ? yellowTruck : blueTruck} className={classes.TruckStatusPreview__Image} alt="preview" />
            <div className={classes.TruckStatusPreview__Data}>
                <span className={[classes.TruckStatusData__Label, 'label'].join(' ')}>
                    {props.label}
                </span>
                <span className={[classes.TruckStatusData__Status, getStatusColorClass(props, classes), 'status'].join(' ')}>
                    {props.status}
                </span>
            </div>
        </div>
    )
}

export default truckStatusPreview;