import React from 'react'
import Registration from "./Registration";
import { connect } from 'react-redux';
import { setEmail, setPassword, setPasswordRepeat } from '../store/registration/actions'

class RegistrationContainer extends React.Component{
    render () {
        return (
            <Registration 
                email={this.props.email} 
                password = {this.props.pass}  
                passwordrepeat={this.props.repeatPass} 
                setEmail={this.props.setEmail} 
                setPassword = {this.props.setPassword} 
                setPasswordRepeat={this.props.setPasswordRepeat} 
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        email: state.registration.email,
        pass: state.registration.pass,
        repeatPass: state.registration.repeatPass
    }
}
const mapDispatchToProps = {
        setEmail,
        setPassword,
        setPasswordRepeat
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)