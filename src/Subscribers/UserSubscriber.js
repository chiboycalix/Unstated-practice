import React from 'react';
import { Subscribe } from 'unstated';

import UserContainer from '../Containers/UserContainer';
import UserList from '../Views/UserList';
import HomeContainer from '../Containers/HomeContainer';

function UserSubscriber() {
	return (
		<Subscribe to={[UserContainer, HomeContainer]}>
			{(userStore, counterStore) => {
				return <UserList userStore={userStore} counterStore={counterStore} />;
			}}
		</Subscribe>
	);
}

export default UserSubscriber;
