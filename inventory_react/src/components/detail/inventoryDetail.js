import React from 'react';
import { Card, Table } from 'react-bootstrap';
import DeleteComp from '../delete/DeleteComp';
import EditComp from '../edit/EditComp';
import useGetApiDetail from '../hooks/GetApiDetail'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import InventoryEdit from '../edit/inventoryEdit';


export default function InventoryDetail({match}) {

    const id = match.params.id
    const inventory = useGetApiDetail({name: 'inventory', id})

    return(
      <Router>
        <div className="container">
        <h3 className="text-center">InventoryDetail</h3>
          <Card border="dark">
            <Card.Header>
            <div className="d-flex">
             <div className="me-5"><span className="text-muted">Serial Number: </span></div>
                <div className="d-flex justify-content-around">
                      <Link to={{ pathname: `/inventory_edit/${id}`, fromDashboard: false, }} className="">
                        <EditComp />
                      </Link>
                    <DeleteComp id={id} name={'inventory'}/>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <p><span className="text-muted">Title: </span>{inventory.title}</p>
              </Card.Title>
              <Card.Text>
                <Table striped bordered hover size="sm" className="">
                  <tbody>
                    <tr>
                      <td className="col-3">
                        <p className="text-muted text-end me-2">Serial: </p>
                        <p className="text-muted text-end me-2">Category: </p>
                        <p className="text-muted text-end me-2">Owner: </p>
                        <p className="text-muted text-end me-2">Price: </p>
                        <p className="text-muted text-end me-2">Date of purchase: </p>
                        <p className="text-muted text-end me-2">Description: </p>
                      </td>

                      <td className="col-9">
                        <p className="ms-2">{inventory.serial_number}</p>
                        <p className="ms-2">{inventory.category ? inventory.category.category_title : "---"}</p>
                        <p className="ms-2">{inventory.owner ? `${inventory.owner.surname} ${inventory.owner.name}` : "-IN STOCK-"}</p>
                        <p className="ms-2">{inventory.price}$</p>
                        <p className="ms-2">{inventory.date_purchase}</p>
                        <p className="ms-2">{inventory.inventory_description}</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
            <Route path="/inventory_edit/:id" >
              <InventoryEdit
               id={id}
               name={'inventory'}
               title = {inventory.title}
               inventoryDescription = {inventory.inventory_description}
               serialNumber = {inventory.serial_number}
               price = {inventory.price}
               datePurchase = {inventory.date_purchase}
               inventoryCategory = {inventory.category}
               inventoryOwner = {inventory.owner}
               />
             </Route>
      </Router>
    )
}
