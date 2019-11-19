import React from 'react';
import { Subscribe } from 'unstated';
import HomeContainer from '../../Containers/HomeContainer';

function Home() {
	return (
		<Subscribe to={[HomeContainer]}>
			{homeStore => {
				return (
					<div>
						{homeStore.state.counter}
						<button onClick={homeStore.increment}>increment</button>
						<button onClick={homeStore.decrement}>decrement</button>
					</div>
				);
			}}
		</Subscribe>
	);
}
export default Home;
