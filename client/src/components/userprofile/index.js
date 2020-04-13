import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Profile = (props) => {
    return (
        <div style={{height:'100vh', color:'white'}}>
            <h1>Profile</h1>
            <h3>Welcome {!props.auth.loading && props.auth.user.name}!</h3>
            <img src={!props.auth.loading && props.auth.user.avatar}></img>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Profile)

