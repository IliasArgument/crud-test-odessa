import axios from 'axios';

export const httpGet = (url) => {
    return axios.get(url);
};

// Post:
export const httpPost = (url, data) => {
    return axios.post(url, data);
};

// Put:
export const httpPut = (url, data) => {
    return axios.put(url, data);
};

// Delete:
export const httpDelete = (url) => {
    return axios.delete(url);
};
