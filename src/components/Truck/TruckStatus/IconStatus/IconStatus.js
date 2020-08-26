import React from 'react';

import classes from './IconStatus.module.scss'

const iconStatus = props => {
    return (
        <div className={classes.IconStatus}>
            <span className={['material-icons', classes.IconStatus__Icon].join(' ')}>
                {props.icon}
            </span>
            <span className={[classes.IconStatus__Label, 'label'].join(' ')}>
                {props.label}
            </span>
        </div>
    )
}

export default iconStatus;