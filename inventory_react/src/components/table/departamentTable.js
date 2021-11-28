import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useGetApi from '../hooks/GetApi';

export default function DepartamentTable() {

    let num = 1

    return(
        <div className="">
        <h3 className="text-center">All Departament`s</h3>
        <Table striped bordered hover variant="light" className="text-center">
          <thead>
            <tr>
              <th>№</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {useGetApi({name: 'departament'}).map(dep => (
            <tr key={dep.id}>
              <td className="col-1">{num++}</td>
              <td className="col-4 text-start"><Link to={{ pathname: `/departament_detail/${dep.id}`, fromDashboard: false }} className="ms-2">{dep.departament_title}</Link></td>
              <td className="col-7">{dep.departament_description}</td>
            </tr>
            ))}
          </tbody>
        </Table>
            <br/>
            <div className="text-center">
                <Link to={{ pathname: '/departament_add', fromDashboard: false }}><button className="btn btn-success">Add Departament</button></Link>
            </div>
        </div>
    )
}
