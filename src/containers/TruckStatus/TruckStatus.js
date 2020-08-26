import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import NavigationContext from '../../context/navigation';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import TruckStatusViewPlan from './TruckStatusViewPlan/TruckStatusViewPlan';
import TruckStatusCreatePlan from './TruckStatusCreatePlan/TruckStatusCreatePlan';
import TruckStatusAttentionHistory from './TruckStatusAttentionHistory/TruckStatusAttentionHistory';

const TruckStatus = props => {
    const navigationCtx = useContext(NavigationContext);
    const [subscriptionKey, setSubscriptionKey] = useState(null);

    useEffect(() => {
        navigationCtx.setCurrentActive(0);
    }, [navigationCtx]);

    useEffect(() => {
        if (props.vehicles.length === 0) {
            props.loadVehicles();
        }
        props.subscribeLiveVehicleStatus();
        setSubscriptionKey(props.currentSubscriptionKey)
        return function cleanup() {
            props.unsubscribeLiveVehicleStatus(subscriptionKey);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (props.loading) {
        return <LoadingSpinner spaced />
    }

    const vehicleData = props.vehicles.find(vehicle => vehicle.vehicleId === props.match.params.id)
    vehicleData.liveStatus = props.liveVehicleStatusData.find(data => data.vehicleId === props.match.params.id)

    if (vehicleData.liveStatus) {
        if (!vehicleData.vehicleStatus) {
            return (
                <TruckStatusCreatePlan
                    {...props}
                    vehicleData={JSON.parse(JSON.stringify(vehicleData))}
                />
            )
        }

        if (vehicleData.liveStatus.driverStatus === 'PENDING' || vehicleData.liveStatus.driverStatus === 'ACKNOWLEDGED') {
            return (
                <TruckStatusViewPlan
                    {...props}
                    vehicleData={JSON.parse(JSON.stringify(vehicleData))}
                />
            )
        }

        return (
            <TruckStatusAttentionHistory
                {...props}
                vehicleData={JSON.parse(JSON.stringify(vehicleData))}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.vehicles.loading && state.vehicles.liveStatusDataLoaded,
    error: state.vehicles.error,
    vehicles: state.vehicles.vehicles,
    currentSubscriptionKey: state.vehicles.latestSubscriptionIndex,
    liveVehicleStatusData: state.vehicles.liveStatusData
});

const mapDispatchToProps = dispatch => ({
    loadVehicles: () => dispatch(actions.loadVehicles()),
    subscribeLiveVehicleStatus: () => dispatch(actions.startLiveVehicleStatus()),
    unsubscribeLiveVehicleStatus: index => dispatch(actions.stopLiveVehicleStatus(index))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TruckStatus);