import React from 'react';
import AuthContainer from './components/AuthContainer'
import RegistrationContainer from './components/RegistrationContainer'
import './css/App.css'



export default class App extends React.Component {
    render() {
        return (
                <div className="inner_container">
                    <div className="wrapper">
                        <AuthContainer />
                        <RegistrationContainer />
                    </div>
                </div>
        );
    }
}
