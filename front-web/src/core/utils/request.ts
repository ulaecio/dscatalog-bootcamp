import axios, { Method } from 'axios';


type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

const BASE_URL = 'https://metas-ulasoftware-puc-1aab2cf3cbf6.herokuapp.com';
//const BASE_URL = 'http://localhost:8080';

export const makeRequest = ({ method = 'GET', url, data, params}: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params
    });
}
