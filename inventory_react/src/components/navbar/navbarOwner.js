import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import {variable} from '../global/url';


export default  function NavbarOwner() {

    const [owner, setOwner] = useState([])

    useEffect(() => {
        axios({
        method: "GET",
        url: variable.MainUrl + `api/v1/owner/`
        }).then(response => {
        setOwner(response.data)
        })
    }, [])

    return (
      <NavDropdown title="Owner" id="offcanvasOwnerDropdown">
        {owner.map(p => (
        <NavDropdown.Item key={p.id}><Link to={{ pathname: `/owner/${p.id}`, fromDashboard: false }}>{p.surname} {p.name[0]}.</Link></NavDropdown.Item>
        ))}
        <hr/>
        <div className="text-center">
            <Link to={{ pathname: '/owner_add', fromDashboard: false }}>Add owner</Link>
        </div>
      </NavDropdown>
    )
}