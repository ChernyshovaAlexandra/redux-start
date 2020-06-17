import React from 'react'
import Auth from "./Auth";
import { connect } from 'react-redux';
import { setEmail, setPassword } from '../store/auth/actions'




class AuthContainer extends React.Component{
    render () {
        return (
            <Auth email={this.props.email} password = {this.props.pass} setEmail={this.props.setEmail} setPassword = {this.props.setPassword}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        pass: state.auth.pass
    }
}
const mapDispatchToProps = {
        setEmail,
        setPassword
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)