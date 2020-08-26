import React from 'react';

import classes from './TruckStatusAttentionAttentionPOD.module.scss';
import axios from '../../../../../springboot-axios';
import DataGrid from '../../../../../components/UI/DataGrid/DataGrid';
import Button from '../../../../../components/UI/Button/Button';

const POD_ROOT = 'https://vamotest.sgp1.cdn.digitaloceanspaces.com/TESTDRS/';
const truckStatusAttentionAttentionPOD = props => {
    console.log(props.data);

    const transformedData = data => data.map(d => ({
        ...d,
        image: d.image.split(',')
    }));

    const onSubmitStatusHandler = async (responseImage, vehicleId, seqNum) => {
        try {
            await axios({
                method: 'GET',
                url: `http://209.97.163.4:9010/basedrs/responseToAttention?ownerName=${props.uid}&vehicleId=${vehicleId}&responseAmount=0&responseQuantity=0&responsetext=&responseImage=${responseImage}&seqNum=${seqNum}&type=POD&remarks=`
            });
        } catch (error) {
            // ...
        }

        props.refreshList();
    }

    return (
        <div className={classes.TruckStatusAttentionAttentionPOD}>
            {transformedData(props.data).map((podData) => (
                <div key={podData.seqNum} className={classes.TruckStatusAttentionAttentionPOD__Item}>
                    <section className={classes.TruckStatusAttentionAttentionPODItem__Image}>
                        {podData.image.map(img => (
                            <img key={img} src={`${POD_ROOT}${img}`} alt="POD" />
                        ))}
                    </section>
                    <section className={classes.TruckStatusAttentionAttentionPODItem__Data}>
                        <DataGrid
                            chunk={1}
                            data={[
                                { key: 'Remarks', value: podData.remarks },
                                { key: 'Status', value: podData.attentionStatus },
                                { key: 'Date & Time', value: podData.dateTime },
                            ]}
                        />
                        <Button
                            buttonType="flat"
                            buttonTheme="success"
                            onClick={() => onSubmitStatusHandler('APPROVED', podData.vehicleId, podData.seqNum)}
                        >
                            Approve
                        </Button>
                        <Button
                            buttonType="flat"
                            buttonTheme="danger"
                            onClick={() => onSubmitStatusHandler('REJECTED', podData.vehicleId, podData.seqNum)}
                        >
                            Reject
                        </Button>
                    </section>
                </div>
            ))}
        </div>
    );
}

export default truckStatusAttentionAttentionPOD;