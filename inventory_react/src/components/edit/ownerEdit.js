import React, {useState} from 'react';
import axios from 'axios';
import {variable} from '../global/url';
import { useHistory } from "react-router-dom";
import useGetApi from '../hooks/GetApi';


export default function OwnerEdit(props) {

  const history = useHistory();
  const id = props.id;
  const name = props.name
  const [ownerName, setOwnerName] = useState(props.ownerName);
  const [ownerSurname, setOwnerSurname] = useState(props.ownerSurname);
  const [ownerDescription, setOwnerDescription] = useState(props.ownerDescription);
  const [ownerDepartament, setOwnerDepartament] = useState(props.ownerDepartament);

  const dataUser = {
    name: ownerName,
    surname: ownerSurname,
    owner_description: ownerDescription,
    departament: ownerDepartament,
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios({
        headers: {'Authorization': `Token ${window.localStorage['access_token']}`},
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
        <div className="container sm">
            <h3 className="text-center">Edit Owner</h3>
            <form className="form-control p-2" onSubmit={handleSubmit}>
                <div className="d-flex mb-2">
                    <input
                        type="text"
                        className="form-control w-50 me-1"
                        placeholder="Surname"
                        name="ownerSurname"
                        value={ownerSurname}
                        onChange={(e) => setOwnerSurname(e.target.value)}
                        />
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Name"
                        name="ownerName"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        />
                </div>
                <div className="d-flex mb-2">
                    <input
                        type="text"
                        className="form-control w-50 me-1"
                        placeholder="Description"
                        name="ownerDescription"
                        value={ownerDescription}
                        onChange={(e) => setOwnerDescription(e.target.value)}
                        />
                    <select className="form-select w-50" name="departament" onChange={(e) => setOwnerDepartament(e.target.value)}>
                      <option value="">Select departament</option>
                      {useGetApi({name: 'departament'}).map(p => (
                      <option key={p.id} value={p.id}>{p.departament_title}</option>
                      ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
  );
}

