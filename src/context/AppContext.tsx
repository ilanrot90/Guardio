import React, { FC } from 'react';
import { Theme } from 'types';

interface IState {
	themeKey: Theme;
}
const { theme } = localStorage.getItem('userPref') ? JSON.parse(localStorage.getItem('userPref') || '') : { theme: 'dark' };

const initialState = {
	themeKey: theme,
};

export type Action =
	| {
			type: 'TOGGLE_THEME';
	  }
	| {
			type: 'RESET_STATE';
	  };

type Reducer = (state: IState, action: Action) => IState;

const reducer: Reducer = (state, { type }) => {
	switch (type) {
		case 'TOGGLE_THEME': {
			const themeKey = state.themeKey === 'dark' ? 'light' : 'dark';
			localStorage.setItem('userPref', JSON.stringify({ theme: themeKey }));
			return { ...state, themeKey: themeKey };
		}
		case 'RESET_STATE': {
			return { ...initialState };
		}
		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
};
// just to mock initial dispatch
const defaultDispatch: React.Dispatch<Action> = () => initialState;
const StateContext = React.createContext<IState>(initialState);
const DispatchContext = React.createContext(defaultDispatch);

const ContextProvider: FC<{ children: React.ReactElement }> = ({ children }) => {
	const [state, dispatch] = React.useReducer<React.Reducer<IState, Action>>(reducer, initialState);
	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

function useState() {
	const context = React.useContext(StateContext);
	if (context === undefined) {
		throw new Error('FirebaseStateContext must be used within a FirebaseContextProvider');
	}
	return context;
}

function useDispatch() {
	const context = React.useContext(DispatchContext);
	if (context === undefined) {
		throw new Error('FirebaseDispatchContext must be used within a FirebaseContextProvider');
	}
	return context;
}

function useContext(): [IState, React.Dispatch<Action>] {
	return [useState(), useDispatch()];
}

export { ContextProvider, useDispatch, useState, useContext };
