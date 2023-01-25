export interface Todo {
	_id: string;
	text?: string;
	isDone: boolean;
	createdDate: string;
}

export interface TodoLists {
	_id: number;
	name: string;
	todos: Todo[];
}

export interface CreateTodo {
	text: string;
	isDone?: boolean;
	createdDate: string;
}
export interface CreateTodoLists {
	name: string;
	todos: CreateTodo[];
}
