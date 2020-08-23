import React, { useContext, useEffect } from 'react';

import NavigationContext from '../../context/navigation';
// import TruckStatusViewPlan from './TruckStatusViewPlan/TruckStatusViewPlan';
// import TruckStatusCreatePlan from './TruckStatusCreatePlan/TruckStatusCreatePlan';
import TruckStatusAttentionHistory from './TruckStatusAttentionHistory/TruckStatusAttentionHistory';

const TruckStatus = props => {
    const navigationCtx = useContext(NavigationContext);

    useEffect(() => {
        navigationCtx.setCurrentActive(0)
    }, [navigationCtx]);

    // return <TruckStatusViewPlan {...props} />
    // return <TruckStatusCreatePlan {...props} />
    return <TruckStatusAttentionHistory {...props} />
}

export default TruckStatus;