import React, { ReactElement, FC } from 'react';
import { useState } from 'context/AppContext';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import theme from './theme';
import { BaseContainer } from './sharedStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

interface IProps {
	children: ReactElement;
}

const ThemeProvider: FC<IProps> = ({ children }) => {
	const { themeKey } = useState();
	return (
		<StyledComponentsProvider theme={theme[themeKey]}>
			<BaseContainer>{children}</BaseContainer>
		</StyledComponentsProvider>
	);
};

export default ThemeProvider;
