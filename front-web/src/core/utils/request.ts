import axios, { Method } from 'axios';


type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

const BASE_URL = 'https://ulasoftware-catalog-5e214633d80d.herokuapp.com';

export const makeRequest = ({ method = 'GET', url, data, params}: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params
    });
}