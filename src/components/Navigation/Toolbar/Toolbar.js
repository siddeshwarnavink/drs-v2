import React from 'react';

import classes from './Toolbar.module.scss';

const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.Toolbar__Logo}>
                {props.logo}
            </div>
            {props.children}
            <div  className={classes.Toolbar__Profile}>
                {props.prfilePreview}
            </div>
        </div>
    )
}

export default toolbar;