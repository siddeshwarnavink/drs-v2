import React, { useContext } from 'react';
import { connect } from 'react-redux';

import classes from './SideDrawer.module.scss';
import Navigation from '../Navigation';
import ProfilePreviewData from '../../User/ProfilePreviewData/ProfilePreviewData';
import NavigationContext from '../../../context/navigation';

const SideDrawer = props => {
    const parrentNavigationContextCtx = useContext(NavigationContext);

    return (
        <div className={classes.SideDrawer}>
            <ProfilePreviewData
                username={props.userData.email.split('@')[0]}
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

const mapStateToProps = (state) => ({
    userData: state.auth.user
});

export default connect(mapStateToProps)(SideDrawer);