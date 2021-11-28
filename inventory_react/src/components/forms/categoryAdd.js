import React, { useState } from 'react';
import axios from 'axios';
import {variable} from '../global/url';
import {csrftoken} from '../global/csrfToken';

export default function CategoryAdd() {
    const [category_title, setCategory_title] = useState("")
    const [category_description, setCategory_description] = useState("")

    const AddNewCategory = async () => {

        const formField = new FormData()

        formField.append('category_title', category_title)
        formField.append('category_description', category_description)

    if (category_title) {
        await axios({
            headers: {"X-CSRFToken": csrftoken },
            method: 'post',
            url: variable.MainUrl + `api/v1/category/`,
            data: formField
        }).then(response => {
            alert(`Category ${category_title} has been added`);
            })
        } else {
            alert('Please enter any title')
        }
    }
    return (
        <div className="container sm">
            <h3 className="text-center">Add new Category</h3>
            <form className="form-control p-2" onSubmit={AddNewCategory}>
                <div className="d-flex my-2">
                <input
                    type="text"
                    className="form-control w-50  me-1"
                    placeholder="Category"
                    name="category_title"
                    value={category_title}
                    onChange={(e) => setCategory_title(e.target.value)}
                    />
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Description"
                    name="category_description"
                    value={category_description}
                    onChange={(e) => setCategory_description(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    )
}