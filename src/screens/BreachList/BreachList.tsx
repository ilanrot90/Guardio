import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';

const PageContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const BreachList = () => {
	return (
		<PageContainer>
			<Pagination currentPage={1} total={150} />
		</PageContainer>
	);
};

export default BreachList;
