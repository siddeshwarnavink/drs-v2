import React from 'react';

import classes from './DataGrid.module.scss';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import DataGridItem from './DataGridItem/DataGridItem';

const DataGrid = props => {
    const isMobile = useMediaQuery('(max-width:600px)');

    // eslint-disable-next-line no-array-constructor
    const gridTemplateColumns = new Array(props.chunk).fill().map(() => 'auto').join(' ');

    const styles = {
        container: isMobile => ({
            gridTemplateColumns: isMobile ? 'auto auto' : gridTemplateColumns
        })
    };

    return (
        <div
            className={classes.DataGrid}
            style={styles.container(isMobile)}
        >
            {props.data.map((keyValPairs, index) => (
                <DataGridItem
                    key={index}
                    dataKey={keyValPairs.key}
                    value={keyValPairs.value}
                />
            ))}
        </div>
    )
}

export default DataGrid;