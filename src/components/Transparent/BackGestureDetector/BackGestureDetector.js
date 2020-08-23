/* istanbul ignore file */

import React from 'react';

import classes from './BackGestureDetector.module.scss';

const backGestureDetector = props => {
    return (
        <div className={classes.BackGestureDetector} {...props}></div>
    );
}

export default backGestureDetector;