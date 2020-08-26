import React, { useState, useEffect } from 'react';

import classes from './TruckStatusAttentionAttention.module.scss'
import axios from '../../../../springboot-axios';
import Input from '../../../../components/UI/Form/Input/Input';
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner';
import NoDataFallback from '../../../../components/Fallback/NoDataFallback/NoDataFallback';
import TruckStatusAttentionAttentionPOD from './TruckStatusAttentionAttentionPOD/TruckStatusAttentionAttentionPOD';

const fetchVehicleAttention = async vehicleId => {
    const response = await axios({
        method: 'GET',
        url: `/viewAttentionBasedOnVehicleId?vehicleId=${vehicleId}`
    });
    return response.data;
}

const TruckStatusAttentionAttention = props => {
    const [currentTab, setCurrentTab] = useState(0);
    const [vehicleAttention, setVehicleAttention] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadDataHandler = () => {
        fetchVehicleAttention(props.vehicleId).then(fetchedVehicleAttention => {
            setVehicleAttention(fetchedVehicleAttention);
            setLoading(false);
        });
    }

    useEffect(() => {
        loadDataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let tabs = [
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

    let displayCmp, displayData = [];

    const filterByCategory = (vehicleAttention, displayDataCategory) => {
        return vehicleAttention.filter(data => data.type === displayDataCategory)
    };

    if (!loading) {
        switch (currentTab) {
            case 5:
                displayData = filterByCategory(vehicleAttention, 'POD');
                displayCmp = (
                    <TruckStatusAttentionAttentionPOD
                        data={displayData}
                        refreshList={loadDataHandler}
                    />
                );
                break;

            default:
                displayCmp = null;
                break;
        }
    }

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
                    {loading ? (<LoadingSpinner />) : (
                        displayData.length === 0 ? <NoDataFallback /> : displayCmp
                    )}
                </main>
            </div>
        </div>
    )
}

export default TruckStatusAttentionAttention;