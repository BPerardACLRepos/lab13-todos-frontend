import React from 'react';
import Link from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Link>
                    Sign In
                </Link>
                <Link>
                    Sign Up
                </Link>
                <Link>
                    To Dos
                </Link>
                <button>
                    Log Out
                </button>
            </div>
        );
    }
}