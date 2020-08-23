import React, { useContext } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import NavigationContext from '../../context/navigation';

const Navigation = props => {
    const navigationCtx = useContext(NavigationContext);

    const navigationItems = [
        {
            icon: 'home',
            label: 'Dashboard',
            to: '/'
        },
        {
            icon: 'local_shipping',
            label: 'All Trucks',
            to: '/fleetOwner/TruckStatus/AllTruck'
        },
        {
            icon: 'location_on',
            label: 'Manage Vehicles',
            to: '/fleetOwner/TruckStatus/ManageVehicles'
        }
    ];

    return (
        <React.Fragment>
            {navigationItems.map((navItm, index) => (
                <NavigationItem
                    key={index}
                    activeLink={index === navigationCtx.activeSection}
                    label={navItm.label} 
                    icon={navItm.icon} 
                    to={navItm.to}
                />
            ))}
        </React.Fragment>
    );
}

export default Navigation;