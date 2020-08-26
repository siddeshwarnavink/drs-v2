import React, { useState } from 'react';

import classes from './DriverInfoButton.module.scss';
import Modal from '../../UI/Modal/Modal';
import DriverAssignData from '../DriverAssignData/DriverAssignData';

const DriverInfoButton = props => {
    const [isModallOpen, setIsModallOpen] = useState(false);
    const [isCallModallOpen, setIsCallModallOpen] = useState(false);

    return (
        <React.Fragment>
            <button className={classes.DriverInfoButton} onClick={() => setIsModallOpen(true)}>
                <span className="material-icons">assignment_ind</span>
            </button>
            <Modal
                caption={isCallModallOpen ? 'Call info' : 'Driver info'}
                show={isModallOpen}
                modalClosed={() => {
                    setIsModallOpen(false);
                    setIsCallModallOpen(false);
                }}
                maxHeight={350}
                onGoBack={isCallModallOpen ? () => setIsCallModallOpen(false) : undefined}
                noScroll
            >
                <DriverAssignData
                    driverName={props.driverName}
                    startLocation={props.startLocation}
                    endLocation={props.endLocation}
                    tripStartedTime={props.tripStartedTime}
                    isCallModallOpen={isCallModallOpen}
                    setIsCallModallOpen={setIsCallModallOpen}
                    modalMode
                    vehicleId={props.vehicleId}
                />
            </Modal>
        </React.Fragment>
    );
}

export default DriverInfoButton;