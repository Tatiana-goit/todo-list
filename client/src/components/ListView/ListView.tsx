import React from 'react';
import { Container } from '@mui/material';
import ListViewTodoList from '../ListViewTodoList/ListViewTodoList';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';

interface Props {
	todoLists: TodoLists[];
}

export default function ListView({ todoLists }: Props) {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				paddingTop: 5,
			}}
		>
			{todoLists.map(({ id, name }) => (
				<ListViewTodoList key={id} id={id} name={name} />
			))}
		</Container>
	);
}
