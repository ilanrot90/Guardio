import styled, { css } from 'styled-components';

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
