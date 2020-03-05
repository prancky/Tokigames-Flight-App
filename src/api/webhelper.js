import axios from "axios";

export const get = (url, config) => axios.get(url, config);

export const post = (url, body, config) => axios.post(url, body, config);

export const put = (url, body, config) => axios.put(url, body, config);

export const del = (url, body, config) => axios.delete(url, config, body);
