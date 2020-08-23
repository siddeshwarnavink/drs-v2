import React from 'react';

import classes from './TripForm.module.scss';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Form/Input/Input';
import Button from '../../UI/Button/Button';

const TripForm = () => {
    return (
        <div className={classes.TripForm}>
            <Form>
                <Input
                    label="Select Plan"
                    type="select"
                    options={['Loading', 'Unloading', 'Service', 'Shed']}
                />

                <Input
                    label="Contact Person"
                    type="text"
                />

                <Input
                    label="Contact number"
                    type="number"
                />

                <div className={classes.TripFromGrid}>
                    <section>
                        <Input
                            label="Current Location"
                            type="text"
                        />
                        <Input
                            label="Pick up date and Time"
                            type="datetime"
                        />
                    </section>
                    <section>
                        <Input type="text" label="Unloading Location" />
                        <Input
                            label="Planned Unloading Time"
                            type="datetime"
                        />
                    </section>
                </div>


                <Input type="driver" label="Assign driver" />

                <section className={classes.TripForm__Button}>
                    <Button>Submit</Button>
                </section>
            </Form>
        </div>
    )
}

export default TripForm;