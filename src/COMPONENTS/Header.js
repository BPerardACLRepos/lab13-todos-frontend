import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                {!this.props.token && <>
                    <NavLink exact activeClassName="current-page" to="/">
                        Sign In
                </NavLink>
                    <NavLink exact activeClassName="current-page" to="/signup">
                        Sign Up
                </NavLink>
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