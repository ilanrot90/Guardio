import { usePaginatedQuery } from 'react-query';
import axios from 'axios';
import { apiCall } from 'utils/Axios.utils';

export default function useFetchBreaches(page) {
	return usePaginatedQuery(
		['breaches', { page }],
		async (key, { page }) => {
			const source = axios.CancelToken.source();
			const { data } = await apiCall({
				url: 'https://guard.io/v2/hiring/fe/breaches',
				params: { offset: page },
				cancelToken: source.token,
			});

			return data;
		},
		{
			suspense: true,
			refetchOnWindowFocus: false,
			initialData: { items: [], total: 0, error: null },
			initialState: true,
		}
	);
}
