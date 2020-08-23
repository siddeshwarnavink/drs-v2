import React from 'react';

import classes from './Card.module.scss';

const card = (props) => {
    return (
        <div className={classes.Card} style={{ padding: props.noPadding ? 0 : '10px 16px' }}>
            {props.children}
        </div>
    )
}

export default card;