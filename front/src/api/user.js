import axios from 'axios';

export const saveUser = (data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/user/save`, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        })
}