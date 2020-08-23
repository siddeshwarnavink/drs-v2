import React from 'react';

import DataGrid from '../../../../components/UI/DataGrid/DataGrid';

const truckStatusFuelPlan = props => {
    return (
        <DataGrid
            chunk={4}
            data={[
                { key: 'Current Location', value: 'arizona' },
                { key: 'Current Location', value: 'arizona' },
                { key: 'Current Location', value: 'arizona' },
                { key: 'Current Location', value: 'arizona' },
            ]}
        />
    );
}

export default truckStatusFuelPlan;