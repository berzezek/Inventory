import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import {variable} from '../global/url';

export default  function NavbarDepartament() {

      const [departament, setDepartament] = useState([])

      useEffect(() => {
      axios({
        method: "GET",
        url: variable.MainUrl + `api/v1/departament/`
      }).then(response => {
        setDepartament(response.data)
      })
      }, [])

    return (
      <NavDropdown title="Departament" id="offcanvasCategoryDropdown">
        {departament.map(p => (
        <NavDropdown.Item key={p.id}><Link to={{ pathname: `/departament/${p.id}`, fromDashboard: false }}>{p.departament_title}</Link></NavDropdown.Item>
        ))}
        <hr />
        <div className="text-center">
            <Link to={{ pathname: '/departament_add', fromDashboard: false }}>Add departament</Link>
        </div>
      </NavDropdown>
    )
}