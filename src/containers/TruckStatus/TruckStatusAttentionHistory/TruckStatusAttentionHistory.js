import React, { useState } from 'react';

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
    const [isCallModallOpen, setIsCallModallOpen] = useState(false);

    return (
        <main className={['container', classes.TruckStatusAttentionHistory].join(' ')}>
            <PageTitle back="/">Attention History - {props.vehicleData.vehicleId}</PageTitle>
            <div className={classes.TruckStatusAttentionHistory__Grid}>
                <Card>
                    <TruckStatusData
                        vehicleId={props.vehicleData.vehicleId}
                        vehicleStatus={props.vehicleData.vehicleStatus}
                        driverStatus={props.vehicleData.liveStatus ? props.vehicleData.liveStatus.driverStatus : 'PENDING'}
                        truckAxleType={props.vehicleData.truckAxleType}
                        startLocation={props.vehicleData.liveStatus.startLocation}
                        endLocation={props.vehicleData.liveStatus.endLocation}
                        tripStartedTime={props.vehicleData.liveStatus.tripStartedTime}
                        gpsFuel={props.vehicleData.liveStatus.gpsFuel}
                        currentOdo={props.vehicleData.liveStatus.currentOdo}
                        documents={props.vehicleData.liveStatus.documents}
                    />
                </Card>
                <Card>
                    <DriverAssignData
                        isCallModallOpen={isCallModallOpen}
                        setIsCallModallOpen={setIsCallModallOpen}
                        driverName={props.vehicleData.liveStatus.driverName}
                        startLocation={props.vehicleData.liveStatus.startLocation}
                        endLocation={props.vehicleData.liveStatus.endLocation}
                        tripStartedTime={props.vehicleData.liveStatus.tripStartedTime}
                        vehicleId={props.vehicleData.vehicleId}
                    />
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
                        <TruckStatusAttentionAttention
                            vehicleId={props.vehicleData.vehicleId}
                            key="tab__1"
                        />,
                        <TruckStatusAttentionPlan
                            key="tab__2"
                            seqNum={parseInt(props.vehicleData.liveStatus.nextTripNum)}
                        />,
                        <TruckStatusAttentionFuel
                            key="tab__3"
                            vehicleId={props.vehicleData.vehicleId}
                        />,
                        <TruckStatusAttentionInstruction key="tab__4" />
                    ]}
                </Tabs>
            </Card>
        </main>
    )
}

export default TruckStatusAttentionHistory;