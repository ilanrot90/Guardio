import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import { IProps } from './types';
import ThemeProvider from 'style/ThemeProvider';
import { ContextProvider } from 'context/AppContext';
import Application from './App';
import { ReactQueryConfigProvider } from 'react-query';
import Loader from './components/Loader';

const queryConfig = {
	shared: {
		suspense: true,
		refetchOnWindowFocus: false,
	},
};

const RootProviders = ({ children }: IProps) => {
	return (
		<ContextProvider>
			<ReactQueryConfigProvider config={queryConfig}>
				<Suspense fallback={<Loader />}>
					<ThemeProvider>{children}</ThemeProvider>
				</Suspense>{' '}
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
