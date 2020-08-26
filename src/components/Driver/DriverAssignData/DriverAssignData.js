import React from 'react';
import moment from 'moment';

import defaultProfilePic from '../../../images/default-profile-picture.png'
import classes from './DriverAssignData.module.scss';
import Button from '../../UI/Button/Button';
import DataGrid from '../../UI/DataGrid/DataGrid';
import DataGridItem from '../../UI/DataGrid/DataGridItem/DataGridItem';
import Modal from '../../UI/Modal/Modal';
import TruckCallInfo from '../../Truck/TruckCallInfo/TruckCallInfo';

const driverAssignData = props => {
    let defaultContent = (
        <React.Fragment>
            <div className={classes.DriverAssignData__Profile}>
                <img
                    className={classes.DriverAssignProfile__Dp}
                    src={defaultProfilePic}
                    alt="Profile pic"
                />
                <DataGridItem dataKey="Assigned to" value={props.driverName} />
            </div>

            <DataGrid
                chunk={2}
                data={[
                    { key: 'Loaded From Location', value: props.startLocation },
                    { key: 'Unloading Location', value: props.endLocation },
                    { key: 'Trip Started Time', value: moment.unix(props.tripStartedTime / 1000).format('MMM DD, hh:mm a') },
                    { key: 'ETA To Destination', value: '-' }
                ]}
            >

            </DataGrid>
            <section className={classes.DriverAssignData__Action}>
                <Button
                    type="button"
                    buttonType="flat"
                    icon="local_phone"
                    onClick={() => props.setIsCallModallOpen(true)}
                >
                    Call
                </Button>
            </section>
        </React.Fragment>
    );

    return (
        <div className={classes.DriverAssignData}>
            {!props.modalMode ? (
                <React.Fragment>
                    {defaultContent}
                    <Modal
                        caption="Call info"
                        show={props.isCallModallOpen}
                        modalClosed={() => props.setIsCallModallOpen(false)}
                    >
                        <TruckCallInfo vehicleId={props.vehicleId} />
                    </Modal>
                </React.Fragment>
            ) : props.isCallModallOpen ? (
                <TruckCallInfo vehicleId={props.vehicleId} />
            ) : defaultContent}
        </div>
    );
}

driverAssignData.defaultProps = {
    modalMode: false
}

export default driverAssignData;