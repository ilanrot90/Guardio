import React from 'react';
import Header from 'components/Header/header';
import BreachContainer from 'screens/BreachList/BreachContainer';
import { BrowserRouter, Switch, Route, match } from 'react-router-dom';

const Application = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route
					path="/Guardio/:id"
					render={({ match }: { match: match<{ id: string }> }) => <BreachContainer id={match.params.id} />}
					id={'modal'}
				/>
				<Route path="/Guardio" component={BreachContainer} />
			</Switch>
		</BrowserRouter>
	);
};

export default Application;
