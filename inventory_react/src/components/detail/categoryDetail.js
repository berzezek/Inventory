import React from 'react';
import { Card } from 'react-bootstrap';
import DeleteComp from '../delete/DeleteComp';
import useGetApiDetail from '../hooks/GetApiDetail'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CategoryEdit from '../edit/categoryEdit';
import EditComp from '../edit/EditComp';


export default function CategoryDetail({match}) {

    const id = match.params.id
    let category = useGetApiDetail({name: 'category', id})

    return(
        <Router>
            <div className="container lg-w-50">
              <Card border="dark">
                <Card.Header>
                <div className="d-flex">
                 <div className="me-5">Category detail</div>
                    <div className="d-flex justify-content-around">
                      <Link to={{ pathname: `/category_edit/${id}`, fromDashboard: false, }} className="">
                        <EditComp />
                      </Link>
                      <DeleteComp id={id} name={'category'}/>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{category.category_title}</Card.Title>
                  <Card.Text>
                    {category.category_description}
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <Route path="/category_edit/:id" >
              <CategoryEdit
               id={id}
               name={'category'}
               title = {category.category_title}
               description = {category.category_description}
               />
             </Route>
      </Router>
    )
}
