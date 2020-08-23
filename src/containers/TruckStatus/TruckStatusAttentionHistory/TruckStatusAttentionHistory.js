import React from 'react';

import classes from './TruckStatusAttentionHistory.module.scss';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Card from '../../../components/UI/Card/Card';
import TruckStatusData from '../../../components/Truck/TruckStatus/TruckStatusData/TruckStatusData';
import DriverAssignData from '../../../components/Driver/DriverAssignData/DriverAssignData';
import Tabs from '../../../components/UI/Tabs/Tabs';
import TruckStatusAttentionPlan from './TruckStatusAttentionPlan/TruckStatusAttentionPlan';
import TruckStatusAttentionFuel from './TruckStatusAttentionFuel/TruckStatusAttentionFuel';
import TruckStatusAttentionInstruction from './TruckStatusAttentionInstruction/TruckStatusAttentionInstruction';
import TruckStatusAttentionAttention from './TruckStatusAttentionAttention/TruckStatusAttentionAttention';

const TruckStatusAttentionHistory = props => {
    return (
        <main className={['container', classes.TruckStatusAttentionHistory].join(' ')}>
            <PageTitle back="/">Attention History</PageTitle>
            <div className={classes.TruckStatusAttentionHistory__Grid}>
                <Card>
                    <TruckStatusData />
                </Card>
                <Card>
                    <DriverAssignData />
                </Card>
            </div>

            <Card noPadding>
                <Tabs
                    baseUrl={props.location.path}
                    tabs={[
                        { label: 'Attention', icon: 'priority_high', highlight: true },
                        { label: 'Plan', icon: 'menu_book' },
                        { label: 'Fuel', icon: 'local_gas_station' },
                        { label: 'Instruction', icon: 'notes' }
                    ]}
                    defaultTab={2}
                >
                    {[
                        <TruckStatusAttentionAttention key="tab__1"/>,
                        <TruckStatusAttentionPlan key="tab__2" />,
                        <TruckStatusAttentionFuel key="tab__3"/>,
                        <TruckStatusAttentionInstruction key="tab__4"/>
                    ]}
                </Tabs>
            </Card>
        </main>
    )
}

export default TruckStatusAttentionHistory;