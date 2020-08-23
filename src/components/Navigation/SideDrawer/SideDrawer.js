import React, { useContext } from 'react';

import classes from './SideDrawer.module.scss';
import Navigation from '../Navigation';
import ProfilePreviewData from '../../User/ProfilePreviewData/ProfilePreviewData';
import NavigationContext from '../../../context/navigation';

const SideDrawer = () => {
    const parrentNavigationContextCtx = useContext(NavigationContext);

    return (
        <div className={classes.SideDrawer}>
            <ProfilePreviewData
                username="vsfarooqkhan"
                role="Fleet Owner"
            />
            <ul className={classes.SideDrawer__Links}>
                <NavigationContext.Provider value={{ activeSection: parrentNavigationContextCtx.activeSection, isBottombar: false }}>
                    <Navigation />
                </NavigationContext.Provider>
            </ul>
        </div>
    )
}

export default SideDrawer;