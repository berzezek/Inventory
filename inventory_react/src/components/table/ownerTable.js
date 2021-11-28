import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useGetApi from '../hooks/GetApi';


export default function OwnerTable() {

    let num = 1;

    return(
        <div className="">
        <h3 className="text-center">All Owner`s</h3>
        <Table striped bordered hover variant="light" className="text-center">
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Departament</th>
            </tr>
          </thead>
          <tbody>
            {useGetApi({name: 'owner'}).map((ow) => (
            <tr key={ow.id}>
              <td>{num++}</td>
              <td><Link to={{ pathname: `/owner_detail/${ow.id}`, fromDashboard: false }} className="ms-2">{ow.surname} {ow.name[0]}.</Link></td>
              <td>{ow.departament ? <Link to={{ pathname: `/departament_detail/${ow.departament.id}`, fromDashboard: false }} className="">{ow.departament.departament_title}</Link> : "-" }</td>
            </tr>
            ))}
          </tbody>
        </Table>
            <br/>
            <div className="text-center">
                <Link to={{ pathname: '/owner_add', fromDashboard: false }}><button className="btn btn-success">Add Owner</button></Link>
            </div>
        </div>
    )
}
