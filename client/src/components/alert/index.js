import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Assets
import './alert.scss';

const Alert = (props) =>
  props.alerts.length > 0 &&
  props.alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Alert);
