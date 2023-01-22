export interface Todo {
	_id: string;
	text: string;
	isDone: boolean;
	createdDate: string;
}

export interface TodoLists {
	_id: number;
	name: string;
	todos: Todo[];
}

export type ViewType = 'card' | 'list';
