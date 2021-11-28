import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useGetApi from '../hooks/GetApi';

export default function CategoryTable() {

    let num = 1

    return(
        <div className="">
        <h3 className="text-center">All Categories</h3>
        <Table striped bordered hover variant="light" className="text-center shadow-lg rounded">
          <thead>
            <tr>
              <th>№</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {useGetApi({name: 'category'}).map(cat => (
            <tr key={cat.id}>
              <td className="col-1">{num++}</td>
              <td className="col-4 text-start">
                <Link to={{ pathname: `/category_detail/${cat.id}`, fromDashboard: false }} className="ms-2">
                  {cat.category_title}
                </Link>
              </td>
              <td className="col-6">{cat.category_description}</td>
            </tr>
            ))}
          </tbody>
        </Table>
            <br/>
            <div className="text-center">
                <Link to={{ pathname: '/category_add', fromDashboard: false }}><button className="btn btn-success">Add Category</button></Link>
            </div>
        </div>
    )
}
