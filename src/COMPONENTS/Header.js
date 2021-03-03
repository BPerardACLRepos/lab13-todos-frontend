import React from 'react';
import Link from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                {!this.props.token && <>
                    <Link to="/">
                        Sign In
                </Link>
                    <Link to="/signup">
                        Sign Up
                </Link>
                </>}
                {this.props.token && <>
                    <Link to="/todos">
                        To Dos
                </Link>
                    <button onClick={this.props.handleLogout}>
                        Log Out
                </button>
                </>}
            </div>
        );
    }
}