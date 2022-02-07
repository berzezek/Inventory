import React, { Component } from 'react';
import {variable} from '../global/url';
import LoginForm from '../forms/LoginForm';
import Nav from '../navbar/Nav';

class LoginComp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        displayed_form: '',
        logged_in: localStorage.getItem('token') ? true : false,
        username: ''
      };
    }
    
    componentDidMount() {
      if (this.state.logged_in) {
        fetch(`${variable.MainUrl}api/auth/current_user/`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`},
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
          .then(res => res.json())
          .then(json => {
            this.setState({ username: json.username });
          });
      }
    }
  
    handle_login = (e, data) => {
      e.preventDefault();
      fetch(`${variable.MainUrl}api/auth/token-auth/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.user.username
          });
        });
    };
  
    handle_logout = () => {
      localStorage.removeItem('token');
      this.setState({ logged_in: false, username: '' });
    };
  
    display_form = form => {
      this.setState({
        displayed_form: form
      });
    };
  
    render() {
      let form;
      switch (this.state.displayed_form) {
        case 'login':
          form = <LoginForm handle_login={this.handle_login} />;
          break;
        default:
          form = null;
      }
      
      return (
        <div className="container">
          <Nav
            logged_in={this.state.logged_in}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
          />
          {form}
          <h4 className="mt-2 text-light text-center">
            {this.state.logged_in
              ? `Hello, ${this.state.username}`
              : 'Please Log In'}
          </h4>
        </div>
      );
    }
  }
  
  export default LoginComp;