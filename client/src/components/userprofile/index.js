import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/userprofile.css';
import { getCurrentProfile } from '../../actions/profiles';
import Spinner from '../spinner/Spinner';
import { addPreset } from '../../actions/presets';

const Profile = (props) => {
  useEffect(() => {
    props.getCurrentProfile();
  }, [props]);

  return props.profile.loading && props.profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id='profile_wrapper'>
        <div style={{ color: 'white' }} id='userprofile_container'>
          <div className='left'>
            <h1>Welcome {props.auth.user && props.auth.user.name}!</h1>
            <img
              alt='userimage'
              src={!props.auth.loading ? props.auth.user.avatar : null}
            ></img>
            <h2>You have full access to all features of cryptX !</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapActionsToProps = {
  getCurrentProfile,
  addPreset,
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  addPreset: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
