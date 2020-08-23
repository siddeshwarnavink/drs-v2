/* istanbul ignore file */

import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions';
import Layout from './hoc/Layout/Layout';
import MobileAuth from './containers/Auth/MobileAuth/MobileAuth';
import TruckStatusOverview from './containers/TruckStatus/TruckStatusOverview/TruckStatusOverview';
import TruckStatus from './containers/TruckStatus/TruckStatus';
import AllTrucks from './containers/AllTrucks/AllTrucks';
import ManageVehicles from './containers/ManageVehicles/ManageVehicles';

export const App = (props) => {
  useEffect(() => {
    props.setInitialAuthState();
  }, [props]);

  let routes = (
    <Switch>
      <Route exact path="/auth/mobile" component={MobileAuth} />
      <Redirect to="/auth/mobile" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route exact path="/fleetOwner/TruckStatus/AllTruck" component={AllTrucks} />
        <Route exact path="/fleetOwner/TruckStatus/ManageVehicles" component={ManageVehicles} />
        <Route exact path="/fleetOwner/TruckStatus" component={TruckStatusOverview} />
        <Route exact path="/fleetOwner/TruckStatus/:id" component={TruckStatus} />
        <Redirect to="/fleetOwner/TruckStatus" />
      </Switch>
    );
  }

  return (
    <Layout isAuthenticated={props.isAuthenticated}>
      {routes}
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  setInitialAuthState: (phoneNumber) => dispatch(actions.setInitialAuthState(phoneNumber))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
