import React, { FC, Suspense } from 'react';
import styled from 'styled-components';
import { IBreach } from 'types';
import Loader from 'components/Loader';
import Item from '../BreachItem/Item';

const PageContainer = styled.ul`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fill, 250px);
	max-height: 70vh;
	overflow: overlay;
	justify-content: center;
	list-style: none;
	${({ theme }) => theme.utils.scrollbar}
`;

interface IProps {
	breaches: Array<IBreach>;
}

const BreachList: FC<IProps> = ({ breaches }) => {
	return (
		<PageContainer>
			<Suspense fallback={<Loader />}>
				{breaches.map(breach => (
					<li key={breach.Name}>
						<Item breach={breach} />
					</li>
				))}
			</Suspense>
		</PageContainer>
	);
};

export default React.memo(BreachList);
