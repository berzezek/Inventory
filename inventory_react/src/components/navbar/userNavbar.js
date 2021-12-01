import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UserNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Ateca hotel suites</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

                <Nav.Link><Link to={{ pathname: `/category`, fromDashboard: false }} className="btn btn-outline-secondary ms-1">Category</Link></Nav.Link>
                <Nav.Link><Link to={{ pathname: `/departament`, fromDashboard: false }} className="btn btn-outline-secondary ms-1">Departament</Link></Nav.Link>
                <Nav.Link><Link to={{ pathname: `/owner`, fromDashboard: false }} className="btn btn-outline-secondary ms-1">Owner</Link></Nav.Link>
                <Nav.Link><Link to={{ pathname: `/inventory`, fromDashboard: false }} className="btn btn-outline-secondary">Inventory</Link></Nav.Link>
                <Nav.Link><Link to={{ pathname: `/login`, fromDashboard: false }} className="btn btn-outline-secondary">Login</Link></Nav.Link>

              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        )
    }


export default UserNavbar;