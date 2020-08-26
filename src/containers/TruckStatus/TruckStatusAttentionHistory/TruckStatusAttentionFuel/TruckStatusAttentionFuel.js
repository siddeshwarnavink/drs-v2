import React, { useState, useEffect } from 'react';
import moment from 'moment';

import axios from '../../../../springboot-axios';
import DataGrid from '../../../../components/UI/DataGrid/DataGrid';
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner';

const fetchFillFuel = async vehicleId => {
    const response = await axios({
        url: `/getLastFill?vehicleId=${vehicleId}`
    });
    return response.data;
}

const TruckStatusFuelPlan = props => {
    const [fuelFill, setFuelFill] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFillFuel().then((fetchedFuelFill) => {
            setFuelFill(fetchedFuelFill);
            setLoading(false)
        })
    }, []);

    return (
        loading ? <LoadingSpinner /> : (
            <DataGrid
                chunk={4}
                data={[
                    { key: 'Current Fuel Level', value: fuelFill.fuelLevel ? `${fuelFill.fuelLevel} liters` : '' },
                    { key: 'Last Fuel Filled Location ', value: fuelFill.location ? fuelFill.location : '' },
                    { key: 'Last Fuel Filled Quantity', value: fuelFill.quantity ? `${fuelFill.quantity} liters` : '' },
                    { key: 'Last Fuel Filled - Dt & Time ', value: fuelFill.date ? moment(fuelFill.date).format("MMM DD @ h:mm a") : '' },
                ]}
            />
        )
    );
}

export default TruckStatusFuelPlan;