import React from 'react';
import { Card } from 'react-bootstrap';
import DeleteComp from '../delete/DeleteComp';
import useGetApiDetail from '../hooks/GetApiDetail'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OwnerEdit from '../edit/ownerEdit';
import EditComp from '../edit/EditComp';


export default function OwnerDetail({match}) {

    const id = match.params.id
    const owner = useGetApiDetail({name: 'owner', id})

    return(
      <Router>
        <div className="container">
          <Card border="dark">
            <Card.Header>
            <div className="d-flex">
             <div className="me-5">Owner detail</div>
                <div className="d-flex justify-content-around">
                      <Link to={{ pathname: `/owner_edit/${id}`, fromDashboard: false, }} className="">
                        <EditComp />
                      </Link>
                    <DeleteComp id={id} name={'owner'}/>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>{owner.surname} {owner.name}</Card.Title>
              <Card.Text>
                {owner.owner_description}
              </Card.Text>
              <Card.Text>
                {owner.departament ? owner.departament.departament_title : "-"}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
            <Route path="/owner_edit/:id" >
              <OwnerEdit
               id={id}
               name={'owner'}
               ownerName = {owner.name}
               ownerSurname = {owner.surname}
               ownerDescription = {owner.owner_description}
               ownerCategory = {owner.departament}
               />
             </Route>
      </Router>
    )
}

