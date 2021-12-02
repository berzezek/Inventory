import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useGetApi from '../hooks/GetApi';

export default function InventoryTable() {

    let num = 1;
    let inventoryCount = 0;
    let totalSum = 0;
    useGetApi({name: 'inventory'}).map(i => (totalSum += i.price, inventoryCount++))

    return(
        <div className="">
        <h3 className="text-center">All Inventories</h3>
        <p className="text-end text-light">Total: {inventoryCount} pcs, {totalSum} $</p>
        <Table striped bordered hover variant="light" className="text-center">
          <thead>
            <tr>
              <th>№</th>
              <th>Serial</th>
              <th>Title</th>
              <th>Price</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {useGetApi({name: 'inventory'}).map(i => (
            <tr key={i.id}>
              <td>{num++}</td>
              <td>{i.serial_number}</td>
              <td><Link to={{ pathname: `/inventory_detail/${i.id}`, fromDashboard: false }} className="ms-2">{i.title}</Link></td>
              <td className="text-end">{i.price} $</td>
              <td>{ i.owner ? <Link to={{ pathname: `/owner_detail/${i.owner.id}`, fromDashboard: false }}>{i.owner.surname} {i.owner.name[0]}.</Link> : "-IN STOCK-" }</td>
            </tr>
            ))}
            <tr>
            </tr>
          </tbody>
        </Table>
            <div className="text-center">
                <Link to={{ pathname: '/inventory_add', fromDashboard: false }}><button className="btn btn-success">Add Inventory</button></Link>
            </div>
        </div>
    )
}
