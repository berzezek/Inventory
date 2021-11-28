import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {variable} from '../global/url';
import {csrftoken} from '../global/csrfToken';


export default function OwnerAdd() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [owner_description, setOwner_description] = useState("")
    const [owner_departament, setOwner_departament] = useState("")

    const [departament, setDepartament] = useState([])

    useEffect( async () =>{
        await axios({
        method: "GET",
        url: variable.MainUrl + `api/v1/departament/`
        }).then(response => {
        setDepartament(response.data)
        })
    }, [])

    const AddNewOwner = async () => {

        const formField = new FormData()

        formField.append('name', name)
        formField.append('surname', surname)
        formField.append('owner_description', owner_description)
        formField.append('departament', owner_departament)

    if (surname && name) {
        await axios({
            headers: {"X-CSRFToken":csrftoken },
            method: 'post',
            url: variable.MainUrl + `api/v1/owner/`,
            data: formField
        }).then(response => {
            alert(`Owner ${surname} ${name} has been added`);
            })
        } else {
            alert('Surname & Name must be added');
        }
    }

    return (
        <div className="container sm">
            <h3 className="text-center">Add new Owner</h3>
            <form className="form-control p-2" onSubmit={AddNewOwner}>
                <div className="d-flex mb-2">
                    <input
                        type="text"
                        className="form-control w-50 me-1"
                        placeholder="Surname"
                        name="surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        />
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div className="d-flex mb-2">
                    <input
                        type="text"
                        className="form-control w-50 me-1"
                        placeholder="Description"
                        name="owner_description"
                        value={owner_description}
                        onChange={(e) => setOwner_description(e.target.value)}
                        />
                    <select className="form-select w-50" name="departament" onChange={(e) => setOwner_departament(e.target.value)}>
                      <option value="">Select departament</option>
                      {departament.map(p => (
                      <option key={p.id} value={p.id}>{p.departament_title}</option>
                      ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    )
}
