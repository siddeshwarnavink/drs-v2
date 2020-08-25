import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './TruckStatus.module.scss';
import * as actions from '../../../store/actions';
import NavigationContext from '../../../context/navigation';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Card from '../../../components/UI/Card/Card';
import TruckStatusData from '../../../components/Truck/TruckStatus/TruckStatusData/TruckStatusData';
import DriverInfoButton from '../../../components/Driver/DriverInfoButton/DriverInfoButton';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';

const TruckStatus = props => {
    const [subscriptionKey, setSubscriptionKey] = useState(null);
    const navigationCtx = useContext(NavigationContext);

    useEffect(() => {
        navigationCtx.setCurrentActive(0)
    }, [navigationCtx]);

    useEffect(() => {
        props.loadVehicles();
        props.subscribeLiveVehicleStatus();
        setSubscriptionKey(props.currentSubscriptionKey)
        return function cleanup() {
            props.unsubscribeLiveVehicleStatus(subscriptionKey);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const vehiclesData = props.vehicles.map(vdata => {
        return {
            ...vdata,
            liveStatus: props.liveVehicleStatusData.find(d => d.vehicleId === vdata.vehicleId)
        }
    });
    const loading = !props.loading && !vehiclesData.map(({ liveStatus }) => liveStatus ? true : false).indexOf(false) > 0;

    return (
        <main className="container">
            {loading ? <LoadingSpinner spaced /> : (
                <React.Fragment>
                    <PageTitle>Truck Status ({props.vehicles.length})</PageTitle>
                    <div className={classes.TruckStatus}>
                        {vehiclesData.map(vehicle => (
                            <Card key={vehicle.vehicleId}>
                                {vehicle.vehicleStatus === 'Trip Started' ? (
                                    <DriverInfoButton
                                        driverName={vehicle.liveStatus.driverName}
                                        startLocation={vehicle.liveStatus.startLocation}
                                        endLocation={vehicle.liveStatus.endLocation}
                                        tripStartedTime={vehicle.liveStatus.tripStartedTime}
                                        vehicleId={vehicle.vehicleId}
                                    />
                                ) : null}
                                <Link to={`/fleetOwner/TruckStatus/${vehicle.vehicleId}`} className={classes.CardLink}>

                                    <TruckStatusData
                                        vehicleId={vehicle.vehicleId}
                                        vehicleStatus={vehicle.vehicleStatus}
                                        driverStatus={vehicle.liveStatus ? vehicle.liveStatus.driverStatus : 'PENDING'}
                                        truckAxleType={vehicle.truckAxleType}
                                        startLocation={vehicle.liveStatus.startLocation}
                                        endLocation={vehicle.liveStatus.endLocation}
                                        tripStartedTime={vehicle.liveStatus.tripStartedTime}
                                        gpsFuel={vehicle.liveStatus.gpsFuel}
                                        currentOdo={vehicle.liveStatus.currentOdo}
                                        documents={vehicle.liveStatus.documents}
                                    />
                                </Link>
                            </Card>
                        ))}
                    </div>
                </React.Fragment>
            )}
        </main>
    )
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