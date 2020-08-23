import React from 'react';

import logoImage from '../../images/logo.png'
import classes from './Logo.module.scss';

const logo = props => {
    return (
        <React.Fragment>
            <img  className={classes.ImageLogo} src={logoImage} alt="Logo" />
            <span className={classes.TextLogo}>Fleet OS</span>
        </React.Fragment>
    )
}

export default logo;