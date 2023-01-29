import React from 'react';
import { useState, useCallback } from 'react';
import { Box, Button, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CardView from '../../components/CardView/CardView';
import ListView from '../../components/ListView/ListView';
import CountLists from '../../components/CountLists/CountLists';
import Switcher from '../../components/Switcher/Switcher';
import Pagination from '../../components/Pagination/Pagination';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';
import { useSettings } from '../../context/settingsContext';

export default function MainPage() {
	const settings = useSettings();

	const [todoLists, setTodoLists] = useState<TodoLists[] | []>([]);

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
				<Button
					component={RouterLink}
					to="todolist/create"
					variant="contained"
					sx={{ width: 230 }}
				>
					<AddIcon sx={{ mr: 1 }} />
					Create new todo list
				</Button>
				<Box display="flex" justifyContent="flex-end">
					{settings && (
						<CountLists
							setListsOnPage={(event) => {
								settings?.changeListsOnPage(Number(event.target.value));
							}}
							listsOnPage={String(settings.listsOnPage)}
						/>
					)}
					{settings && (
						<Switcher view={settings.view} handleChange={settings.toggleView} />
					)}
				</Box>
			</Box>
			{settings && (
				<Container disableGutters>
					{settings.view === 'list' && <ListView todoLists={todoLists} />}
					{settings.view === 'card' && <CardView todoLists={todoLists} />}
					<Pagination limit={settings.listsOnPage} setTodos={handleSetTodos} />
				</Container>
			)}
		</>
	);
}
