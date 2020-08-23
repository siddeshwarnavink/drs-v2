import React from 'react';

import classes from './TruckStatusAttentionInstruction.module.scss';
import Form from '../../../../components/UI/Form/Form';
import Input from '../../../../components/UI/Form/Input/Input';
import Button from '../../../../components/UI/Button/Button';

const truckStatusAttentionInstruction = props => {
    return (
        <div className={classes.TruckStatusAttentionInstruction}>
            <Form>
                <Input
                    type="select"
                    options={['Full fuel', 'Loading Charges', 'Unloading Charges', 'Spares']}
                    label="Select Instruction Types"
                />
                <Input type="number" label="Fuel Fill Quantity" placeholder="In Litres" />
                <Input type="text" label="Fuel Filled Location" />

                <Button>Save</Button>
            </Form>
        </div>
    );
}

export default truckStatusAttentionInstruction;