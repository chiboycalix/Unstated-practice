import React from 'react';
import { Subscribe } from 'unstated';

import UserContainer from '../../Containers/UserContainer/';
import UserList from '../UserList';

function Users() {
	return (
		<Subscribe to={[UserContainer]}>
			{userStore => {
				return <UserList userStore={userStore} chi="nono" />;
			}}
		</Subscribe>
	);
}

export default Users;
