import React, { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Text } from 'style/sharedStyle';
import Pagination from './Pagination';
import BreachList from './BreachList';
import Loader from 'components/Loader';
import useFetchBreaches from 'hooks/useFetchBreaches.js';
import qs from 'qs';
import { IBreach } from 'types';
import { useRouter } from 'hooks/useRouter';

const PageContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	padding-top: ${({ theme }) => theme.spacing.xxl}px;
`;

const Title = styled(Text).attrs({
	as: 'h1',
	size: 24,
})`
	margin-bottom: ${({ theme }) => theme.spacing.xxl}px;
	margin-left: ${({ theme }) => theme.spacing.xxl}px;
`;

const BreachContainer: FC<{ id?: string }> = ({ id }) => {
	const { history, query } = useRouter();
	const [page, setPage] = useState(Number(query?.page || 0));
	// @ts-ignore
	const { data, isFetching, latestData, ...rest } = useFetchBreaches(page);
	const selectedBreach = useMemo(() => {
		if (!id) return null;
		return data?.items.find((breach: IBreach) => breach.Title === id);
	}, [id, data]);

	const setNextPage = useCallback(
		(showNext: boolean) => {
			const nextPage = showNext ? page + 1 : page - 1;
			history.push(qs.stringify({ page: nextPage }, { addQueryPrefix: true }));
			setPage(showNext ? page + 1 : page - 1);
		},
		[page]
	);

	console.log({ rest });

	return (
		<PageContainer>
			<Title>Known Data Breaches ( By Gruadio )</Title>
			{isFetching ? <Loader /> : <BreachList breaches={data.items} />}
			<Pagination currentPage={page} total={data?.total || 0} callback={setNextPage} />
		</PageContainer>
	);
};

export default BreachContainer;
