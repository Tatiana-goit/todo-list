import { TodoLists } from '../shared/interfaces/todolist.interfaces';
import todoLists from '../data/todoLists';

interface Args {
	from: number;
	to: number;
}

interface Response {
	count: number;
	data: TodoLists[];
}

interface Service {
	getData: ({ from, to }: Args) => Promise<Response>;
}

const service: Service = {
	getData: ({ from, to }: Args) => {
		return new Promise((resolve) => {
			const data = todoLists.slice(from, to);
			resolve({
				count: todoLists.length,
				data: data,
			});
		});
	},
};

export default service;