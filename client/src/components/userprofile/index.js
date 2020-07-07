import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './userprofile.scss';
import { getCurrentProfile } from '../../actions/profiles';
import Spinner from '../spinner/Spinner';
import { addPreset } from '../../actions/presets';
import { deleteCurrentProfile } from '../../actions/profiles';

//Actions
import { logout } from '../../actions/authenticate';

const Profile = (props) => {
  useEffect(() => {
    props.getCurrentProfile();
  }, [props]);

  return props.profile.loading && props.profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='profile-wrapper'>
        <div className='profile-wrapper__card'>
          <h1>Welcome {props.auth.user && props.auth.user.name}!</h1>
          <img
            alt='userimage'
            src={!props.auth.loading ? props.auth.user.avatar : null}
            className='profile-wrapper__user-img'
          ></img>
          <h2 className='profile-wrapper__access-text'>
            You have full access <br></br> to all features of cryptx.<br></br>
          </h2>
          <button
            className='profile-wrapper__delete-profile'
            onClick={() => {
              props.logout();
            }}
          >
            Logout
          </button>
          <button
            className='profile-wrapper__delete-profile'
            onClick={() => {
              props.deleteCurrentProfile();
              props.logout();
            }}
          >
            Delete Profile
          </button>
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
  deleteCurrentProfile,
  logout,
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  addPreset: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
