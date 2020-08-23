import React from 'react';

import classes from './TruckStatusChip.module.scss';

const truckStatusChip = props => {
    return (
        <div className={classes.TruckStatusChip}>
            <span className={['material-icons', classes.TruckStatusChip__Icon].join(' ')}>
                {props.icon}
            </span>
            <span className={[classes.TruckStatusChip__Label, 'label'].join(' ')}>
                {props.value}
            </span>
        </div>
    )
}

export default truckStatusChip;