import React, { useContext, useEffect } from 'react';

import NavigationContext from '../../context/navigation';
import PageTitle from '../../components/PageTitle/PageTitle';

const ManageVehicles = props => {
    const navigationCtx = useContext(NavigationContext);

    useEffect(() => {
        navigationCtx.setCurrentActive(2)
    }, [navigationCtx]);

    return (
        <main className="container">
            <PageTitle>Manage Vehicles</PageTitle>
            {/* TODO */}
        </main>
    )
}

export default ManageVehicles;