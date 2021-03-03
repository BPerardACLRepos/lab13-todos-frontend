import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header.js';
import PrivateRoute from './components/PrivateRoute.js';
import Home from './Home/Home.js';
import SignUpPage from './AuthPages/SignUpPage.js';
import LoginPage from './AuthPages/LoginPage.js';
import TodosListPage from './TodosListPage/TodosListPage.js';
import { setUserStorage, getStoredUserToken } from './UTILS/local-storage-utils.js';

export default class App extends React.Component {

  state = {
    token: getStoredUserToken(),
  }

  handleUserChange = (user) => {
    setUserStorage(user);

    this.setState({
      token: user.token,
    })
  }

  handleLogout = () => {
    const user = {
      id: '',
      email: '',
      token: '',
    }

    this.handleUserChange(user);
  }

  render() {

    return (
      <div>
        <Router>
          <Header
            token={this.state.token}
            handleLogout={this.handleLogout} />
          {/* <Switch>
            <PrivateRoute
              path="/todos"
              exact
              token={user && user.token}
              render={(routerProps) =>
                <TodosListPage
                  token={this.state.token}
                  {...routerProps}
                />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) =>
                <SignUpPage
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />}
            />
            <Route
              path="/"
              exact
              render={(routerProps) =>
                <SignInPage
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />}
            />

          </Switch> */}
        </Router>
      </div>
    )
  }
}