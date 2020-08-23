import React from 'react';
import { HashRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';

import classes from './Tabs.module.scss';

const Tabs = props => {
    const defaultTab = props.defaultTab ? props.defaultTab : 1;

    return (
        <HashRouter basename={props.baseUrl}>
            <div className={classes.Tabs}>
                <ul className={classes.Tabs__Tabs}>
                    {props.tabs.map(tabData => (
                        <li key={tabData.label}>
                            <NavLink activeClassName={classes.Active} to={tabData.label}>
                                <span className={['material-icons', classes.Icon].join(' ')}>
                                    {tabData.icon}
                                </span>
                                <span className={classes.Text}>
                                    {tabData.label}
                                </span>
                                {tabData.highlight ? (<div className={classes.Dot}></div>) : null}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classes.Content}>
                <Switch>
                    {props.tabs.map((tabData, index) => {
                        return (
                            <Route
                                key={`${tabData.label}__${index}`}
                                exact path={`/${tabData.label}`}
                                component={() => props.children[index]}
                            />
                        )
                    })}

                    {defaultTab ? (
                        <Redirect to={props.tabs[defaultTab - 1].label} />
                    ) : null}
                </Switch>
            </div>
        </HashRouter>
    )
}

export default Tabs;