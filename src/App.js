import React from 'react';
import { Provider } from 'unstated';
import './App.css';
import Home from './Views/Home';
import UserSubscriber from './Subscribers/UserSubscriber';

function App() {
	return (
		<div className="App">
			<Provider>
				<Home />
				<UserSubscriber />
			</Provider>
		</div>
	);
}

export default App;
