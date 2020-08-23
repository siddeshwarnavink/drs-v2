import React, { useState, useEffect } from 'react';

import classes from './DriverPicker.module.scss';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import DriverListItem from '../DriverListItem/DriverListItem';
import Input from '../../UI/Form/Input/Input';

const DriverPicker = props => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [driverList, setDriverList] = useState([
        {
            driverId: "54ooaRJU1Uc2x1oRxtrVprc11n23",
            driverName: "JENI",
            mobileNo: "8072807493",
            licenceNum: "67890"
        },
        {
            driverId: "254ooaRJU1Uc2x1oRxtrVprc11n23",
            driverName: "JENI 2",
            mobileNo: "8072807493",
            licenceNum: "67890"
        }
    ]);
    const [pickedDriver, setPickedDriver] = useState(null);

    const assignDriverHandler = (driverData) => {
        setPickedDriver(driverData);
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (props.value) {
            setPickedDriver(props.value);
        }
    }, [props]);

    return (
        <div className={classes.DriverPicker}>
            {pickedDriver !== null ? (
                <DriverListItem
                    id={pickedDriver.driverId}
                    displayName={pickedDriver.driverName}
                    contactNo={pickedDriver.mobileNo}
                    noAction
                />
            ) : null}
            <Button
                type="button"
                buttonType="flat"
                onClick={() => setIsModalOpen(c => !c)}
            >{pickedDriver === null ? 'Choose' : 'Change'} driver</Button>

            <Modal
                caption="Pick driver"
                show={isModalOpen}
                modalClosed={() => setIsModalOpen(c => !c)}
                maxHeight={450}
            >
                <Input type="text" placeholder="Search by name, phone number... " />
                {driverList.map(driverData => (
                    <DriverListItem
                        key={driverData.driverId}
                        id={driverData.driverId}
                        displayName={driverData.driverName}
                        contactNo={driverData.mobileNo}
                        assignDriver={() => assignDriverHandler(driverData)}
                    />
                ))}
            </Modal>
        </div>
    )
}

export default React.memo(DriverPicker);