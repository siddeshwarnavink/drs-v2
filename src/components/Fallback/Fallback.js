import React from 'react';

import classes from './Fallback.module.scss';

const fallback = props => {
    return (
        <div className={classes.Fallback}>
            <span className={['material-icons', classes.Fallback__Icon].join(' ')}>
                {props.icon}
            </span>

            <h3 className={classes.Fallback__Message}>
                {props.message}
            </h3>
        </div>
    )
}

export default fallback;