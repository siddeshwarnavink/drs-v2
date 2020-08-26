import React from 'react';

import PageTitle from '../../../components/PageTitle/PageTitle';
import Card from '../../../components/UI/Card/Card';
import TripFrom from '../../../components/Trip/TripForm/TripForm';

const TruckStatusCreatePlan = props => {
    return (
        <main className="container">
            <PageTitle back="/">Create Plan - {props.match.params.id}</PageTitle>
            <Card>
                <TripFrom />
            </Card>
        </main>
    );
}

export default TruckStatusCreatePlan;