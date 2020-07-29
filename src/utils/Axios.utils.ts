import axios, { AxiosAdapter } from 'axios';

export const apiCall: AxiosAdapter = ({ method, url, data, params }) =>
	axios({ method, url, params, data, headers: { 'X-Best-Pokemon': 'Bulbasaur' } });
