import React, { ReactElement, FC } from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import theme from './theme';
import { BaseContainer } from './sharedStyle';
import './App.css';

interface IProps {
	children: ReactElement;
}

const ThemeProvider: FC<IProps> = ({ children }) => {
	const themeValue = 'dark';

	return (
		<StyledComponentsProvider theme={theme[themeValue]}>
			<BaseContainer>{children}</BaseContainer>
		</StyledComponentsProvider>
	);
};

export default ThemeProvider;
