import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../styles/userprofile.css'
import { getCurrentProfile } from '../../actions/profiles'
import Spinner from '../spinner/Spinner'
import GetAppIcon from '@material-ui/icons/GetApp'
import EditIcon from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom'

const Profile = (props) => {

    useEffect(() => {
        props.getCurrentProfile()
    }, [])

    return (
        props.profile.loading && props.profile === null ? <Spinner /> : (
            <Fragment>
                <div id="profile_wrapper">
                    <div style={{color:'white'}} id="userprofile_container">
                        <div className="left">
                            <h1>Welcome {props.auth.user && props.auth.user.name}!</h1>
                            <img src={!props.auth.loading && props.auth.user.avatar}></img>
                        </div>
                        <div className="right">
                            <h2>Saved Presets</h2>
                            <table id="presets">
                                <tbody>
                                    <tr>
                                        <th>Preset Name</th>
                                        <th>Method</th>
                                        <th>Description</th>
                                        <th>Load</th>
                                        <th>Edit</th>
                                    </tr>
                                    <tr>
                                        <td>My caesar preset</td>
                                        <td>Caesars cipher</td>
                                        <td>encryption test</td>
                                        <td><GetAppIcon /></td>
                                        <td><EditIcon /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {props.profile.profile !== null ? (
                        <div className="update_profile">has</div>
                        ) : (
                        <div className="update_profile">
                            <h2>Update User Profile!</h2>
                            <Link to="/create-profile">Update Profile</Link>
                        </div>
                    )}    
                </div>
            </Fragment>
        )
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

const mapActionsToProps = {
    getCurrentProfile
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapActionsToProps)(Profile)

