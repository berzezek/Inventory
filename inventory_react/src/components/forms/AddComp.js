import React, { useState } from 'react';
import axios from 'axios';
import {variable} from '../global/url';
import {csrftoken} from '../global/csrfToken';
import { Button } from 'react-bootstrap';


export default function AddComponent() {
    const [category_title, setCategory_title] = useState("")
    const [category_description, setCategory_description] = useState("")

    const AddNewCategory = async (e) => {
        e.preventDefault();
        const formField = new FormData()

        formField.append('category_title', category_title)
        formField.append('category_description', category_description)

    if (category_title) {
        await axios({
            headers: {Authorization: `JWT ${localStorage.getItem('token')}`},
            method: 'post',
            url: variable.MainUrl + `api/v1/category/`,
            data: formField
        })
        .then(response => {
            console.log(response)
        })
        .then(alert(`Category ${category_title} has been added`))
        } else {
            alert('Please enter any title')
        }
    }
return (
    <Button>Add</Button>
)}