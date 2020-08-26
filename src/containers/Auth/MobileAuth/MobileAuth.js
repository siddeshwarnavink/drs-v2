/* istanbul ignore file */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';
import classes from './MobileAuth.module.scss';
import authBg from '../../../images/auth-bg.png';
import Card from '../../../components/UI/Card/Card';
import From from '../../../components/UI/Form/Form';
import Input from '../../../components/UI/Form/Input/Input';
import Button from '../../../components/UI/Button/Button';

export const MobileAuth = props => {
    const [mobileNumber, setMobileNumber] = useState('');

    const onSubmitHandler = async () => {
        await props.onAuth(mobileNumber);
        setMobileNumber('');
    }

    return (
        <React.Fragment>
            <div className={classes.Wrapper} style={{ backgroundImage: `url(${authBg})` }}></div>
            <div className={classes.Overlay}></div>

            <main className={classes.PageContent}>
                <Card>
                    <span className={['material-icons', classes.PageContent__Icon].join(' ')}>
                        {props.isOTPState ? "phonelink_lock" : "mobile_screen_share"}
                    </span>
                    <h1 className={classes.PageContent__Title}>
                        {props.isOTPState ? "Verify OTP" : "Mobile Login"}
                    </h1>

                    <From onSubmit={onSubmitHandler}>
                        <div className={classes.PageContent__Container}>
                            <Input
                                type="number"
                                label={props.isOTPState ? "Enter OTP" : "Mobile number"}
                                placeholder={props.isOTPState ? "******" : "+91"}
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />

                            <span className={classes.ErrorMessage}>{props.error ? props.error.message : null}</span>

                            <section className={classes.PageContainer__Button}>
                                <Button
                                    type="submit"
                                    loading={props.loading}
                                >
                                    {props.isOTPState ? "Submit" : "Get OTP"}
                                </Button>
                            </section>
                        </div>
                    </From>
                </Card>
            </main>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated,
    isOTPState: state.auth.mobile.confirmationResult ? true : false
});

const mapDispatchToProps = dispatch => ({
    onAuth: (phoneNumber) => dispatch(actions.mobileAuth(phoneNumber))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileAuth);