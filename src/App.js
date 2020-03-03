import React, { useState } from 'react';
import Navbar from './ui/components/Navbar';
import MainContainer from './ui/components/MainContainer';
import Context from './api/Context';

function App() {

	return (
		<Context.Provider>
			<div className="App">
				<Navbar />
				<MainContainer />
			</div>
		</Context.Provider>
	);
}

export default App;
