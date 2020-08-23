import React from 'react';

import defaultProfilePic from '../../../images/default-profile-picture.png'
import classes from './DriverAssignData.module.scss';
import Button from '../../UI/Button/Button';
import DataGrid from '../../UI/DataGrid/DataGrid';
import DataGridItem from '../../UI/DataGrid/DataGridItem/DataGridItem';

const driverAssignData = () => {
    return (
        <div className={classes.DriverAssignData}>
            <div className={classes.DriverAssignData__Profile}>
                <img 
                    className={classes.DriverAssignProfile__Dp}
                    src={defaultProfilePic}
                    alt="Profile pic"
                />
                <DataGridItem dataKey="Assigned to" value="FAROOQKHAN1" />
            </div>

            <DataGrid
                chunk={2}
                data={[
                    { key: 'Loaded From Location', value: 'ARIZONA' },
                    { key: 'Unloading Location', value: 'KENTUCKY' },
                    { key: 'Trip Started Time', value: 'Aug 18, 03:46 pm' },
                    { key: 'ETA To Destination', value: '-' }
                ]}
            >

            </DataGrid>
            <section className={classes.DriverAssignData__Action}>
                <Button
                    type="button"
                    buttonType="flat"
                    icon="local_phone"
                >
                    Call
            </Button>
            </section>
        </div>
    );
}

export default driverAssignData;