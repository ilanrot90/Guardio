import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Text } from 'style/sharedStyle';

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	margin: auto;
`;

const Dot = styled.div<{ delay: string }>`
	background-color: ${({ theme }) => theme.light};
	border-radius: 50%;
	width: 10px;
	height: 10px;
	margin: 0 5px;
	/* Animation */
	animation: ${BounceAnimation} 0.5s linear infinite;
	animation-delay: ${({ delay }) => delay};
`;

interface IProps {
	displayText?: boolean;
}
const Loader: FC<IProps> = ({ displayText }) => (
	<DotWrapper>
		<Dot delay="0s" />
		<Dot delay=".1s" />
		<Dot delay=".2s" />
		{displayText && (
			<Text weight={500} size={12}>
				Loading{' '}
			</Text>
		)}
	</DotWrapper>
);

export default React.memo(Loader);
