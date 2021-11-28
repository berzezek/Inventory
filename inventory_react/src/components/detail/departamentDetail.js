import React from 'react';
import { Card } from 'react-bootstrap';
import DeleteComp from '../delete/DeleteComp';
import useGetApiDetail from '../hooks/GetApiDetail'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DepartamentEdit from '../edit/departamentEdit';
import EditComp from '../edit/EditComp';


function OwnerDetail({match}) {

    const id = match.params.id
    const departament = useGetApiDetail({name: 'departament', id})


    return(
        <Router>
        <div className="container">
          <Card border="dark">
            <Card.Header>
            <div className="d-flex">
             <div className="me-5">Departament detail</div>
                <div className="d-flex justify-content-around">
                      <Link to={{ pathname: `/category_edit/${id}`, fromDashboard: false, }} className="">
                        <EditComp />
                      </Link>
                    <DeleteComp id={id} name={'departament'}/>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>{departament.departament_title}</Card.Title>
              <Card.Text>
                {departament.departament_description}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
            <Route path="/category_edit/:id" >
              <DepartamentEdit
               id={id}
               name={'departament'}
               title = {departament.departament_title}
               description = {departament.departament_description}
               />
             </Route>
      </Router>
    )
}

export default OwnerDetail;