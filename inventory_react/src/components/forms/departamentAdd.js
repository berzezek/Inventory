import React, { useState } from 'react';
import axios from 'axios';
import {variable} from '../global/url';
import {csrftoken} from '../global/csrfToken';


export default function DepartamentAdd() {
    const [departament_title, setDepartament_title] = useState("")
    const [departament_description, setDepartament_description] = useState("")

    const AddNewDepartament = async () => {
        const formField = new FormData()

        formField.append('departament_title', departament_title)
        formField.append('departament_description', departament_description)

    if (departament_title) {
        await axios({
            headers: {"X-CSRFToken":csrftoken },
            method: 'post',
            url: variable.MainUrl + `api/v1/departament/`,
            data: formField
        }).then(response => {
            alert(`departament ${departament_title} has been added`);
            })
        } else {
            alert('Please enter any title')
        }
    }
    return (
        <div className="container sm">
            <h3 className="text-center">Add new Departament</h3>
            <form className="form-control p-2" onSubmit={AddNewDepartament}>
                <div className="d-flex my-2">
                <input
                    type="text"
                    className="form-control w-50 me-1"
                    placeholder="Departament"
                    name="departament_title"
                    value={departament_title}
                    onChange={(e) => setDepartament_title(e.target.value)}
                    />
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Description"
                    name="departament_description"
                    value={departament_description}
                    onChange={(e) => setDepartament_description(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-secondary my-2">Submit</button>
            </form>
        </div>
    )
}