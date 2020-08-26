import React from 'react';

import classes from './Button.module.scss';
import { getClassList } from './Button.utils';

const button = (props) => {
    return (
        <button
            type={props.type}
            className={getClassList(classes, props).join(' ')}
            disabled={props.loading}
            onClick={props.onClick}
        >
            {props.icon ? (
                <React.Fragment>
                    <span className={['material-icons', classes.Button__Icon].join(' ')}>
                        {props.icon}
                    </span>

                    <span className={classes.Button__Text}>
                        {props.loading ? "Loading..." : props.children}
                    </span>
                </React.Fragment>
            ) : (
                    props.loading ? "Loading..." : props.children
                )}

        </button>
    )
}

export default button;