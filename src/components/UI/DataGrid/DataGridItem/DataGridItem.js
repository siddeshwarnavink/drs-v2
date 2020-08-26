import React from 'react';

import classes from './DataGridItem.module.scss';

const dataGridItem = props => {
    return (
        <div className={classes.DataGridItem}>
            <span className={classes.DataGridItem__Key}>{props.dataKey}</span>
            <span className={classes.DataGridItem__Value}>{props.value}</span>
        </div>
    );
}

export default dataGridItem;