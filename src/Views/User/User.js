import React from 'react';

function Users(props) {
	const { user } = props;
	return (
		<ul key={user.id}>
			<li> {user.name} </li>
		</ul>
	);
}

export default Users;
