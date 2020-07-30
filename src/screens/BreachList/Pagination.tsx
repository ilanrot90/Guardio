import React, { useMemo } from 'react';
import BootPagination from 'react-bootstrap/Pagination';
import { Text } from 'style/sharedStyle';
import styled from 'styled-components';

const PaginationContainer = styled(BootPagination)`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: auto;
	padding: 10px;
`;

const Controllers = styled.div`
	display: flex;
	align-items: center;
`;
const ButtonsContainer = styled.div`
	display: flex;
	width: 60px;
	justify-content: space-between;
	margin-left: ${({ theme }) => theme.spacing.m}px;

	& .page-link {
		background-color: ${({ theme }) => theme.dark};
		border: none;
		color: ${({ theme }) => theme.light};
		transition: opacity 0.125s ease-in-out;
		&:hover {
			opacity: 0.8;
		}
	}

	& .page-item.disabled .page-link {
		background-color: ${({ theme }) => theme.main};
		opacity: 0.4;
	}
`;
interface IProps {
	currentPage: number;
	callback: (showNextPage: boolean) => void;
	total: number;
}
const Pagination = ({ currentPage, total, callback }: IProps) => {
	const totalPages = useMemo(() => Math.ceil(total / 10), [total]);
	return (
		<PaginationContainer>
			<Text as={'span'} size={11} weight={500}>
				{`Page ${currentPage + 1} of ${totalPages}`}
			</Text>

			<Controllers>
				<Text as={'span'} size={11} weight={500}>
					{`${currentPage * 10 + 1} of ${currentPage * 10 + 10}`}
				</Text>
				<ButtonsContainer>
					<BootPagination.Prev disabled={currentPage === 0} onClick={() => callback(false)} />
					<BootPagination.Next disabled={currentPage === totalPages} onClick={() => callback(true)} />
				</ButtonsContainer>
			</Controllers>
		</PaginationContainer>
	);
};

export default React.memo(Pagination);
