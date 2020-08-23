import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationItem.module.scss';
import { getClassList } from './NavigationItem.utils';
import NavigationContext from '../../../context/navigation';

const NavigationItem = (props) => {
    const navigationCtx = useContext(NavigationContext);

    return (
        <li className={getClassList(classes, props, navigationCtx.isBottombar).join(' ')}>
            <Link to={props.to}>
                <span className={['material-icons', classes.Icon].join(' ')}>
                    {props.icon}
                </span>
                <span className={[classes.Label, 'nav-label'].join(' ')}>
                    {props.label}
                </span>
            </Link>
        </li>
    );
}

export default NavigationItem;