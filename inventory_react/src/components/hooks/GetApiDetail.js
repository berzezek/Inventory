import { useState, useEffect } from 'react';
import axios from 'axios';
import { variable } from '../global/url';

function useGetApiDetail(props) {

    const [apiArrayDetail, setApiArrayDetail] = useState({});

    useEffect(() => {
        async function fetchData() {
            await axios({
                method: 'GET',
                url: variable.MainUrl + `api/v1/${props.name}/${props.id}`
            }).then(response => {
                setApiArrayDetail(response.data)
            })
        }
        fetchData();

    }, [props.id])

    return apiArrayDetail;
}

export default useGetApiDetail;