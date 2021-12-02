import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { variable } from '../global/url';

function useGetApi(props) {

    const [apiArray, setApiArray] = useState([])

    useEffect(() => {
        async function fetchData() {
            await axios({
                method: "GET",
                url: variable.MainUrl + `api/v1/${props.name}/`,
            }).then(response => {
                setApiArray(response.data)
            })
          }
          fetchData();
    }, [])

    return apiArray;
}

export default useGetApi;