import ReactDOM from 'react-dom';
import React from 'react';
import { IProps } from './types';
import ThemeProvider from 'style/ThemeProvider';
import { ContextProvider } from 'context/AppContext';
import Application from './App';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ReactQueryConfigProvider } from 'react-query';

const queryConfig = {
	shared: {
		suspense: true,
	},
};

const RootProviders = ({ children }: IProps) => {
	return (
		<ContextProvider>
			<ReactQueryConfigProvider config={queryConfig}>
				<ThemeProvider>{children}</ThemeProvider>
				<ReactQueryDevtools />
			</ReactQueryConfigProvider>
		</ContextProvider>
	);
};

const root = document.getElementById('root') as HTMLElement;
ReactDOM.unstable_createRoot(root).render(
	<RootProviders>
		<Application />
	</RootProviders>
);
