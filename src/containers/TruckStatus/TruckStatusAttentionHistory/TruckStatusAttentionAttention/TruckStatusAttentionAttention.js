import React, { useState } from 'react';

import classes from './TruckStatusAttentionAttention.module.scss'
import Input from '../../../../components/UI/Form/Input/Input';

const TruckStatusAttentionAttention = props => {
    const [currentTab, setCurrentTab] = useState(0);

    const tabs = [
        {
            icon: 'local_gas_station',
            label: 'Fuel Fill'
        },
        {
            icon: 'build',
            label: 'Spares & Service'
        },
        {
            icon: 'undo',
            label: 'Loading Charge'
        },
        {
            icon: 'redo',
            label: 'Unloading Charge'
        },
        {
            icon: 'commute',
            label: 'Movement Plan'
        },
        {
            icon: 'article',
            label: 'POD'
        }
    ];
    
    return (
        <div className={classes.TruckStatusAttentionAttention}>
            <section className={classes.TruckStatusAttentionAttention__Input}>
                <Input
                    label="Select Category"
                    type="select"
                    options={tabs.map(t => t.label)}
                    value={currentTab}
                    onChange={(e) => setCurrentTab(parseInt(e.target.value))}
                />
            </section>

            <div className={classes.TruckStatusAttentionAttention__Grid}>
                <aside className={classes.TruckStatusAttentionAttention__Sidebar}>
                    <ul className={classes.TruckStatusAttentionSidebar__List}>
                        {tabs.map((tabData, index) => (
                            <li key={index} className={classes.TruckStatusAttentionList__Item}>
                                <button
                                    onClick={() => setCurrentTab(index)}
                                    className={index === currentTab ? classes.Active : null}
                                >
                                    <span className={['material-icons', classes.Icon].join(' ')}>
                                        {tabData.icon}
                                    </span>
                                    <span className={classes.Text}>
                                        {tabData.label}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className={classes.TruckStatusAttentionAttention__Content}>
                    Content...
                </main>
            </div>
        </div>
    )
}

export default TruckStatusAttentionAttention;