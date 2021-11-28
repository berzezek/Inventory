import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {variable} from '../global/url';


export default function UserAuth() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const UserAuth = async (e) => {
        e.preventDefault();
        const formField = new FormData()

        formField.append('username', username)
        formField.append('password', password)

        await axios({
            method: 'post',
            url: variable.MainUrl + 'api-auth/login/',
            data: formField
        }).then(response => {
            alert('Error');
        })
    }

    return (
        <div className="container sm">
            <h3 className="text-center">Add new Owner</h3>
            <form className="form-control p-2" onSubmit={UserAuth}>
                <div className="d-flex mb-2">
                    <input
                        type="text"
                        className="form-control w-50 me-1"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    )
}
