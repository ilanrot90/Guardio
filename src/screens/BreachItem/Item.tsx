import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import React, { FC, useCallback } from 'react';
import { IBreach } from 'types';
import { Text } from 'style/sharedStyle';
import useRouter, { setQuery } from 'hooks/useRouter';
import { StyledButton } from 'style/sharedStyle';

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
	const { history, query } = useRouter();

	const setSelectedBreach = useCallback(
		(title: string) => () => {
			history.push(`/${title}${setQuery({ page: query.page || 0 })}`);
		},
		[history, query]
	);

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
			<StyledButton variant="primary" onClick={setSelectedBreach(breach.Title)}>
				<Text weight={500}>Explore Breach</Text>
			</StyledButton>
		</Breach>
	);
};

export default React.memo(BreachCard);
