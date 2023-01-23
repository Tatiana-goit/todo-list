import React from 'react';
import { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header/Header';
import CardView from '../../components/CardView/CardView';
import ListView from '../../components/ListView/ListView';
import ButtonCreate from '../../components/ButtonCreate/ButtonCreate';
import CountLists from '../../components/CountLists/CountLists';
import Switcher from '../../components/Switcher/Switcher';
import Pagination from '../../components/Pagination/Pagination';
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
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				sx={{
					p: 5,
					pb: 0,
				}}
			>
				<ButtonCreate />
				<Box display="flex" justifyContent="flex-end">
					<CountLists
						setListsOnPage={(event) => {
							setListsOnPage(Number(event.target.value));
						}}
						listsOnPage={String(listsOnPage)}
					/>
					<Switcher view={view} handleChange={handleChange} />
				</Box>
			</Box>
			{view === 'list' && <ListView todoLists={todoLists} />}
			{view === 'card' && <CardView todoLists={todoLists} />}
			<Pagination limit={listsOnPage} setTodos={handleSetTodos} />
		</>
	);
}
