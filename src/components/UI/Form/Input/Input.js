import React from 'react';
import Datetime from 'react-datetime';

import classes from './Input.module.scss';
import DriverPicker from '../../../Driver/DriverPicker/DriverPicker';

const input = (props) => {
    let returnInput;

    switch (props.type) {
        case "text":
            returnInput = (
                <input
                    className={classes.Input}
                    type="text"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            );
            break;
        case "number":
            returnInput = (
                <input
                    className={classes.Input}
                    type="number"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            );
            break;
        case "select":
            returnInput = (
                <select
                    className={classes.Input}
                    value={props.value}
                    onChange={props.onChange}
                >
                    {props.options.map((option, index) => (
                        <option key={index} value={index}>{option}</option>
                    ))}
                </select>
            );
            break;
        case "datetime":
            returnInput = (
                <Datetime
                    onChange={props.onChange}
                    value={props.value}
                    input={false}
                />
            );
            break;

        case 'driver':
            returnInput = (
                <DriverPicker
                    onChange={props.onChange}
                    value={props.value}
                />
            );
            break;
        default:
            returnInput = null;
            break;
    }

    return (
        <div className={classes.FormControl}>
            <label className={classes.Label}>{props.label}</label>
            {returnInput}
        </div>
    );
}

export default input;