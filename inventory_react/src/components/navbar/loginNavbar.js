import React, {useState} from 'react';
import { UserContext } from '../../contexts/userContext.js';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import LoginPage from '../../pages/LoginPage.js';
import HomePage from '../../pages/HomePage.js';
import AuthenticatedPing from '../../pages/AuthenticatedPing.js';
import { logoutUser } from '../../api/auth.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function LoginNavbar() {
  const [user, setUser] = useState(null);
  const isUserLoggedIn = () => {
    return !!user;
  }
  const logout = (event) => {
    event.preventDefault();
    logoutUser();
    setUser(null);
  }

  /* referring to <UserContext.Provider value={{user, setUser, isUserLoggedIn}}> and other instances.
  * since the values are stored as variables in context, it's not necessary to escape the values for XSS-sake.
  */
  return (
    <div className="bg-light p-5 rounded">
      <UserContext.Provider value={{user, setUser, isUserLoggedIn}}>
        <Router>
          <Container>
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                  { isUserLoggedIn() ?
                    <Nav.Link as={Link} onClick={logout}>Logout</Nav.Link>
                    :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  }
                </Nav>
              </Navbar.Collapse>
            </Navbar>
                <Route exact path="/login">
                  <LoginPage/>
                </Route>
          </Container>
        </Router>

      </UserContext.Provider>
    </div>
  );
}

export default LoginNavbar;
