import ReactDOM from 'react-dom';
import React from 'react';
import { IProps } from './types';
import ThemeProvider from 'style/ThemeProvider';
import Application from './App';
import 'normalize.css';

const RootProviders = ({ children }: IProps) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

const root = document.getElementById('root') as HTMLElement;
ReactDOM.unstable_createRoot(root).render(
	<RootProviders>
		<Application />
	</RootProviders>
);
