import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../styles/userprofile.css'
import { getCurrentProfile } from '../../actions/profiles'
import Spinner from '../spinner/Spinner'

const Profile = (props) => {

    useEffect(() => {
        props.getCurrentProfile()
    }, [])

    return (
        props.profile.loading && props.profile === null ? <Spinner /> : (
            <div style={{height:'100vh', color:'white'}} id="userprofile_container">
                <h1>Your Profile</h1>
                <img src={!props.auth.loading && props.auth.user.avatar}></img>
                <h3>Welcome {!props.auth.loading && props.auth.user.name}!</h3>
            </div>
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

