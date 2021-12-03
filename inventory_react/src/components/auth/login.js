import React, {useState} from 'react';
import axios from 'axios';
import {variable} from '../global/url';
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import {csrftoken} from '../global/csrfToken';

const LoginComp = () => {

  const history = useHistory();
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    let label = "Login";
    const formData = {
        'user': {
            'email': email,
            'password': password
            }
        }

    if (email && password) {
        await axios({
            headers: {"X-CSRFToken": csrftoken },
            method: 'post',
            url: 'http://127.0.0.1:8000/api/auth/users/login/',
            data: formData
        }).then(response => {
        if (response.statusText === 'OK') {
            const token = response.data['user']['token'];
            axios.defaults.headers.common['Authorization'] = `Token ${token}`;
            alert('You are logged in');
            console.log(label);
            label = "OK";
            console.log(label);
            history.push(`/`);
        } else {
            alert('Please enter correct');
            window.location.reload();
            }
        }
        )} else {
            alert('Please enter email & password');
            }
  }

return(
    <div className="bg-light p-5 rounded">
        <form className="form-control p-2" onSubmit={handleSubmit}>
            <div className="d-flex my-2">
            <input
                type="email"
                className="form-control me-1"
                placeholder="Email"
                name="email"
                value={email}
                autocomplete="email"
                onChange={(e) => setEmail(e.target.value)}
                />
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                autocomplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
    </div>
    )
}


export default LoginComp;