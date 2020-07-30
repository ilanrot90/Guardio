import React, { FC, useCallback } from 'react';
import Modal from 'react-bootstrap/Modal';
import { StyledButton, Text } from 'style/sharedStyle';
import { IBreach } from 'types';
import useRouter from 'hooks/useRouter';
import styled from 'styled-components';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Icon from 'components/icon';

const mapKeys: { [key: string]: string } = {
	Names: 'user',
	'Email addresses': 'email',
	Genders: 'genders',
	'Geographic locations': 'location',
	'IP addresses': 'sphere',
	Passwords: 'password',
};

const getIconName: (key: string) => string = (key: string) => mapKeys[key] || '';

const StyledModal = styled(Modal)`
	& .modal-content {
		background-color: ${({ theme }) => theme.dark};
		& .modal-header {
			align-items: center;
			justify-content: space-between;
			& .modal-title {
				margin-right: ${({ theme }) => theme.spacing.l}px;
			}
		}
	}
`;

const ModalSection = styled(ListGroupItem)`
	margin-top: ${({ theme }) => theme.spacing.l}px;
	background-color: ${({ theme }) => theme.dark};
`;

const IconContainer = styled.span`
	width: 25px;
	height: 25px;
	margin: 0 ${({ theme }) => theme.spacing.s}px;
`;

const BreachModal: FC<{ breach: IBreach }> = ({ breach }) => {
	const { history } = useRouter();
	const hideModal = useCallback(() => {
		history.push('/Guardio/');
	}, [history]);

	return (
		<StyledModal show onHide={hideModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					<Text as={'h2'} weight={500} size={16}>
						{breach.Title}
					</Text>
				</Modal.Title>
				{breach.DataClasses.map(name => (
					<OverlayTrigger
						key={name}
						placement={'top'}
						overlay={
							<Tooltip id={`tooltip-${name}`}>
								<strong>{name}</strong>
							</Tooltip>
						}
					>
						<IconContainer key={name}>
							<Icon name={getIconName(name)} />
						</IconContainer>
					</OverlayTrigger>
				))}
			</Modal.Header>
			<Modal.Body>
				<Text>{breach.Description}</Text>
				<ModalSection>
					<Text>Name: {breach.Name}</Text>
					<Text>Domain: {breach.Domain}</Text>
					<Text>BreachDate: {breach.BreachDate}</Text>
					<Text>Pwn Count: {breach.PwnCount}</Text>
					<Text>Lest Modified Date: {new Date(breach.ModifiedDate).toLocaleString()}</Text>
				</ModalSection>
			</Modal.Body>
			<Modal.Footer>
				<StyledButton onClick={hideModal}>Close</StyledButton>
			</Modal.Footer>
		</StyledModal>
	);
};

export default React.memo(BreachModal);
