import React, {useState} from 'react';
import axios from 'axios';
import {variable} from '../global/url';
import { useHistory } from "react-router-dom";


export default function DepartamentEdit(props) {

  const history = useHistory();
  const id = props.id;
  const name = props.name
  const [departament_title, setDepartament_title] = useState(props.title);
  const [departament_description, setDepartament_description] = useState(props.description);
  const dataUser = {departament_title: departament_title, departament_description: departament_description};

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios({
      headers: {Authorization: `JWT ${localStorage.getItem('token')}`},
      method: 'put',
      url: variable.MainUrl + `api/v1/${name}/${id}/`,
      data: dataUser
      }).then(
        alert(`The ${name} was been edited`),
        history.push(`/${name}`),
        window.location.reload()
        )
  }

  return (
    <div className="container sm mt-5">
        <h3 className="text-center">Edit Departament</h3>
        <form className="form-control p-2" onSubmit={handleSubmit}>
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
  );
}

