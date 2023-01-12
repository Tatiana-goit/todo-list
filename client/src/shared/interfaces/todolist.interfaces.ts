export interface Todo {
	id: number;
	text: string;
	isDone: boolean;
	createdDate: string;
}

export interface TodoLists {
	id: number;
	name: string;
	todos: Todo[];
}
