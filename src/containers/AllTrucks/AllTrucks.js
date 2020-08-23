import React, { useEffect, useContext } from 'react';

import NavigationContext from '../../context/navigation';
import PageTitle from '../../components/PageTitle/PageTitle';

const AllTrucks = props => {
    const navigationCtx = useContext(NavigationContext);

    useEffect(() => {
        navigationCtx.setCurrentActive(1)
    }, [navigationCtx]);

    return (
        <main className="container">
            <PageTitle>All Trucks</PageTitle>
            {/* TODO */}
        </main>
    )
}

export default AllTrucks;