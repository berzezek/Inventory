import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './components/navbar/userNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import InventoryTable from './components/table/inventoryTable';
import CategoryTable from './components/table/categoryTable';
import OwnerTable from './components/table/ownerTable';
import DepartamentTable from './components/table/departamentTable';

import CategoryAdd from './components/forms/categoryAdd';
import OwnerAdd from './components/forms/ownerAdd';
import InventoryAdd from './components/forms/inventoryAdd';
import DepartamentAdd from './components/forms/departamentAdd';

import CategoryDetail from './components/detail/categoryDetail';
import OwnerDetail from './components/detail/ownerDetail';
import DepartamentDetail from './components/detail/departamentDetail';
import InventoryDetail from './components/detail/inventoryDetail';


class App extends React.Component {
  render() {
    return (
    <Router>
      <UserNavbar />
      <br/>
      <br/>
        <div className="container">
          <Switch>

            <Route path="/category"><CategoryTable /></Route>
            <Route path="/departament"><DepartamentTable /></Route>
            <Route path="/owner"><OwnerTable /></Route>
            <Route path="/inventory"><InventoryTable /></Route>

            <Route path="/category_detail/:id" exact component={CategoryDetail} />
            <Route path="/departament_detail/:id" exact component={DepartamentDetail} />
            <Route path="/owner_detail/:id" exact component={OwnerDetail} />
            <Route path="/inventory_detail/:id" exact component={InventoryDetail} />

            <Route path="/category_add"><CategoryAdd /></Route>
            <Route path="/departament_add"><DepartamentAdd /></Route>
            <Route path="/owner_add"><OwnerAdd /></Route>
            <Route path="/inventory_add"><InventoryAdd /></Route>

          </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
