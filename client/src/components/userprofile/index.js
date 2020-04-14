import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import '../../styles/userprofile.css'

const Profile = (props) => {
    return (
        <div style={{height:'100vh', color:'white'}} id="userprofile_container">
            <h1>Your Profile</h1>
            <img src={!props.auth.loading && props.auth.user.avatar}></img>
            <h3>Welcome {!props.auth.loading && props.auth.user.name}!</h3>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

Profile.propTypes = {
    
}

export default connect(mapStateToProps)(Profile)

