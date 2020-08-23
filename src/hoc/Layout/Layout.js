import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.scss';
import NavigationContext from '../../context/navigation';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Logo from '../../components/Logo/Logo';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import BottomBar from '../../components/Navigation/BottomBar/BottomBar';
import ProfilePreviewData from '../../components/User/ProfilePreviewData/ProfilePreviewData';

const Layout = (props) => {
    const [currentActive, setCurrentActive] = useState(0);

    return (
        <div>
            <Toolbar
                logo={<Logo />}
                prfilePreview={
                    (props.isAuthenticated ? (
                        <ProfilePreviewData
                            username={props.userData.email.split('@')[0]}
                            role="Fleet Owner"
                        />
                    ) : null)
                }
            >
                <div style={{ flex: 1 }}></div>
            </Toolbar>
            {props.isAuthenticated ? (
                <div className={classes.PageLayout}>
                    <NavigationContext.Provider value={{ activeSection: currentActive, setCurrentActive }}>
                        <SideDrawer></SideDrawer>
                        <main className={classes.DashboardPageContent}>
                            {props.children}
                        </main>
                        <BottomBar></BottomBar>
                    </NavigationContext.Provider>
                </div>
            ) : (<main className={classes.PageContent}>
                {props.children}
            </main>)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    userData: state.auth.user
});

export default connect(mapStateToProps)(Layout);