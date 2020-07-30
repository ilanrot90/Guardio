import React, { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Text } from 'style/sharedStyle';
import Pagination from './Pagination';
import BreachList from './BreachList';
import Loader from 'components/Loader';
import useFetchBreaches from 'hooks/useFetchBreaches.js';
import { IBreach } from 'types';
import useRouter, { setQuery } from 'hooks/useRouter';
import BreachModal from '../SelectedBreach/SelectedBreachModal';

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
	const { data, isFetching } = useFetchBreaches(page);
	const selectedBreach = useMemo(() => {
		if (!id) return null;
		return data?.items.find((breach: IBreach) => breach.Title === id);
	}, [id, data]);

	const setNextPage = useCallback(
		(showNext: boolean) => {
			const nextPage = showNext ? page + 1 : page - 1;
			history.push(setQuery({ page: nextPage }));
			setPage(showNext ? page + 1 : page - 1);
		},
		[page, history]
	);

	return (
		<PageContainer>
			<Title>Known Data Breaches ( By Gruadio )</Title>
			{isFetching ? <Loader /> : <BreachList breaches={data.items} />}
			<Pagination currentPage={page} total={data?.total || 0} callback={setNextPage} />
			{selectedBreach && <BreachModal breach={selectedBreach} />}
		</PageContainer>
	);
};

export default BreachContainer;
