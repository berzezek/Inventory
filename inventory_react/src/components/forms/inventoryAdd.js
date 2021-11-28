import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {variable} from '../global/url';
import {csrftoken} from '../global/csrfToken';

export default function InventoryAdd() {

    const [title, setTitle] = useState("")
    const [inventory_description, setInventory_description] = useState("")
    const [serial_number, setSerial_number] = useState("")
    const [price, setPrice] = useState("")
    const [date_purchase, setDate_purchase] = useState("")
    const [category, setCategory] = useState("")
    const [owner, setOwner] = useState("")

    const [inventoryCategory, setInventoryCategory] = useState([])
    const [inventoryOwner, setInventoryOwner] = useState([])

    useEffect( async () =>{
        await axios({
        method: "GET",
        url: variable.MainUrl + `api/v1/owner/`
        }).then(response => {
        setInventoryOwner(response.data)
        })
    }, [])


    useEffect( async () =>{
        await axios({
        method: "GET",
        url: variable.MainUrl + `api/v1/category/`
        }).then(response => {
        setInventoryCategory(response.data)
        })
    }, [])

    const AddNewInventory = async () => {

        const formField = new FormData()

        formField.append('title', title)
        formField.append('inventory_description', inventory_description)
        formField.append('serial_number', serial_number)
        formField.append('price', price)
        formField.append('date_purchase', date_purchase)
        formField.append('category', category)
        formField.append('owner', owner)

    if (title && price && serial_number) {
        await axios({
            headers: {"X-CSRFToken":csrftoken },
            method: 'post',
            url: variable.MainUrl + `api/v1/inventory/`,
            data: formField
        }).then(response => {
            alert(`Inventory ${title} has been added`);
            console.log(formField);
            })
        } else {
            alert('Title, Serial number & Price must be added');
        }
    }

    return (
        <div className="container sm">
            <h3 className="text-center">Add new Inventory</h3>
            <form className="form-control p-2" onSubmit={AddNewInventory}>
                <div className="d-flex">
                <select className="form-select w-50 me-1" name="category" onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select category</option>
                  {inventoryCategory.map(c => (
                  <option key={c.id} value={c.id}>{c.category_title}</option>
                  ))}
                </select>

                <select className="form-select w-50" name="owner" onChange={(e) => setOwner(e.target.value)}>
                  <option value="">Select owner</option>
                  {inventoryOwner.map(o => (
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
                    value={inventory_description}
                    onChange={(e) => setInventory_description(e.target.value)}
                    />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Serial number"
                    name="serial_number"
                    value={serial_number}
                    onChange={(e) => setSerial_number(e.target.value)}
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
                    value={date_purchase}
                    onChange={(e) => setDate_purchase(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-secondary my-2">Submit</button>
            </form>
        </div>
    )
}
