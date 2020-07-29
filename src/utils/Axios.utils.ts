import axios, { AxiosAdapter } from 'axios';

export const apiCall: AxiosAdapter = ({ method, url, data }) => axios({ method, url, data });
