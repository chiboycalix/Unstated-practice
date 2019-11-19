import React, { Component } from 'react';

class UserList extends Component {
	state = {
		response: [],
	};
	async componentDidMount() {
		const res = await this.props.userStore.fetchUser();
		this.setState({
			response: res,
		});
	}
	render() {
		return (
			<div>
				{this.state.response.map(user => {
					return (
						<ul key={user.id}>
							<li>{user.name}</li>
						</ul>
					);
				})}
			</div>
		);
	}
}
export default UserList;
