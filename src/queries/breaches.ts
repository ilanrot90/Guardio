import axios from 'axios';
import { apiCall } from 'utils/Axios.utils';

export const getBreaches = async (page: number) => {
	const source = axios.CancelToken.source();
	const { data } = await apiCall({
		url: 'https://guard.io/v2/hiring/fe/breaches',
		params: { offset: page },
		cancelToken: source.token,
	});
	return data;
};
