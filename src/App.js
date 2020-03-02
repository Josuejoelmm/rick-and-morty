import React from 'react';
import Navbar from './ui/components/Navbar';
import MainContainer from './ui/components/MainContainer';
import Context from './ui/components/Context';

function App() {
	return (
		<Context.Provider value={{ data: ['josueMendez'] }}>
			<div className="App">
				<Navbar />
				<MainContainer />
			</div>
		</Context.Provider>
	);
}

export default App;
