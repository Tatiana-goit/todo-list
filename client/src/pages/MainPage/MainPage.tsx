import React from 'react';
import { useState, useCallback } from 'react';
import Header from '../../components/Header/Header';
import CardView from '../../components/CardView/CardView';
import ListView from '../../components/ListView/ListView';
import TodoListButton from '../../components/TodoListButton/TodoListButton';
import CountLists from '../../components/CountLists/CountLists';
import Switcher from '../../components/Switcher/Switcher';
import { Box } from '@mui/material';
import PaginationTodolists from '../../components/PaginationTodoLists/PaginationTodoLists';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';

export default function MainPage() {
	const [view, setView] = useState<string>('card');
	const [listsOnPage, setListsOnPage] = useState(3);
	const [todoLists, setTodoLists] = useState<TodoLists[] | []>([]);

	function handleChange(_: React.MouseEvent<HTMLElement>, nextView: string) {
		setView(nextView);
	}

	const handleSetTodos = useCallback(
		(todos: TodoLists[]) => {
			setTodoLists(todos);
		},
		[setTodoLists]
	);

	return (
		<>
			<Header />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					p: 5,
					pb: 0,
				}}
			>
				<TodoListButton />
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					<CountLists
						setListsOnPage={(event) => {
							setListsOnPage(Number(event.target.value));
						}}
						listsOnPage={String(listsOnPage)}
					/>
					<Switcher view={view} handleChange={handleChange} />
				</Box>
			</Box>
			{view === 'card' && <CardView todoLists={todoLists} />}
			{view === 'list' && <ListView todoLists={todoLists} />}
			<PaginationTodolists pageSize={listsOnPage} setTodos={handleSetTodos} />
		</>
	);
}
