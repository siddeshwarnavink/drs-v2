import React from 'react';

import classes from './LoadingSpinner.module.scss';

const loadingSpinner = props => {
    return (
        <div className={classes.Loader} style={{ margin: props.spaced ? '12rem auto' : '88px auto' }}>Loading...</div>
    );
}

export default loadingSpinner;