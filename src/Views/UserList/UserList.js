import React, { Component } from 'react';
import User from '../User';

class UserList extends Component {
	state = {
		response: [],
	};
	async componentDidMount() {
		const {
			userStore: { fetchUser },
		} = this.props;
		const result = await fetchUser();
		this.setState({ response: result });
	}
	render() {
		const {
			counterStore: { increment, decrement },
		} = this.props;
		return (
			<div>
				<button onClick={increment}>increase</button>
				<button onClick={decrement}>decrease</button>
				{this.state.response.map(user => {
					return <User user={user} />;
				})}
			</div>
		);
	}
}
export default UserList;
