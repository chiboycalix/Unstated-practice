import { Container } from 'unstated';
import axios from 'axios';

class UserContainer extends Container {
	state = {
		users: [],
		error: null,
	};
	fetchUser = async () => {
		let result;
		try {
			result = await axios.get('https://jsonplaceholder.typicode.com/users');
			this.setState({
				...this.state,
				users: result.data,
			});
		} catch (error) {
			console.log(error);
			this.setState({
				error,
			});
		}
		return result.data;
	};
}

export { UserContainer };
