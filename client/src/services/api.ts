import axios from 'axios';

export async function getTodoLists(limit: number, offset: number) {
	const searchQuery =
		offset > 0 ? `?limit=${limit}&offset=${offset}` : `?limit=${limit}`;
	try {
		const { data } = await axios.get(
			`http://localhost:3000/todolists${searchQuery}`
		);
		console.log('data', data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getTodoListById(id: string) {
	try {
		const data = await axios.get(`http://localhost:3000/todolists/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
}

// export async function deleteTodoList(id: string) {
// 	try {
// 		const response = await axios.delete(
// 			`http://localhost:3000/todolists/${id}`
// 		);
// 		return response;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// export async function createTodoList(todoList: CreateTodoLists) {
// 	try {
// 		const response = await axios.post('/todolists', todoList);
// 		return response;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
