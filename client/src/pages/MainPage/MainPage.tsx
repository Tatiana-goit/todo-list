import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import CardView from '../../components/CardView/CardView';
import todoLists from '../../data/todoLists';
import ListView from '../../components/ListView/ListView';
import TodoListButton from '../../components/TodoListButton/TodoListButton';
import Switcher from '../../components/Switcher/Switcher';
import { Container } from '@mui/material';
import PaginationTodolists from '../../components/PaginationTodoLists/PaginationTodoLists';

export default function MainPage() {
	const [viewVersion, setViewVersion] = useState<string>('card');

	function handleChange(
		_: React.MouseEvent<HTMLElement>,
		nextViewVersion: string
	) {
		setViewVersion(nextViewVersion);
	}

	return (
		<>
			<Header />
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: 5,
					paddingBottom: 0,
				}}
			>
				<TodoListButton />
				<Switcher viewVersion={viewVersion} handleChange={handleChange} />
			</Container>
			{viewVersion === 'card' && <CardView todoLists={todoLists} />}
			{viewVersion === 'list' && <ListView todoLists={todoLists} />}
			<PaginationTodolists />
		</>
	);
}
