import React from 'react'
import { setPassword } from '../store/auth/actions'


export default class Auth extends React.Component{
    constructor (props){
        super(props)
        this.onEmailchange = this.onEmailchange.bind(this)
        this.onPassChange = this.onPassChange.bind(this)
    }
    onEmailchange (e) {
        this.props.setEmail(e.target.value)

    }
    onPassChange(e){
        this.props.setPassword(e.target.value)

    }
    render () {
        return (
            <div className="auth">
                <h2>Authorize</h2>
                <form>
                    <input 
                        type="email"
                        value = {this.props.email}
                        onChange = {this.onEmailchange}
                    />
                    <input 
                        type="password"
                        value = {this.props.pass}
                        onChange= {this.onPassChange}
                    />
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        )
    }
}