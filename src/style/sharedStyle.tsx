import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';

export const centerFlex = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BaseContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	flex-direction: column;
	background-color: ${({ theme }) => theme.background};
`;
// text component
interface ITextProps {
	size?: number;
	weight?: number;
	color?: string;
}
export const Text = styled.p.attrs(({ as }: { as?: 'p' | 'div' | 'span' | 'h2' | 'h1' }) => ({
	as,
}))<ITextProps>`
	${({ theme, color, size, weight }) => css`
		font-size: ${size || theme.text.m}px;
		font-weight: ${weight || 300};
		color: ${color || theme.contrastText};
		margin: 0;
	`}
`;

export const scrollbar = css`
	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		background-color: #ffffff;
	}
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
		/* height: 6px; */
		background-color: rgba(166, 185, 200, 0.5);
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 6px;
		background-color: rgba(166, 185, 200, 0.5);
	}
	&::-webkit-scrollbar-thumb:hover {
		background-color: rgba(166, 185, 200, 1);
	}

	&:hover::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}
`;

export const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.main};
	margin-top: auto;
`;
