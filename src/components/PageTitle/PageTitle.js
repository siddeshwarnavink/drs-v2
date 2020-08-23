import React from 'react';
import { Link } from 'react-router-dom';
import classes from './PageTitle.module.scss';

const pageTitle = props => {
    return (
        <div className={classes.PageTitle}>
            {props.back ? (
                <Link to={props.back}>
                    <span className="material-icons">
                        arrow_back
                    </span>
                </Link>
            ) : null}
            <h1>{props.children}</h1>
        </div>
    )
}

export default pageTitle;