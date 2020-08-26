import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';

import * as actions from '../../../../store/actions';
import DataGrid from '../../../../components/UI/DataGrid/DataGrid';

const TruckStatusAttentionPlan = props => {
    useEffect(() => {
        console.log(props.seqNum);
        props.loadTripData(props.seqNum);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <DataGrid
            chunk={4}
            data={[
                { key: 'Current Location', value: props.tripData.pickupLocation },
                { key: 'Pickup Date and Time', value: props.tripData.pickupDateTime },
                { key: 'Vehicle Status', value: 'Empty' },
                { key: 'Loading Location', value: props.tripData.loadingLocation },
                { key: 'Planned Loading Time', value: props.tripData.plannedTime },
                { key: 'Unloading Location', value: props.tripData.unloadingLocation },
                { key: 'Planned Unloading Time', value: props.tripData.unloadingPlannedTime },
                { key: 'Contact Person', value: props.tripData.contactPerson },
                { key: 'Contact Number', value: props.tripData.contactPersonNumber }
            ]}
        />
    );
}


const mapStateToProps = (state) => ({
    loading: state.trip.loading,
    error: state.trip.error,
    tripData: state.trip.data,
});

const mapDispatchToProps = dispatch => ({
    loadTripData: seqNum => dispatch(actions.loadTripData(seqNum)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TruckStatusAttentionPlan);