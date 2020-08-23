import React, { useContext, useEffect } from 'react';

import classes from './TruckStatus.module.scss';
import NavigationContext from '../../../context/navigation';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Card from '../../../components/UI/Card/Card';
import TruckStatusData from '../../../components/Truck/TruckStatus/TruckStatusData/TruckStatusData';

const TruckStatus = props => {
    const navigationCtx = useContext(NavigationContext);

    useEffect(() => {
        navigationCtx.setCurrentActive(0)
    }, [navigationCtx]);

    return (
        <main className="container">
            <PageTitle>Truck Status (3)</PageTitle>
            <div className={classes.TruckStatus}>
                <Card>
                    <TruckStatusData />
                </Card>
                <Card>
                    <TruckStatusData />
                </Card>
                <Card>
                    <TruckStatusData />
                </Card>
            </div>
        </main>
    )
}

export default TruckStatus;