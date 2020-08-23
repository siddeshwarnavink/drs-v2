import React from 'react';

import PageTitle from '../../../components/PageTitle/PageTitle';
import Card from '../../../components/UI/Card/Card';
import TripFrom from '../../../components/Trip/TripForm/TripForm';

const TruckStatusViewPlan = props => {
    return (
        <main className="container">
            <PageTitle back="/">View Plan - {props.match.params.id}</PageTitle>
            <Card>
                <TripFrom />
            </Card>
        </main>
    );
}

export default TruckStatusViewPlan;