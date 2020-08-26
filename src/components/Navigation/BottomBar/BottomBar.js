import React, { useContext } from 'react';

import classes from './BottomBar.module.scss';
import Navigation from '../Navigation';
import NavigationContext from '../../../context/navigation';

const BottomBar = () => {
    const parrentNavigationContextCtx = useContext(NavigationContext);

    return (
        <div className={classes.BottomBar}>
            <NavigationContext.Provider value={{ isBottombar: true, activeSection: parrentNavigationContextCtx.activeSection }}>
                <Navigation />
            </NavigationContext.Provider>
        </div>
    );
}

export default BottomBar;