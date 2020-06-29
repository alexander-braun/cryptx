import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import './alert.scss';

const Alert = (props) =>
  props.alerts !== null &&
  props.alerts.length > 0 &&
  props.alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propsTypes = {
  alerts: PropsTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
