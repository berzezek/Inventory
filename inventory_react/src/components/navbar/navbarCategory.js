import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import {variable} from '../global/url';

export default  function NavbarCategory() {
      const [category, setCategory] = useState([])

      useEffect(() =>{
      axios({
        method: "GET",
        url: variable.MainUrl + `api/v1/category/`
      }).then(response => {
        setCategory(response.data)
      })
      }, [])

    return (
      <NavDropdown title="Category" id="offcanvasCategoryDropdown">
        {category.map(p => (
        <NavDropdown.Item key={p.id}><Link to={{ pathname: `/category/${p.id}`, fromDashboard: false }}>{p.category_title}</Link></NavDropdown.Item>
        ))}
        <hr />
        <div className="text-center">
            <Link to={{ pathname: '/category_add', fromDashboard: false }}>Add category</Link>
        </div>
      </NavDropdown>
    )
}