import React from 'react';

export default class SignInPage extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleEmailChange = (e) => this.setState({
        email: e.target.value,
    })

    handlePasswordChange = (e) => this.setState({
        password: e.target.value,
    })

    render() {
        return (
            <div>
                <label>
                    <p>
                        Email
                    </p>
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange} required />
                </label>
                <label>
                    <p>
                        Password
                    </p>
                    <input value={this.state.password} onChange={this.handlePasswordChange} required />
                </label>
            </div>
        );
    }
}