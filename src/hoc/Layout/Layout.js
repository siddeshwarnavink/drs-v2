import React, { useState } from 'react';

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
                            username="vsfarooqkhan"
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

export default Layout;