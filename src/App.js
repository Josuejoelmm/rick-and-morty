import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContainer from './ui/components/MainContainer';
import Provider from './api/Provider';
import CharacterDetails from './ui/components/CharacterDetails';
import Layout from './ui/layout/Layout';

function App() {
	return (
		<BrowserRouter>
			<Provider>
				<Layout>
					<Switch>
						<Route exact path="/" component={MainContainer} />
						<Route path="/characters/:characterId" component={CharacterDetails} />
					</Switch>
				</Layout>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
