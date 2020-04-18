import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../styles/userprofile.css'
import { getCurrentProfile } from '../../actions/profiles'
import Spinner from '../spinner/Spinner'
import GetAppIcon from '@material-ui/icons/GetApp'
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import { Link } from 'react-router-dom'
import { addPreset } from '../../actions/addPreset'

const Profile = (props) => {

    useEffect(() => {
        props.getCurrentProfile()
        /*
        props.addPreset(
            {   "name": "My final pres",
                "description": "fuckeridoo",
                "preset": {
                    "method": "caesar",
                    "cshift": "4"
                }
            })
        */
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
                            <h1>Saved Presets</h1>
                            <table id="presets">
                                <tbody>
                                    <tr>
                                        <th>Preset Name</th>
                                        <th>Method</th>
                                        <th>Description</th>
                                        <th>Load</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                    <tr>
                                        <td>My caesar preset</td>
                                        <td>Caesars cipher</td>
                                        <td>encryption test</td>
                                        <td><GetAppIcon /></td>
                                        <td><EditIcon /></td>
                                        <td><DeleteForeverIcon /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
    getCurrentProfile,
    addPreset
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    addPreset: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapActionsToProps)(Profile)

