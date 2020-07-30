import React, { FC, Suspense } from 'react';
import styled from 'styled-components';
import { IBreach } from 'types';
import { Text } from 'style/sharedStyle';
import Loader from 'components/Loader';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.main};
	margin-top: auto;
`;
const Breach = styled(Card)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 200px;
	background-color: ${({ theme }) => theme.dark};
	padding: ${({ theme }) => theme.spacing.m}px;
`;

const Img = styled(Card.Img)`
	width: 120px;
	height: 60px;
	margin: 0 auto;
`;

const BreachCard: FC<{ breach: IBreach }> = ({ breach }) => {
	return (
		<Breach style={{ width: '18rem' }}>
			<Img variant="top" src={breach.LogoPath} />
			<Card.Body>
				<Card.Title>
					<Text weight={500}> Title: {breach.Title}</Text>
				</Card.Title>
				<Card.Subtitle>
					<Text size={10} weight={500}>
						Added at: {new Date(breach.AddedDate).toLocaleString()}
					</Text>
				</Card.Subtitle>
			</Card.Body>
			<StyledButton variant="primary">
				<Text weight={500}>Explore Breach</Text>
			</StyledButton>
		</Breach>
	);
};

interface IProps {
	breaches: Array<IBreach>;
}

const BreachList: FC<IProps> = ({ breaches }) => {
	return (
		<PageContainer>
			<Suspense fallback={<Loader />}>
				{breaches.map(breach => (
					<li key={breach.Name}>
						<BreachCard breach={breach} />
					</li>
				))}
			</Suspense>
		</PageContainer>
	);
};

export default React.memo(BreachList);
