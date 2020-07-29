import ReactDOM from 'react-dom';
import React from 'react';
import { IProps } from './types';
import ThemeProvider from 'style/ThemeProvider';
import { ContextProvider } from 'context/AppContext';
import Application from './App';
import 'normalize.css';

const RootProviders = ({ children }: IProps) => {
	return (
		<ContextProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</ContextProvider>
	);
};

const root = document.getElementById('root') as HTMLElement;
ReactDOM.unstable_createRoot(root).render(
	<RootProviders>
		<Application />
	</RootProviders>
);
