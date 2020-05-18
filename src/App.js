import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContainer from './ui/components/MainContainer';
import NotFound from './ui/components/NotFound';
import Provider from './api/Provider';
import { Provider as ReduxProvider } from 'react-redux';
import store from './api/redux/store';
import CharacterDetails from './ui/components/CharacterDetails';
import Layout from './ui/layout/Layout';

function App() {
	return (
		<BrowserRouter>
			<ReduxProvider store={store}>
				<Provider>
					<Layout>
						<Switch>
							<Route exact path="/" component={MainContainer} />
							<Route path="/characters/:characterId" component={CharacterDetails} />
							<Route component={NotFound} />
						</Switch>
					</Layout>
				</Provider>
			</ReduxProvider>
		</BrowserRouter>
	);
}

export default App;