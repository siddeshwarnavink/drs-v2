import React, { useState } from 'react';

import classes from './Dropdown.module.scss';
import BackGestureDetector from '../../Transparent/BackGestureDetector/BackGestureDetector';

const Dropdown = props => {
    const [isVisible, setIsVisibe] = useState(props.__defaultIsVisibe ? props.__defaultIsVisibe : false);

    return (
        <React.Fragment>
            <div onClick={() => setIsVisibe(true)}>
                {props.children}
            </div>
            <div className={classes.Dropdown} style={{ display: isVisible ? 'block' : 'none' }}>
                {props.options.map((option, index) => (
                    /* eslint-disable jsx-a11y/anchor-is-valid */
                    <a href="#" onClick={option.onClick} key={index}>{option.label}</a>
                ))}
            </div>
            {isVisible && <BackGestureDetector onClick={() => setIsVisibe(false)} />}
        </React.Fragment>
    );
}

export default Dropdown;