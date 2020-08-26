import React, { useEffect, useState } from 'react';

import classes from './TruckCallInfo.module.scss';
import axios from '../../../springboot-axios';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import DataGrid from '../../UI/DataGrid/DataGrid';

const fetchCallDetails = async vehicleId => {
    const response = await axios({
        url: `/getVehicleInfo?vehicleId=${vehicleId}`,
        method: 'GET'
    });

    return response.data;
}

const TruckCallInfo = props => {
    const [loading, setLoading] = useState(true);
    const [callData, setCallData] = useState(null);

    useEffect(() => {
        fetchCallDetails(props.vehicleId).then(fetchedCallData => {
            setLoading(false);
            setCallData(fetchedCallData);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.TruckCallInfo}>
            {loading ? <LoadingSpinner /> : (
                <React.Fragment>
                    {callData && (
                        <DataGrid
                            chunk={2}
                            data={[
                                { key: 'Driver Name', value: callData.driverName },
                                { key: 'Driver Number', value: callData.mobileNum },
                                { key: 'Hub Incharge Name', value: callData.hubInchargeName },
                                { key: 'Hub Incharge Number', value: callData.hubMobNum },
                                { key: 'Logistics Manager Name', value: callData.logisticsManager },
                                { key: 'Logistics Manager Number', value: callData.logisticsPhoneNum },
                            ]}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
}

export default TruckCallInfo;