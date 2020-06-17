import React from 'react'

export default class Registration extends React.Component{
    constructor(props){
        super(props)

        this.onEmailchange = this.onEmailchange.bind(this)
        this.onPassChange = this.onPassChange.bind(this)
        this.onPassRepeatChange = this.onPassRepeatChange.bind(this)
    }
    onEmailchange (e) {
        this.props.setEmail(e.target.value)
    }
    onPassChange(e){
        this.props.setPassword(e.target.value)
    }
    onPassRepeatChange(e){
        this.props.setPasswordRepeat(e.target.value)
    }

    render () {
        return (
            <div className="registration">
                <h2>Register</h2>
                <form>
                    <input 
                        type="email"
                        placeholder="E-mail"
                        onChange = {this.onEmailchange}
                    />
                    <input 
                        type="password"
                        onChange = {this.onPassChange}
                        placeholder = "Password"
                    />
                    <input 
                        type="password"
                        onChange = {this.onPassRepeatChange}
                        placeholder = "Repeat password"
                    />
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        )
    }
}