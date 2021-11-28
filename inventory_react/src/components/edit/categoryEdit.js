import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {csrftoken} from '../global/csrfToken';
import {variable} from '../global/url';
import { useHistory } from "react-router-dom";


export default function CategoryEdit(props) {

  const [data, setData] = useState([]);
  const history = useHistory();
  const id = props.id;
  const name = props.name
  const [category_title, setCategory_title] = useState(props.title);
  const [category_description, setCategory_description] = useState(props.description);
  const dataUser = {category_title: category_title, category_description: category_description};

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios({
        headers: {"X-CSRFToken": csrftoken },
        method: 'put',
        url: variable.MainUrl + `api/v1/${name}/${id}/`,
        data: dataUser
      }).then(res => {
      setData(res.data);
      alert(`The ${name} was been edited`)
    }).then(history.push(`/${name}`),
       window.location.reload()
    )
  }

  return (
      <div className="container sm mt-5">
        <h3 className="text-center">Edit category</h3>
        <form className="form-control p-2" onSubmit={handleSubmit}>
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
  );
}

