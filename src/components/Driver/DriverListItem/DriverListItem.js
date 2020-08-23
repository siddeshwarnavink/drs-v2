import React from 'react';

import defaultProfilePicture from '../../../images/default-profile-picture.png';
import classes from './DriverListItem.module.scss';
import Button from '../../UI/Button/Button';

const driverListItem = props => {
    const noAction = props.noAction ? props.noAction : false;
    
    return (
        <div className={classes.DriverListItem}>
            <img
                src={defaultProfilePicture}
                alt="Profile pic"
                className={classes.DriverListItem__ProfilePic}
            />

            <div className={classes.DriverListItem__Data}>
                <span className={classes.DriverListData__Name}>{props.displayName}</span>
                <span className={classes.DriverListData__Phoneno}>{props.contactNo}</span>
            </div>

            <div style={{ flex: 1 }}></div>

            <div className={classes.DriverListItem__Action}>
                {!noAction ? (
                    <Button
                        type="button"
                        onClick={props.assignDriver}
                        buttonType="flat"
                        buttonTheme="success"
                    >
                        Assign
                    </Button>
                ) : null}
            </div>
        </div>
    );
}

export default driverListItem;