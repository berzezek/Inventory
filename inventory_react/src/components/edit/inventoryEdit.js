import React, {useState} from 'react';
import axios from 'axios';
import {variable} from '../global/url';
import { useHistory } from "react-router-dom";
import useGetApi from '../hooks/GetApi';


export default function InventoryEdit(props) {

  const history = useHistory();
  const id = props.id;
  const name = props.name;
  const [title, setTitle] = useState(props.title);
  const [inventoryDescription, setInventoryDescription] = useState(props.inventoryDescription);
  const [serialNumber, setSerialNumber] = useState(props.serialNumber);
  const [price, setPrice] = useState(props.price);
  const [datePurchase, setDatePurchase] = useState(props.datePurchase);

  const [inventoryCategory, setInventoryCategory] = useState([]);
  const [inventoryOwner, setInventoryOwner] = useState([]);

  const dataUser = {
    title: title,
    inventory_description: inventoryDescription,
    serial_number: serialNumber,
    price: price,
    date_purchase: datePurchase,
    category: inventoryCategory.id,
    owner: inventoryOwner.id,
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
        headers: {'Authorization': `Token ${window.localStorage['access_token']}`},
        method: 'put',
        url: variable.MainUrl + `api/v1/${name}/${id}/`,
        data: dataUser
      }).then(
        alert(`The ${name} was been edited`),
        history.push(`/${name}`),
        window.location.reload()
        )
  }

  return (
    <div className="container sm">
        <h3 className="text-center">Edit Inventory</h3>
        <form className="form-control p-2" onSubmit={handleSubmit}>
            <div className="d-flex">
            <select className="form-select w-50 me-1" name="category" onChange={(e) => setInventoryCategory(e.target.value)}>
              <option>Select category</option>
              {useGetApi({name: 'category'}).map(c => (
              <option key={c.id} value={c.id}>{c.category_title}</option>
              ))}
            </select>

            <select className="form-select w-50" name="owner" onChange={(e) => setInventoryOwner(e.target.value)}>
              <option>Select owner</option>
              {useGetApi({name: 'owner'}).map(o => (
              <option key={o.id} value={o.id}>{o.surname} {o.name[0]}.</option>
              ))}
            </select>
            </div>
            <input
                type="text"
                className="form-control my-2"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            <input
                type="textarea"
                className="form-control mb-2"
                placeholder="Description"
                name="inventory_description"
                value={inventoryDescription}
                onChange={(e) => setInventoryDescription(e.target.value)}
                />
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Serial number"
                name="serial_number"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                />
            <div className="d-flex">
            <input
                type="text"
                className="form-control mb-2 w-50"
                placeholder="Price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            <input
                type="date"
                className="form-control mb-2 w-50 ms-1"
                placeholder="Date of purchase"
                name="date_purchase"
                value={datePurchase}
                onChange={(e) => setDatePurchase(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-secondary my-2">Submit</button>
        </form>
    </div>
  );
}

